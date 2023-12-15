import "./aboutcard.css";

export default function AboutCard() {
  return (
    <div className='card-container'>
      <div className='about-card'>
        <div className='about-card-image'>
          <img
            src='https://murphystechnology.com/jhamghatkhajagharweb/assets/img/restaurant.jpg'
            alt='Restaurant'
          />
        </div>
        <div className='card-button-bottom'>
          <div>
            <button className='about-card-button'>Restaurants</button>
          </div>
        </div>
      </div>

      <div className='about-details-card'>
        <div className='card-title'>
          <h3>Restaurants</h3>
        </div>
        <div className='card-details'>
          <h5>
            Jhamghat Khaja Ghar was established in 2022. The number of caterers
            in Sydney has increased in tandem with the expanding Nepalese
            population.
          </h5>
        </div>
        <div className='card-button'>
          <button className='btn btn-primary'>Read More</button>
        </div>
      </div>
    </div>
  );
}
