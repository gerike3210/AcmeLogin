import { AuthActions } from "./auth-slice";

export const sendLoginData = (email, password) => {
    return async (dispatch) => {
        const sendRequest = async (url) => {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Accept-Encoding": "application/json",
                    "Content-Type": "application/json; charset=utf-8",
                },

                body: JSON.stringify({
                    data: {
                        email: email,
                        password: password,
                    },
                }),
            });

            if (!response.ok) {
                throw new Error("Error while fetching data");
            }

            const responseData = await response.json();
            if (responseData.result.error) {
                throw new Error(responseData.result.error);
            }
            dispatch(
                AuthActions.setResponseMessage({
                    type: "success",
                    message: "Successful login",
                })
            );
        };
        try {
            await sendRequest(
                "https://us-central1-ria-server-b1103.cloudfunctions.net/authenticate"
            );
        } catch (error) {
            dispatch(
                AuthActions.setResponseMessage({
                    type: "error",
                    message: error.message,
                })
            );
        }
    };
};
