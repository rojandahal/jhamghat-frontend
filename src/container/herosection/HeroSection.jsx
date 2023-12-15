import { Carousel } from "react-responsive-carousel";
import "./herosection.css";
import CarouselCardMain from "../../components/Carousel/CarouselCardMain";
import CarouselCardList from "../../components/Carousel/CarouselCardList";
import SpecialOffer from "../../components/SpecialOffer/SpecialOffer";

export default function HeroSection() {
  return (
    <>
      <div className='carousel-hero'>
        <Carousel showThumbs={false}>
          <CarouselCardMain
            classNameData={{ name: "first-item", buttonTitle: "See our menu" }}
          />
          <CarouselCardList
            classNameData={{
              name: "second-item",
              title: "Grilled Cheese",
              subtitle: "Burger",
              buttonTitle: "Get offer today",
            }}
          />
          {/* <div className='second-item'>
          <div className='container m-5'>
            <div className='col-5'>
              <h1>The perfect space to enjoy fantastic food</h1>
              <h5>
                Khaja is a word that resides in the mind of every hungry
                Nepalese.
              </h5>
            </div>
            <div className='col-4'></div>
            <div className='col-4'>
              <Button title={"Get offer today"}></Button>
            </div>
          </div>
        </div> */}
        </Carousel>
      </div>
      <div>
        <SpecialOffer></SpecialOffer>
      </div>
    </>
  );
}
