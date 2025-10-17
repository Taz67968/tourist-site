import LogoImg from '../assets/images/Rectangle 645.png'
import Social1 from '../assets/images/Social button (1).png'
import Social2 from '../assets/images/Social button.png'
import Social3 from '../assets/images/Social button (2).png'
import Social4 from '../assets/images/Social button (3).png'
import SendIcon from '../assets/images/Group 18.png'

function Footer() {
  return (
    <>
      <footer>
        <div className="f">
          <h1>If you have any question, Let us help you!</h1>
          <img src={LogoImg} alt="Africa Wizzy Safari" />
          <div className="e">
            <a href="#" aria-label="Facebook">
              <img src={Social1} alt="Facebook" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src={Social2} alt="Twitter" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src={Social3} alt="Instagram" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src={Social4} alt="LinkedIn" />
            </a>
          </div>
        </div>

        <div className="c">
          <div className="a">
            <p>
              If you have any questions or would like to book a tour with us,
              please dont hesitate to contact us.
            </p>
            <p>Phone: +250 788 123 456</p>

            <p>Email: info@rwandatourism.com</p>
            <p>Address: Kigali, Rwanda</p>
          </div>
          <div className="b">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              inventor
            </p>
          </div>
        </div>

        <div className="down">
          <div className="d">
            <p>Home</p>
            <p>Testimonies</p>
            <p>Destinations</p>
            <p>Sign in</p>
          </div>
          <div className="d">
            <p>About us</p>
            <p>Packages</p>
            <p>Events</p>
            <p>Gallery</p>
          </div>

          <div className="d">
            <p>Our Team</p>
            <p>Blog</p>
            <p>Contact us</p>
          </div>
        </div>

        <h5>Subscribe to our newsletter</h5>

        <div id="input">
          <input id="amount-input" placeholder="Input your email here" />
          <button aria-label="Subscribe">
            <img src={SendIcon} alt="Send" />
          </button>
        </div>
      </footer>
    </>
  )
}

export default Footer
