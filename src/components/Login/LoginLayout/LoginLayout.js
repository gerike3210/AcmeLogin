import { useSelector } from "react-redux";

import LoginHeader from "./LoginHeader/LoginHeader";
import LoginForm from "./LoginForm/LoginForm";
import LoginFooter from "./LoginFooter/LoginFooter";
import Card from "../../UI/Card/Card";
import Notification from "../../UI/Notification/Notification";

import classes from "./LoginLayout.module.css";

const LoginLayout = () => {
    const isTypeLogin = useSelector((state) => state.auth.type === "login");
    const { type, message } = useSelector(
        (state) => state.auth.responseMessage
    );
    return (
        <div className={classes["container-layout"]}>
            {isTypeLogin && <Notification type={type} message={message} />}
            <Card className={classes["card"]}>
                <LoginHeader />
                <LoginForm />
            </Card>
            <LoginFooter />
        </div>
    );
};

export default LoginLayout;
