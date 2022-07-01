import './index.css'

import {AiFillStar} from 'react-icons/ai'

import {IoLocationSharp} from 'react-icons/io5'

import {BsBriefcaseFill} from 'react-icons/bs'

const SimilarJobCard = props => {
  const a = 'job card'

  return (
    <li className="job-card-item similar-card">
      <div className="company-details-container similar-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png"
          alt="company logo"
          className="company-img"
        />
        <div className="role-rating-container">
          <p className="role">Backend Engineer</p>
          <div className="rating-container">
            <AiFillStar className="star-img" />
            <p className="rating">4</p>
          </div>
        </div>
      </div>

      <p className="job-description-heading">Description</p>
      <p className="job-description">
        We’re in search of a Back-End Software Engineer that specializes in
        server-side components. In this role, you’ll primarily work in NodeJs,
        SQL Lite, Python, AWS and GO and will bring a depth of knowledge on
        basic algorithms and data structures. As a Back-End Engineer, you might
        be architecting new features for our customers.
      </p>
      <div className="location-type-salary-container">
        <div className="location-type-container">
          <div className="location-container">
            <IoLocationSharp className="location-icon" />
            <p className="location">Hyderabad</p>
          </div>
          <div className="job-type-container">
            <BsBriefcaseFill className="type-icon" />
            <p className="job-type">Full Time</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default SimilarJobCard
