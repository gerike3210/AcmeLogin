import classes from "./PasswordStrength.module.css";

const PasswordStrength = ({ missingParamteres, className }) => {
    const missingParams = [...missingParamteres];

    return (
        <div className={`${classes["dots"]} ${className}`}>
            <div className={classes["dots-transparent"]}>
                <div
                    className={classes["dot"]}
                    style={{
                        backgroundColor: missingParams[3]
                            ? "#2b8a3e"
                            : "#D4D4D4",
                    }}
                ></div>
                <div
                    className={classes["dot"]}
                    style={{
                        backgroundColor: missingParams[2]
                            ? "#a9e34b"
                            : "#D4D4D4",
                    }}
                ></div>
                <div
                    className={classes["dot"]}
                    style={{
                        backgroundColor: missingParams[1]
                            ? "#F9C466"
                            : "#D4D4D4",
                    }}
                ></div>
                <div
                    className={classes["dot"]}
                    style={{
                        backgroundColor: missingParams[0]
                            ? "#CD4146"
                            : "#D4D4D4",
                    }}
                ></div>
            </div>
        </div>
    );
};

export default PasswordStrength;
