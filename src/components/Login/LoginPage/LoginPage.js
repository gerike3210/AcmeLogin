import LoginLayout from "../LoginLayout/LoginLayout";
import LogIn from "../LogIn/LogIn";

import classes from "./LoginPage.module.css";

const LoginPage = () => {
    return (
        <div className={classes["container-page"]}>
            <LoginLayout />
            <LogIn className={classes["login"]} />
        </div>
    );
};

export default LoginPage;
