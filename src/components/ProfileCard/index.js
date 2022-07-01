import './index.css'

import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class ProfileCard extends Component {
  state = {apiStatus: apiStatusConstants.success, profileObj: {}}

  componentDidMount() {
    this.getProfileDetails()
  }

  getProfileDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/profile'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedProfileData = {
        name: data.profile_details.name,
        profileImageUrl: data.profile_details.profile_image_url,
        shortBio: data.profile_details.short_bio,
      }

      this.setState({
        apiStatus: apiStatusConstants.success,
        profileObj: updatedProfileData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  retryApiCall = () => {
    this.getProfileDetails()
  }

  renderLoadingView = () => (
    <div className="profile-failure-container" testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderProfileFailureView = () => (
    <div className="profile-failure-container">
      <button
        type="button"
        className="profile-retry-btn"
        onClick={this.retryApiCall}
      >
        Retry
      </button>
    </div>
  )

  renderProfileSuccessView = () => {
    const {profileObj} = this.state
    return (
      <div className="profile-container">
        <img
          src={profileObj.profileImageUrl}
          alt="profile"
          className="profile-img"
        />
        <h1 className="profile-name">{profileObj.name}</h1>
        <p className="short-bio">{profileObj.shortBio}</p>
      </div>
    )
  }

  render() {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderProfileSuccessView()
      case apiStatusConstants.failure:
        return this.renderProfileFailureView()
      default:
        return null
    }
  }
}

export default ProfileCard
