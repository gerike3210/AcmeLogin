/*
! Password requirements:
    ~ min length: 5
    ~ lowercase letter
    ~ uppercase letter
    ~ number

* Accept:
    ~ min 2 condition
*/

import { useState } from "react";
import { useDispatch } from "react-redux";
import { AuthActions } from "../store/auth-slice";

const EMAIL_FORMAT =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const PASSWORD_FORMAT = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{4,}$/;

const MIN_LENGTH_FORMAT = /(?=.{4,}$)/;
const LOWERCASE_FORMAT = /(?=.*[a-z])/;
const UPPERCASE_FORMAT = /(?=.*[A-Z])/;
const NUMBER_FORMAT = /(?=.*[0-9])/;
const SPECIAL_FORMAT = /(?=.*\W)/;

const useValidation = () => {
    const dispatch = useDispatch();
    const [passwordShortages, setPasswordShortages] = useState([]);

    const addShortage = (errorMessage) => {
        setPasswordShortages((prevArray) => [...prevArray, errorMessage]);
    };

    const checkEmailValidity = (email) => {
        dispatch(AuthActions.setIsValidEmail(email.match(EMAIL_FORMAT)));
    };

    const checkPasswordValidity = (password) => {
        checkPasswordShortages(password);
        dispatch(
            AuthActions.setIsValidPassword(password.match(PASSWORD_FORMAT))
        );
    };

    const checkPasswordShortages = (password) => {
        //~ initialize state
        setPasswordShortages([]);

        //~ CHECK MIN LENGTH
        if (!password.match(MIN_LENGTH_FORMAT)) {
            return;
        }
        //~ CHECK LOWERCASE
        if (password.match(LOWERCASE_FORMAT)) {
            addShortage("lowercase");
        }
        //~ CHECK UPPERCASE
        if (password.match(UPPERCASE_FORMAT)) {
            addShortage("uppercase");
        }
        //~ CHECK NUMBER
        if (password.match(NUMBER_FORMAT)) {
            addShortage("number");
        }
        if (password.match(SPECIAL_FORMAT)) {
            addShortage("special");
        }
    };

    return {
        checkEmailValidity,
        checkPasswordValidity,
        passwordShortages,
    };
};

export default useValidation;
