import Banner from "../components/Banner";
import Footer from "../components/footer";
import NavBar from "../components/NavBar";
import HeroImg from '../assets/images/Image Placeholder (4).png'
import ImgA from '../assets/images/Image Placeholder (5).png'
import ImgB from '../assets/images/Image Placeholder (6).png'

function About() {
  return (
    <>
      <Banner />
      <NavBar />

      <div className="ded">
        <div className="de">
          <div className="di">
          <h1>We are dedicated to providing the best travel experience</h1>
          <p>Discover the land of Thousand Hills</p>
          </div>

          <section className="s1">
            <div className="p">
              <p>Guests</p>
              <h6>
                2 Adults <span>▽</span>
              </h6>
            </div>

            <div className="p">
              <p>Date</p>
              <h6>
                12 - 13 April 2021 <span>▽</span>
              </h6>
            </div>

            <div className="p">
              <p>Package</p>
              <h6>
                All <span>▽</span>
              </h6>
            </div>

            <button>
              Book Now
            </button>
          </section>
        </div>
        <img src={HeroImg} alt="About hero" />
      </div>

      <div className="z">
        <h1>Welcome to Africa Wizzy Safari</h1>
      </div>
      <section className="bwiz">
        <div className="wiz">
          <img src={ImgA} alt="About visual A" />
          <p>
            Welcome to Africa Wizzy Safari, a leading tourism company based in
            Rwanda. We have been in business for over 5 years and are committed
            to providing top-quality tours and services to our clients. Our
            mission is to showcase the beauty and culture of Rwanda to visitors
            from around the world, and to contribute to the sustainable
            development of the country through responsible tourism practices.
          </p>
        </div>

        <div className="wiz">
          <p>
            At Africa Wizzy safari, we offer a wide range of tours and
            activities, including cultural and historical tours, wildlife
            safaris, mountain gorilla trekking, and more. Our experienced and
            knowledgeable guides will ensure that you have a safe and enjoyable
            experience while exploring the stunning landscapes and rich culture
            of Rwanda.
          </p>
          <img src={ImgB} alt="About visual B" />
        </div>

        <div className="wiz">
          <img src={ImgA} alt="About visual A" />
          <div>
            <p>
              We are proud to have received numerous awards and accolades for
              our commitment to excellence, including the RDD award and the
              Excellence award.
            </p>

            <p>
              Thank you for choosing Africa Wizzy Safari for your travel needs
              in Rwanda. We look forward to welcoming you on one of our tours
              soon!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
