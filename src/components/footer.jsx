function Footer() {
  return (
    <>
      <footer>
        <div className="f">
          <h1>If you have any question, Let us help you!</h1>
          <img src="\src\assets\images\Rectangle 645.png" alt="" />
          <div className="e">
          <a href=""><img src="\src\assets\images\Social button (1).png" alt="" /></a>
            <a href=""><img src="\src\assets\images\Social button.png" alt="" /></a>
            <a href=""><img src="\src\assets\images\Social button (2).png" alt="" /></a>
            <a href=""><img src="\src\assets\images\Social button (3).png" alt="" /></a>
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
            <p>signinn</p>
          </div>
          <div className="d">
            <p>About us</p>
            <p>Packages</p>
            <p>Events</p>
            <p>Galery</p>
          </div>

          <div className="d">
            <p>Our Team</p>
            <p>Blog</p>
            <p>Contact us</p>
          </div>
        </div>

        <h5>Subscribe to our newspaper</h5>

        <div id="input">
          <input id="amount-input" placeholder="Input your email here" />
          <button>
            <img src="\src\assets\images\Group 18.png" alt="" />
          </button>
        </div>
      </footer>
    </>
  )
}

export default Footer
