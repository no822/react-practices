import {useContext} from "react";
import {Link, useHistory} from 'react-router-dom';

import classes from './MainNavigation.module.css';
import {AuthContext} from "../../store/auth-context";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const logoutHandler = () => {
    authCtx.logoutHandler();
    history.replace('/');
  }

  return (
      <header className={classes.header}>
        <Link to='/'>
          <div className={classes.logo}>React Auth</div>
        </Link>
        <nav>
          <ul>
            <li>
              {!authCtx.isLogged && <Link to='/auth'>Login</Link>}
            </li>
            <li>
              {authCtx.isLogged && <Link to='/profile'>Profile</Link>}
            </li>
            <li>
              {authCtx.isLogged && <button onClick={logoutHandler}>Logout</button>}
            </li>
          </ul>
        </nav>
      </header>
  );
};

export default MainNavigation;
