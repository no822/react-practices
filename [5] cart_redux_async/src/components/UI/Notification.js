import {useDispatch} from "react-redux";
import {uiActions} from "../../store/uiSlice";
import classes from './Notification.module.css';

const Notification = (props) => {
  const dispatch = useDispatch();
  let specialClasses = '';

  if (props.status === 'error') {
    specialClasses = classes.error;
  }
  if (props.status === 'success') {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  const closeHandler = () => dispatch(uiActions.initialNotification());

  return (
      <section className={cssClasses}>
        <h2>{props.title}</h2>
        <p>{props.message}</p>
        <button onClick={closeHandler}>𝖷</button>
      </section>
  );
};

export default Notification;