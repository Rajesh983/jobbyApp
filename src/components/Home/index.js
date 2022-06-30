import './index.css'

import Header from '../Header'

const Home = () => (
  <div className="home-bg-container">
    <Header />
    <div className="home-container">
      <h1 className="home-heading">Find The Job That Fits Your Life</h1>
      <p className="home-description">
        Millions of people are searching for jobs, salary information, company
        reviews. Find the job that fits your abilities and potential.
      </p>
      <button type="button" className="find-jobs-btn">
        Find Jobs
      </button>
    </div>
  </div>
)

export default Home
