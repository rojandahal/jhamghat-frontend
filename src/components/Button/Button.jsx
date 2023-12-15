import "./button.css";
import PropTypes from "prop-types";

function Button({ title }) {
  return (
    <>
      <a className='custom-button'>{title}</a>
    </>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
