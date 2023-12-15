import AboutCard from "../../components/AboutCard/AboutCard";
import "./about.css";

export default function About() {
  return (
    <>
      <div className='container-about-section'>
        <div className='containe-fluid row p-5 ms-5 me-5 about-text'>
          <div className='col-5'>
            <h2>JAMGHAT KHAJA GHAR</h2>
            <h1>New Ground with Dishes to be Enjoyed</h1>
          </div>

          <div className='col-1'></div>

          <div className='col-5'>
            <p>
              Every hungry Nepalese person thinks of the word &quot;khaja&quot;
              In order to serve the Nepalese population in Sydney and meet the
              demands of the Nepali catering service in Australia, Jhamghat
              Khaja Ghar was established in 2022. The number of caterers in
              Sydney has increased in tandem with the expanding Nepalese
              population. We are a group of Nepalese caterers that provide
              services to Nepali families for birthday celebrations, marriage
              ceremonies, and baby showers.
            </p>
          </div>
        </div>
        <div className='about-container row'>
          <div className='col-xl-4 col-lg-6 '>
            <AboutCard />
          </div>
          <div className='col-xl-4 col-lg-6'>
            <AboutCard />
          </div>
          <div className='col-xl-4 col-lg-6 '>
            <AboutCard />
          </div>
        </div>
      </div>
    </>
  );
}
