import { AuthActions } from "./auth-slice";

export const sendLoginData = (email, password) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const response = await fetch(
                "https://us-central1-ria-server-b1103.cloudfunctions.net/authenticate",
                {
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
                }
            );

            if (!response.ok) {
                throw new Error("Error while fetching data");
            }

            const responseData = await response.json();
            if (responseData.result.error) {
                throw new Error(responseData.result.error);
            }
        };
        try {
            const data = await sendRequest();
        } catch (error) {
            dispatch(AuthActions.setLoginError(error.message));
        }
    };
};
