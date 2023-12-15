import PropTypes from "prop-types";
import "./discovercontainer.css";

export default function DiscoverContainer({ item }) {
  return (
    <>
      <div className='dcard-details-container pb-5'>
        <div className='dcard-details'>
          <div className='dcard-image'>
            <img
              src={item.image}
              alt='Discover'
            />
          </div>
          <div className='dcard-details-title'>
            <h3>{item.name}</h3>
            <ul className='p-0'>
              <li>
                <div>
                  <p>Four Cheese Garlic Bread</p>
                  <h6>Toested french bread topped with romano</h6>
                </div>
                <span>$9.00</span>
              </li>
              <li>
                <div>
                  <p>Rastrami Roll</p>
                  <h6>Toested french bread topped with romano</h6>
                </div>
                <span>$9.00</span>
              </li>
              <li>
                <div>
                  <p>Rastrami Roll</p>
                  <h6>Toested french bread topped with romano</h6>
                </div>
                <span>$9.00</span>
              </li>
              <li>
                <div>
                  <p>Rastrami Roll</p>
                  <h6>Toested french bread topped with romano</h6>
                </div>
                <span>$9.00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

DiscoverContainer.propTypes = {
  item: PropTypes.object,
};
