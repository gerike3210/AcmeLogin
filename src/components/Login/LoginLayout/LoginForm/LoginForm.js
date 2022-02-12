import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../../../../store/auth-slice";
import useValidation from "../../../../hooks/use-validation";

import Button from "../../../UI/Button/Button";
import PasswordStrength from "./PasswordStrenght/PasswordStrength";
import FaEye from "./FaEye/FaEye";

import classes from "./LoginForm.module.css";

let isFormSubmit = false;

const LoginForm = () => {
    const dispatch = useDispatch();
    const isTypeSign = useSelector((state) => state.auth.type === "signup");
    const enteredEmail = useSelector((state) => state.auth.email);
    const enteredPassword = useSelector((state) => state.auth.password);
    const isValidEmail = useSelector((state) => state.auth.isValidEmail);
    const isValidPassword = useSelector((state) => state.auth.isValidPassword);
    const [isPasswordVisit, setIsPasswordVisit] = useState(false);
    const initialEmailValue = localStorage.getItem("email") || "";
    const initialPasswordValue = localStorage.getItem("password") || "";

    const { checkEmailValidity, checkPasswordValidity, passwordShortages } =
        useValidation();

    const togglePasswordVisitHandler = () => {
        setIsPasswordVisit(!isPasswordVisit);
    };

    const toggleRememberHandler = () => {
        dispatch(AuthActions.setIsRemember());
    };

    const changeEmailHandler = (event) => {
        dispatch(AuthActions.setEnteredEmail(event.target.value));
    };

    const changePasswordHandler = (event) => {
        dispatch(AuthActions.setEnteredPassword(event.target.value));
    };

    const submitForm = (event) => {
        event.preventDefault();

        dispatch(AuthActions.setType("signup"));

        isFormSubmit = true;
        checkEmailValidity(enteredEmail);
        checkPasswordValidity(enteredPassword);
    };

    const passwordType = isPasswordVisit ? "text" : "password";

    const invalidEmailClass =
        isFormSubmit && !isValidEmail && isTypeSign ? "invalid" : "";
    const invalidPasswordClass =
        isFormSubmit && !isValidPassword && isTypeSign ? "invalid" : "";

    return (
        <form onSubmit={submitForm}>
            <div className={classes["container-input"]}>
                <label className={classes[invalidEmailClass]} htmlFor="email">
                    Email
                    <input
                        id="email"
                        type="text"
                        onChange={changeEmailHandler}
                        defaultValue={initialEmailValue}
                    />
                </label>
            </div>
            <div className={classes["container-input"]}>
                <label
                    className={classes[invalidPasswordClass]}
                    htmlFor="password"
                >
                    Password
                    <input
                        id="text"
                        type={passwordType}
                        onChange={changePasswordHandler}
                        defaultValue={initialPasswordValue}
                    />
                </label>
                <div className={classes["password-features"]}>
                    <div className={classes["container-faeye"]}>
                        <FaEye
                            onClick={togglePasswordVisitHandler}
                            isVisit={isPasswordVisit}
                        />
                    </div>
                    <div>
                        {isTypeSign && (
                            <PasswordStrength
                                missingParamteres={passwordShortages}
                                className={
                                    isFormSubmit
                                        ? classes["active"]
                                        : classes["inactive"]
                                }
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className={classes["container-remember"]}>
                <label
                    onClick={toggleRememberHandler}
                    htmlFor="remember"
                    name="remember"
                >
                    Remember me.
                </label>
                <input id="remember" type="checkbox" />
                <div className={classes["checkbox"]} />
            </div>
            <div className={classes["container-btn"]}>
                <Button className={classes["btn"]} type="submit">
                    Sign up
                </Button>
            </div>
        </form>
    );
};

export default LoginForm;
