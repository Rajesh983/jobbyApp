import './index.css'

import {AiFillHome} from 'react-icons/ai'

import {BsFillBriefcaseFill} from 'react-icons/bs'

import {FiLogOut} from 'react-icons/fi'

const Header = props => {
  const a = 'header'

  return (
    <nav className="navbar">
      <div className="nav-mobile-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="logo-in-header"
        />
        <ul className="mobile-icons-container">
          <li className="mobile-icon">
            <AiFillHome className="home-icon" />
          </li>
          <li className="mobile-icon">
            <BsFillBriefcaseFill className="home-icon" />
          </li>
          <li className="mobile-icon last-icon">
            <FiLogOut className="home-icon" />
          </li>
        </ul>
      </div>
      <div className="nav-desktop-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="logo-in-header-desktop"
        />
        <ul className="home-jobs-container-desktop">
          <li className="home-menu-item space-after-home">Home</li>
          <li className="home-menu-item">Jobs</li>
        </ul>
        <button type="button" className="logout-desktop-btn">
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Header
