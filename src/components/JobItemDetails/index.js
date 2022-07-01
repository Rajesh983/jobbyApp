import './index.css'

import {AiFillStar} from 'react-icons/ai'

import {IoLocationSharp} from 'react-icons/io5'

import {BsBriefcaseFill, BsBoxArrowUpRight} from 'react-icons/bs'

import Header from '../Header'

import SimilarJobCard from '../SimilarJobCard'

const JobItemDetails = props => {
  const a = 'job card'

  const renderSkillsView = () => (
    <div className="skills-bg-container">
      <h1 className="skills-heading">Skills</h1>
      <ul className="skills-list-container">
        <li className="skill-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png"
            alt="Docker"
            className="skill-img"
          />
          <p className="skill-name">Docker</p>
        </li>

        <li className="skill-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png"
            alt="Docker"
            className="skill-img"
          />
          <p className="skill-name">Docker</p>
        </li>

        <li className="skill-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png"
            alt="Docker"
            className="skill-img"
          />
          <p className="skill-name">Docker</p>
        </li>

        <li className="skill-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png"
            alt="Docker"
            className="skill-img"
          />
          <p className="skill-name">Docker</p>
        </li>

        <li className="skill-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png"
            alt="Docker"
            className="skill-img"
          />
          <p className="skill-name">Docker</p>
        </li>

        <li className="skill-item">
          <img
            src="https://assets.ccbp.in/frontend/react-js/jobby-app/docker-img.png"
            alt="Docker"
            className="skill-img"
          />
          <p className="skill-name">Docker</p>
        </li>
      </ul>
    </div>
  )

  const renderLifeAtCompany = () => (
    <div className="life-at-company-bg-container">
      <h1 className="skills-heading">Life at Company</h1>
      <div className="life-at-company-container">
        <p className="job-description top-padding">
          Our core philosophy is people over process. Our culture has been
          instrumental to our success. It has helped us attract and retain
          stunning colleagues, making work here more satisfying. Entertainment,
          like friendship, is a fundamental human need, and it changes how we
          feel and gives us common ground. We want to entertain the world.
        </p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/jobby-app/life-netflix-img.png"
          alt="life at company"
          className="life-at-company-img"
        />
      </div>
    </div>
  )

  const renderSimilarJobsView = () => (
    <div className="similar-jobs-container">
      <h1 className="skills-heading">Similar Jobs</h1>
      <ul className="similar-jobs-list-container">
        <SimilarJobCard />
      </ul>
    </div>
  )

  const renderJobDetailsFailure = () => (
    <div className="job-item-details-bg-container">
      <div className="no-jobs-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
          alt="failure view"
          className="no-jobs-img"
        />
        <h1 className="no-jobs-heading">Oops! Something Went Wrong</h1>
        <p className="no-jobs-description">
          We cannot seem to find the page you are looking for.
        </p>
        <button type="button" className="jobs-failure-retry-btn">
          Retry
        </button>
      </div>
    </div>
  )

  const renderJobDetailsSuccessView = () => (
    <>
      <div className="job-item-details-bg-container">
        <div className="job-card-item">
          <div className="company-details-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/jobby-app/facebook-img.png"
              alt="job details company logo"
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
            <p className="salary">10 LPA</p>
          </div>
          <hr className="horizontal-rule" />
          <div className="description-url-container">
            <p className="job-description-heading">Description</p>
            <a
              rel="noopener noreferrer"
              href="https://about.netflix.com/en"
              className="company-url"
              target="_blank"
            >
              Visit <BsBoxArrowUpRight className="url-arrow" />
            </a>
          </div>
          <p className="job-description">
            We’re in search of a Back-End Software Engineer that specializes in
            server-side components. In this role, you’ll primarily work in
            NodeJs, SQL Lite, Python, AWS and GO and will bring a depth of
            knowledge on basic algorithms and data structures. As a Back-End
            Engineer, you might be architecting new features for our customers.
          </p>
          {renderSkillsView()}
          {renderLifeAtCompany()}
        </div>
        {renderSimilarJobsView()}
      </div>
    </>
  )

  return (
    <>
      <Header />
      {renderJobDetailsFailure()}
    </>
  )
}

export default JobItemDetails
