import PropTypes from "prop-types";
import "./discovercontainer.css";

export default function DiscoverContainer({ title }) {
  return (
    <>
      <div className='dcard-details-container'>
        <div className='dcard-details'>
          <div className='dcard-details-title'>
            <h3>{title}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

DiscoverContainer.propTypes = {
  text: PropTypes.string,
};
