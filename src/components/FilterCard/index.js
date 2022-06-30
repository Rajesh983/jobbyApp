import './index.css'

const FilterCard = props => {
  const {employmentTypesList, salaryRangesList} = props

  return (
    <>
      <div className="employment-type-container">
        <hr className="horizontal-rule hr-height" />
        <h1 className="employment-heading">Type of Employment</h1>
        <ul className="employment-list-container">
          {employmentTypesList.map(eachItem => (
            <li
              className="employment-list-item"
              key={eachItem.employmentTypeId}
            >
              <input
                type="checkbox"
                className="checkbox"
                id={eachItem.employmentTypeId}
              />
              <label
                htmlFor={eachItem.employmentTypeId}
                className="checkbox-label"
              >
                {eachItem.label}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="employment-type-container">
        <hr className="horizontal-rule" />
        <h1 className="employment-heading">Salary range</h1>
        <ul className="employment-list-container">
          {salaryRangesList.map(eachItem => (
            <li className="employment-list-item" key={eachItem.salaryRangeId}>
              <input
                type="radio"
                className="checkbox radio-item"
                id={eachItem.salaryRangeId}
                value={eachItem.salaryRangeId}
                name="salary"
              />
              <label
                htmlFor={eachItem.salaryRangeId}
                className="checkbox-label"
              >
                {eachItem.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default FilterCard
