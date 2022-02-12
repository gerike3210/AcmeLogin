import { useDispatch, useSelector } from "react-redux";
import { sendLoginData } from "../../../store/auth-actions";
import { AuthActions } from "../../../store/auth-slice";

import Button from "../../UI/Button/Button";
import acme from "../../../assets/acme.png";

import classes from "./LogIn.module.css";

const LogIn = ({ className }) => {
    const dispatch = useDispatch();
    const enteredEmail = useSelector((state) => state.auth.email);
    const enteredPassword = useSelector((state) => state.auth.password);
    const isRemember = useSelector((state) => state.auth.isRemember);

    const loginHandler = () => {
        AuthActions.setType("login");
        dispatch(sendLoginData(enteredEmail, enteredPassword));
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
            <div className={`${classes["container-switch"]} ${className}`}>
                <div className={classes["container-content"]}>
                    {/* <img src={acme} /> */}
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
