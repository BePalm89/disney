import './Button.css';
import PropTypes from "prop-types";

const Button = ({ label, icon, variant, onClick}) => {
    return (
        <button
            onClick={onClick}
            className={`btn ${variant}`}
        > {label}</button>
    )
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string,
    }),
    variant: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;
