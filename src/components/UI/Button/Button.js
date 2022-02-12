import classes from "./Button.module.css";

const Button = ({ onClick, className, children, type }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${classes["btn"]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
