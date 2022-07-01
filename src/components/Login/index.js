import './index.css'

import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

class Login extends Component {
  state = {username: '', password: '', showSubmitError: false, errorMsg: ''}

  gettingPasswordInput = event => {
    this.setState({password: event.target.value})
  }

  gettingUsernameInput = event => {
    this.setState({username: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  onSubmitError = error => {
    this.setState({showSubmitError: true, errorMsg: error})
  }

  onSubmittingForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitError(data.error_msg)
    }
  }

  renderPassword = () => {
    const {password} = this.state

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
          value={password}
          onChange={this.gettingPasswordInput}
        />
      </>
    )
  }

  renderUsername = () => {
    const {username} = this.state

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
          value={username}
          onChange={this.gettingUsernameInput}
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-bg-container">
        <form className="login-form" onSubmit={this.onSubmittingForm}>
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
          {showSubmitError && <p className="error-msg">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default Login
