import Banner from "../components/Banner";
import Card from "../components/bodyCards";
import Footer from "../components/footer";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <Banner />
      <NavBar />

      <section className="fex">
      <div className="ex">
        <h1>Experience the beauty of Rwanda with us </h1>
        <p>Discover the Land of a Thousand Hills</p>
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
            <img src="\src\assets\images\Image Placeholder (2).svg" alt="" />
            <h1>Kigali</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              elit sed pretium, egestas sed sit.
            </p>
          </div>

          <div className="ki">
            <img src="\src\assets\images\Image Placeholder (2).png" alt="" />
            <h1>Huye</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              elit sed pretium, egestas sed sit.
            </p>
          </div>

          <div className="ki">
            <img src="\src\assets\images\Image Placeholder (2).png" alt="" />
            <h1>Rubavu</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              elit sed pretium, egestas sed sit.
            </p>
          </div>

          <div className="ki">
            <img src="\src\assets\images\Image Placeholder (7).png" alt="" />
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
      </section>

      <Footer />
    </>
  );
}

export default Home;
