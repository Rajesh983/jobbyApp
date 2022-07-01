import './index.css'

import Header from '../Header'

const NotFound = () => (
  <>
    <Header />
    <div className="job-item-details-bg-container">
      <div className="no-jobs-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
          alt="not found"
          className="no-jobs-img"
        />
        <h1 className="no-jobs-heading">Page Not Found</h1>
        <p className="no-jobs-description">
          we're sorry, the page you requested could not be found.
        </p>
        <button type="button" className="jobs-failure-retry-btn">
          Retry
        </button>
      </div>
    </div>
  </>
)

export default NotFound
