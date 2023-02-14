import {useState, useRef, useContext} from 'react';
import {useHistory} from "react-router-dom";

import classes from './AuthForm.module.css';
import {AuthContext} from "../../store/auth-context";

const API_KEY = process.env.REACT_APP_API_KEY;

const AuthForm = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const emailInput = emailInputRef.current.value;
    const passwordInput = passwordInputRef.current.value;

    let path;
    if (isLogin) {
      path = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
    } else {
      path = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
    }

    const reqBody = {
      email: emailInput,
      password: passwordInput,
      returnSecureToken: true,
    };

    fetch(path, {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {'Content-Type': 'application/json'}
    })
        .then(res => {
          if (res.ok) return res.json();
          res.json().then(data => {
            let errorMessage = 'Authentication failed!';
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          })
        })
        .then(data => {
          const {idToken, expiresIn} = data;
          const expireTime = new Date(
              new Date().getTime() + +expiresIn * 1000
          );
          authCtx.loginHandler(idToken, expireTime.toISOString());
          history.replace('/');
        })
        .catch(err => {
          alert(err.message);
        })
  };

  return (
      <section className={classes.auth}>
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input ref={emailInputRef} type='email' id='email' required/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Your Password</label>
            <input ref={passwordInputRef} type='password' id='password' required/>
          </div>
          <div className={classes.actions}>
            <button>{isLogin ? 'Login' : 'Create Account'}</button>
            <button
                type='button'
                className={classes.toggle}
                onClick={switchAuthModeHandler}
            >
              {isLogin ? 'Create new account' : 'Login with existing account'}
            </button>
          </div>
        </form>
      </section>
  );
};

export default AuthForm;
