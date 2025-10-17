import Banner from "../components/Banner";
import Card from "../components/bodyCards";
import Footer from "../components/footer";
import NavBar from "../components/NavBar";
import BackLeft from '../assets/images/back button.png'
import BackRight from '../assets/images/back button (1).png'
import Dest1 from '../assets/images/Image Placeholder (2).svg'
import Dest2 from '../assets/images/Image Placeholder (2).png'
import Dest3 from '../assets/images/Image Placeholder (7).png'

function Home() {
  return (
    <>
      <Banner />
      <NavBar />

      <section className="fex">
      <div className="bfex" >
      <div className="ex">
        <h1>Experience the beauty of Rwanda with us </h1>
        <p>Discover the Land of a Thousand Hills</p>
      </div>

      <div className="back">
        <div><img src={BackLeft} alt="Previous" /></div>
        <div><img src={BackRight} alt="Next" /></div>
      </div>
      </div>
      
      </section>

      <section className="s1">
        <div id="input">
          <input id="amount-input" placeholder="Search activity or Destinations" />
        </div>
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
          <img src="" alt="" />

        </button>
      </section>

      <div className="exp">
        <h2>Choose your Package</h2>
        <h1>Select your Best Package for your Travel</h1>
      </div>
      <>
        <Card />
        <Card />
      </>

      <section>
        <div className="exp">
          <h2>Popular Destinations</h2>
          <h1>Select Our Best Popular Destinations</h1>
        </div>

        <div className="kik">
          <div className="ki">
            <img src={Dest1} alt="Kigali" />
            <h1>Kigali</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              elit sed pretium, egestas sed sit.
            </p>
          </div>

          <div className="ki">
            <img src={Dest2} alt="Huye" />
            <h1>Huye</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              elit sed pretium, egestas sed sit.
            </p>
          </div>

          <div className="ki">
            <img src={Dest2} alt="Rubavu" />
            <h1>Rubavu</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              elit sed pretium, egestas sed sit.
            </p>
          </div>

          <div className="ki">
            <img src={Dest3} alt="Musanze" />
            <h1>Musanze</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              elit sed pretium, egestas sed sit.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="exp">
          <h2>Why us?</h2>
          <h1>Why Travel with Africa wizzy Safari</h1>
        </div>

        <div className="bigar">
          <div className="ar">
            <img src="\src\assets\images\CarOutlined.png" alt="" />
            <h5>100+ tours around Rwanda</h5>
          </div>

          <div className="ar">
            <img src="\src\assets\images\CheckCircleOutlined.png" alt="" />
            <h5>100% Trusted travel agency</h5>
          </div>

          <div className="ar">
            <img src="\src\assets\images\Vector (2).png" alt="" />
            <h5>10 years of travel experience</h5>
          </div>

          <div className="ar">
            <img src="\src\assets\images\LikeOutlined.png" alt="" />
            <h5>90% of travelors are happy</h5>
          </div>
        </div>
      </section>

      <section>
        <div className="exp">
          <h2>Our Traveller Say</h2>
          <h1>What our clients say about us</h1>
        </div>

        <div className="was">
          <div className="em">
            <img src="src\assets\images\Ellipse 135.png" alt="" />
            <h1>Emma Waston</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              elit sed pretium, egestas sed sit.
            </p>
          </div>

          <div className="em">
            <img src="src\assets\images\Ellipse 135.png" alt="" />
            <h1>Emma Waston</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              elit sed pretium, egestas sed sit.
            </p>
          </div>

          <div className="em">
            <img src="src\assets\images\Ellipse 135.png" alt="" />
            <h1>Emma Waston</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              elit sed pretium, egestas sed sit.
            </p>
          </div>
        </div>
        <div className="bigc">
        <div className="cone"></div>
        <div className="ctwo"></div>
        <div className="cthree"></div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
