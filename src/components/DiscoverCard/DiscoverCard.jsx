import "./discovercard.css";
import PropTypes from "prop-types";

export default function DiscoverCard({
  Logo,
  title,
  onClick,
  selectedItem,
  id,
}) {
  return (
    <>
      <div
        className={`dcard-container ${selectedItem === id ? "selected" : ""}`}
        onClick={onClick}
      >
        <div className='dcard-tab'>
          <div className='dcard-icon'>
            <img
              src={Logo}
              alt='logo'
              className='dcard-img'
            />
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

PropTypes.proptypes = {
  Logo: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  selectedItem: PropTypes.number,
  id: PropTypes.number,
};
