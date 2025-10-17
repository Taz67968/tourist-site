import EmailIcon from '../assets/images/pi.png'
import PhoneIcon from '../assets/images/Vector (1).png'
import Social1 from '../assets/images/Social button (1).png'
import Social2 from '../assets/images/Social button.png'
import Social3 from '../assets/images/Social button (2).png'
import Social4 from '../assets/images/Social button (3).png'

function Banner() {
  return (
    <>
      <div className="container topbar">
        <div className="bigv">
          <div className="v">
            <img src={EmailIcon} alt="Email" />
            <p>bbonteemma@gmail.com</p>
          </div>
          <div className="v">
            <img src={PhoneIcon} alt="Phone" />
            <p>+250784688641</p>
          </div>
        </div>

        <nav className="socials">
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
        </nav>
      </div>
    </>
  )
}

export default Banner