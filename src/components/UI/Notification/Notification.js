import classes from "./Notification.module.css";

const Notification = ({ type, message }) => {
    return (
        <div className={`${classes["container"]} ${classes[type]}`}>
            {message}
        </div>
    );
};

export default Notification;
