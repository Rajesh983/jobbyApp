import './index.css'

import {withRouter, Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import {AiFillHome} from 'react-icons/ai'

import {BsFillBriefcaseFill} from 'react-icons/bs'

import {FiLogOut} from 'react-icons/fi'

const Header = props => {
  const onLogoutUser = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="navbar">
      <div className="nav-mobile-container">
        <Link to="/">
          {' '}
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="logo-in-header"
          />
        </Link>
        <ul className="mobile-icons-container">
          <li className="mobile-icon">
            <Link to="/">
              <AiFillHome className="home-icon" />
            </Link>
          </li>
          <li className="mobile-icon">
            <Link to="/jobs">
              <BsFillBriefcaseFill className="home-icon" />
            </Link>
          </li>
          <li className="mobile-icon last-icon">
            <button
              type="button"
              className="mobile-logout-btn"
              onClick={onLogoutUser}
            >
              <FiLogOut className="home-icon" />
            </button>
          </li>
        </ul>
      </div>
      <div className="nav-desktop-container">
        <Link to="/">
          {' '}
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="logo-in-header-desktop"
          />
        </Link>
        <ul className="home-jobs-container-desktop">
          <li className="home-menu-item space-after-home">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="home-menu-item">
            <Link to="/jobs" className="nav-link">
              Jobs
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onLogoutUser}
        >
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
