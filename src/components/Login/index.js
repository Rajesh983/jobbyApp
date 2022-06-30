import './index.css'

import {Component} from 'react'

class Login extends Component {
  renderPassword = () => {
    const a = 'sample'

    return (
      <>
        <label htmlFor="password" className="label">
          PASSWORD
        </label>
        <input
          type="password"
          id="username"
          placeholder="Password"
          className="login-input-box"
        />
      </>
    )
  }

  renderUsername = () => {
    const a = 'sample'

    return (
      <>
        <label htmlFor="username" className="label">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          className="login-input-box"
        />
      </>
    )
  }

  render() {
    return (
      <div className="login-bg-container">
        <form className="login-form">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="logo-img-in-login"
          />
          <div className="username-container">{this.renderUsername()}</div>
          <div className="username-container">{this.renderPassword()}</div>
          <button type="submit" className="login-btn">
            Login
          </button>
          <p className="error-msg">*Username and Password didn't match</p>
        </form>
      </div>
    )
  }
}

export default Login
