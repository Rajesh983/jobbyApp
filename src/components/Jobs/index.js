import './index.css'

import {Component} from 'react'

import {BsSearch} from 'react-icons/bs'

import Header from '../Header'

import ProfileCard from '../ProfileCard'

import FilterCard from '../FilterCard'

import JobCard from '../JobCard'

class Jobs extends Component {
  renderNoJobsView = () => (
    <div className="no-jobs-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
        alt="no jobs"
        className="no-jobs-img"
      />
      <h1 className="no-jobs-heading">No Jobs Found</h1>
      <p className="no-jobs-description">
        We could not find any jobs. Try other filters.
      </p>
    </div>
  )

  renderJobsFailureView = () => (
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
  )

  renderJobsSuccessView = () => (
    <div className="job-items-bg-container">
      <div className="search-container-desktop">
        <input type="search" placeholder="Search" className="search-box" />
        <button type="button" testid="searchButton" className="search-btn">
          <BsSearch className="search-icon" />
        </button>
      </div>

      <ul className="job-items-list-container">
        <JobCard />
      </ul>
    </div>
  )

  render() {
    const {employmentTypesList, salaryRangesList} = this.props
    return (
      <>
        <Header />
        <div className="jobs-bg-container">
          <div className="jobs-outer-container">
            <div className="profile-filters-container">
              <div className="search-container">
                <input
                  type="search"
                  placeholder="Search"
                  className="search-box"
                />
                <button
                  type="button"
                  testid="searchButton"
                  className="search-btn"
                >
                  <BsSearch className="search-icon" />
                </button>
              </div>
              <ProfileCard />
              <FilterCard
                employmentTypesList={employmentTypesList}
                salaryRangesList={salaryRangesList}
              />
            </div>
            {this.renderJobsSuccessView()}
          </div>
        </div>
      </>
    )
  }
}

export default Jobs
