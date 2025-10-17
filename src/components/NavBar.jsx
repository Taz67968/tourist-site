import { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoImg from '../assets/images/Rectangle 645.png'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="navbar">
        <div className="navbar-inner">
          <Link to="/" className="navbar-brand" aria-label="Home">
            <img src={LogoImg} alt="Africa Wizzy Safari" />
          </Link>

          <button
            className="navbar-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsOpen((v) => !v)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>

          <nav id="primary-navigation" className={`navbar-links ${isOpen ? 'open' : ''}`}>
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/About/" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/TourPackage/" onClick={() => setIsOpen(false)}>Tour package</Link>
            <Link to="/Gallery/" onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link to="/ContactUS/" onClick={() => setIsOpen(false)}>Contact Us</Link>
            <button className="navbar-cta">Sign In</button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default NavBar