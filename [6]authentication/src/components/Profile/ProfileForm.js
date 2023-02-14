import {useRef, useContext} from "react";
import {useHistory} from "react-router-dom";
import classes from './ProfileForm.module.css';
import {AuthContext} from "../../store/auth-context";

const API_KEY = process.env.REACT_APP_API_KEY;

const ProfileForm = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const password = passwordInputRef.current.value;
    const reqBody = {idToken: authCtx.token, password, returnSecureToken: false};

    fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
        {method: 'POST', body: JSON.stringify(reqBody), headers: {'Content-Type': 'application/json'}}
    ).then(res => res.json())
        .then(_ => {
          authCtx.logoutHandler();
          history.replace('/auth');
        })
        .catch(error => console.error(error));
  }

  return (
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor='new-password'>New Password</label>
          <input ref={passwordInputRef} type='password' id='new-password'/>
        </div>
        <div className={classes.action}>
          <button onClick={submitHandler}>Change Password</button>
        </div>
      </form>
  );
}

export default ProfileForm;
