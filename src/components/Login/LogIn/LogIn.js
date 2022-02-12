import { useDispatch, useSelector } from "react-redux";
import { sendLoginData } from "../../../store/auth-actions";
import { AuthActions } from "../../../store/auth-slice";

import Button from "../../UI/Button/Button";

import classes from "./LogIn.module.css";

const LogIn = ({ className }) => {
    const dispatch = useDispatch();
    const enteredEmail = useSelector((state) => state.auth.email);
    const enteredPassword = useSelector((state) => state.auth.password);
    const isRemember = useSelector((state) => state.auth.isRemember);
    const rememberedEmail = localStorage.getItem("email");
    const rememberedPassword = localStorage.getItem("password");

    const loginHandler = () => {
        AuthActions.setType("login");
        dispatch(
            sendLoginData(
                rememberedEmail || enteredEmail,
                rememberedPassword || enteredPassword
            )
        );
        dispatch(AuthActions.setType("login"));

        if (isRemember) {
            localStorage.setItem("email", enteredEmail);
            localStorage.setItem("password", enteredPassword);
        } else {
            localStorage.clear();
        }
    };

    return (
        <>
            <div className={`${classes["container-login"]} ${className}`}>
                <div className={classes["container-content"]}>
                    <div className={classes["container-img"]} />
                    <h2>Do you already have an account?</h2>
                    <h4>
                        That's awesome! You can login by clicking on the button
                        below. To skip this next time, you can ask us to
                        remember your login credentials.
                    </h4>
                    <Button
                        type="submit"
                        className={classes["btn"]}
                        onClick={loginHandler}
                    >
                        Log in
                    </Button>
                </div>
            </div>
        </>
    );
};

export default LogIn;
