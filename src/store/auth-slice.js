import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: "auth",
    initialState: {
        type: "",
        email: "",
        password: "",
        isValidEmail: null,
        isValidPassword: null,
        responseMessage: {},
        isRemember: false,
    },
    reducers: {
        setType(state, action) {
            state.type = action.payload;
        },
        setEnteredEmail(state, action) {
            state.email = action.payload;
        },
        setEnteredPassword(state, action) {
            state.password = action.payload;
        },
        setIsValidEmail(state, action) {
            state.isValidEmail = action.payload;
        },
        setIsValidPassword(state, action) {
            state.isValidPassword = action.payload;
        },
        setResponseMessage(state, action) {
            state.responseMessage = {
                type: action.payload.type,
                message: action.payload.message,
            };
        },
        setIsRemember(state) {
            state.isRemember = !state.isRemember;
        },
    },
});

export const AuthActions = AuthSlice.actions;

export default AuthSlice;
