import classes from "./LoginHeader.module.css";

const LoginHeader = () => {
    return (
        <>
            <h1 className={classes["title-welcome"]}>Welcome to Acme</h1>
            <h6 className={classes["title-under"]}>
                Create your account by filling the form below.
            </h6>
        </>
    );
};

export default LoginHeader;
