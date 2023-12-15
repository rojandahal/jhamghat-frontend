import Button from "../Button/Button";
import PropTypes from "prop-types";

function CarouselCardMain({ classNameData }) {
  return (
    <div className={classNameData.name}>
      <div className='text-container mb-5'>
        <div className='col-6'>
          <h1>The perfect space to enjoy fantastic food</h1>
          <h5>
            Khaja is a word that resides in the mind of every hungry Nepalese.
          </h5>
        </div>
        <div className='col-4'></div>
        <div className='col-4'>
          <Button title={classNameData.buttonTitle}></Button>
        </div>
      </div>
    </div>
  );
}

CarouselCardMain.propTypes = {
  classNameData: PropTypes.object,
};

export default CarouselCardMain;
