import './index.css'

import {Component} from 'react'

class ProfileCard extends Component {
  renderProfileFailureView = () => (
    <div className="profile-failure-container">
      <button type="button" className="profile-retry-btn">
        Retry
      </button>
    </div>
  )

  renderProfileSuccessView = () => (
    <div className="profile-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/male-avatar-img.png"
        alt="profile"
        className="profile-img"
      />
      <h1 className="profile-name">Rahul Attuluri</h1>
      <p className="short-bio">Lead Software Developer and AI-ML expert</p>
    </div>
  )

  render() {
    return this.renderProfileSuccessView()
  }
}

export default ProfileCard
