import Button from "../Button/Button";
import PropTypes from "prop-types";
import "./cardcarousellist.css";

function CarouselCardList({ classNameData }) {
  return (
    <div className={classNameData.name}>
      <div className='text-container mb-5'>
        <div className='col-6'>
          <h2>{classNameData.title}</h2>
          <h1>{classNameData.subtitle}</h1>
        </div>
        <div className='col-4 mb-4'>
					<h3>Limited Time Offer</h3>
				</div>
        <div className='col-4'>
          <Button title={classNameData.buttonTitle}></Button>
        </div>
      </div>
    </div>
  );
}

CarouselCardList.propTypes = {
  classNameData: PropTypes.object,
};

export default CarouselCardList;
