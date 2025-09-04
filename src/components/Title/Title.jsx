import './Title.css';
import PropTypes from "prop-types";


const Title = (
    {
        text,
        level,
        style = { color: "var(--color-black)", textTransform: "none" }

    }
) => {
    const HeadingTag = level !== 7 ? `h${level}` : 'p';
    return (
        <HeadingTag
            style={{
                color: style.color,
                fontSize: style.fontSize,
                textTransform: style.textTransform,
            }} >
            {text}
        </HeadingTag>)

}

Title.propTypes = {
    text: PropTypes.string.isRequired,
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
    style: PropTypes.shape({
        color: PropTypes.string,
        fontSize: PropTypes.string,
        textTransform: PropTypes.oneOf([
            "none",
            "capitalize",
            "uppercase",
            "lowercase",
            "initial",
            "inherit",
        ]),
    }),
}

export default Title;
