import visitEye1x from "../../../../../assets/fa-eye.png";
import hideEye1x from "../../../../../assets/fa-eye-slash.png";

import classes from "./FaEye.module.css";

const FaEye = ({ isVisit, onClick }) => {
    const imageSource = isVisit ? hideEye1x : visitEye1x;

    return (
        <img
            onClick={onClick}
            className={classes["fa-eye"]}
            src={imageSource}
        />
    );
};

export default FaEye;
