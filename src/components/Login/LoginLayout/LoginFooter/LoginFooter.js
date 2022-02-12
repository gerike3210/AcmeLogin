import classes from "./LoginFooter.module.css";

const LoginFooter = () => {
    return (
        <div className={classes["container-footer"]}>
            <p className={classes["text-normal"]}>&copy; 2015 Acme, Inc.</p>
            <p className={classes["text-bold"]}>Terms</p>
            <p className={classes["text-bold"]}>Privacy</p>
            <div className={classes["dots"]}>
                <div className={classes["dot"]}></div>
                <div className={classes["dot"]}></div>
                <div className={classes["dot"]}></div>
            </div>
        </div>
    );
};

export default LoginFooter;
