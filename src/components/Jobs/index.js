import './index.css'

import {Component} from 'react'

import {BsSearch} from 'react-icons/bs'

import Header from '../Header'

import ProfileCard from '../ProfileCard'

import FilterCard from '../FilterCard'

import JobCard from '../JobCard'

class Jobs extends Component {
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

            <div className="job-items-bg-container">
              <div className="search-container-desktop">
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

              <ul className="job-items-list-container">
                <JobCard />
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Jobs
