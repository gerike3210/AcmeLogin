import classes from "./LoginError.module.css";

const LoginError = ({ errorMessage }) => {
    return <h2 className={classes.title}>{errorMessage}</h2>;
};

export default LoginError;
