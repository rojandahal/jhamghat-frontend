import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./specialoffer.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export default function SpecialOffer() {
  return (
    <>
      <div className='d-flex flex-row offer-container'>
        <div className='offer-text mt-4 ms-3'>
					<span>Weekly Special</span>
          <div className='price'>$90.85</div>
          <div className='description'>Sicilian Pizza</div>
          <div className='rating'>
            <FontAwesomeIcon
              icon={faStar}
              color='#FFD40D'
              fontSize={"12px"}
            />
            <FontAwesomeIcon
              icon={faStar}
              color='#FFD40D'
              fontSize={"12px"}
              className='ms-1'
            />
            <FontAwesomeIcon
              icon={faStar}
              color='#FFD40D'
              fontSize={"12px"}
              className='ms-1'
            />
            <FontAwesomeIcon
              icon={faStar}
              color='#FFD40D'
              fontSize={"12px"}
              className='ms-1'
            />
            <FontAwesomeIcon
              icon={faStar}
              color='#FFD40D'
              fontSize={"12px"}
              className='ms-1'
            />
          </div>
        </div>
        <div className='offer-image'>
          <img
            src='https://murphystechnology.com/jhamghatkhajagharweb/assets/img/pizze-img.png'
            alt='Pizza'
          />
        </div>
      </div>
    </>
  );
}
