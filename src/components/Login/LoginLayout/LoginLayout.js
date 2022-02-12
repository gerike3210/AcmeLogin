import LoginForm from "./LoginForm/LoginForm";
import Card from "../../UI/Card/Card";

import classes from "./LoginLayout.module.css";
import LoginHeader from "./LoginHeader/LoginHeader";
import LoginFooter from "./LoginFooter/LoginFooter";
import { useSelector } from "react-redux";
import LoginError from "./LoginError/LoginError";

const LoginLayout = () => {
    const isTypeLogin = useSelector((state) => state.auth.type === "login");
    const loginErrorMessage = useSelector((state) => state.auth.loginError);
    return (
        <div className={classes["container-layout"]}>
            {isTypeLogin && <LoginError errorMessage={loginErrorMessage} />}
            <Card className={classes["card"]}>
                <LoginHeader />
                <LoginForm />
            </Card>
            <LoginFooter />
        </div>
    );
};

export default LoginLayout;
