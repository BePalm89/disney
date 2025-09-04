import './Title.css';
import PropTypes from "prop-types";


const Title = (
    {
        text,
        level,
    }
) => {
    const HeadingTag = level !== 7 ? `h${level}` : 'p';
    return (<HeadingTag >
        {text}
    </HeadingTag>)

}

Title.propTypes = {
    text: PropTypes.string.isRequired,
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7]),
}

export default Title;
