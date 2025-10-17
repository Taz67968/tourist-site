import Banner from "../components/Banner";
import Footer from "../components/footer";
import NavBar from "../components/NavBar";
import Social7 from '../assets/images/Social button (7).png'
import Social6 from '../assets/images/Social button (6).png'
import Social5 from '../assets/images/Social button (5).png'
import Social4 from '../assets/images/Social button (4).png'
import PhoneIcon from '../assets/images/Vector (4).png'
import EmailIcon from '../assets/images/Vector (3).png'

export default function ContactUs() {
  return (
    <>
      <Banner />
      <NavBar />

      <section className="pex">
      <div className="bex">
        <h1>Contact Us</h1>
        <div className="ot">
          <a href="" className="o">
            Home
          </a>
          <a href="" className="t">
            <span> ▶</span> Contact us
          </a>
        </div>
      </div>
      </section>

      <section className="get">
        <h1> Get in Touch</h1>
        <p>
          We would love to hear from you! If you have any comments or
          suggestions about our website or our tours, please dont hesitate to
          get in touch. We are always looking for ways to improve and make your
          travel experience even better.
        </p>
      </section>

      <section className="s6">
        <h2>Contact us</h2>

        <div className="n">
          <div id="input">
            <h4>First name</h4>
            <input id="amount-input" placeholder="Input your First name here" />
          </div>
          <div id="input">
            <h4>Last name</h4>
            <input id="amount-input" placeholder="Input your Last name here" />
          </div>
        </div>
        <div id="input">
          <h4>Email address</h4>
          <input
            id="amount-input"
            placeholder="Input your Email address here"
          />
        </div>
        <div >
        <h4>
            Phone number <br></br>
          </h4>
          <div className="lab">
         
          <select id="select current role" name="select current role">
            <option value="student">+237</option>
          </select>
          <div id="input">
            <input
              id="amount-input"
              placeholder="Input your Phone number here"
            />
          </div>
          </div>
         
        </div>
        <h4>Message</h4>
        <div className="comment">
          
          <textarea id="message" name="message">
            Enter a message here
          </textarea>
        </div>
        <button>Submit</button>
      </section>

      <section className="by">
        <div className="y">
            <h1>Social media</h1>
            <div className="x">
            <a href=""><img src={Social7} alt="" /></a>
            <a href=""><img src={Social6} alt="" /></a>
            <a href=""><img src={Social5} alt="" /></a>
            <a href=""><img src={Social4} alt="" /></a>
            </div>
        </div>

        <div className="y">
            <h1>Email & phone</h1>
        <div className="bigv">
            <div className="v">
                <img className="m" src={PhoneIcon} alt="" />
                <p>+250784688641</p>
            </div>
            <div className="v">
                <img src={EmailIcon} alt="" />
                <p>bbonteemma@gmail.com</p>
            </div>
        </div>
        </div>
        <div className="y">
            <h1>Address</h1>
            <div>
                <p>kk 600 st <br />Kigali, Rwanda</p>
            </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
