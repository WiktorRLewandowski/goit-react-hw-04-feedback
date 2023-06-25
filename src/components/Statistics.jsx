import PropTypes from 'prop-types'

export const Statistics = ({
    good, neutral, bad, total, percentage
}) => {
    return(
    <>
    <h2 className="statistics-heading">Statistics</h2>
        <ul className="statistics-container">
          <li className="statistics-item">{`Good: ${good}`}</li>
          <li className="statistics-item">{`Neutral: ${neutral}`}</li>
          <li className="statistics-item">{`Bad: ${bad}`}</li>
          <li className="statistics-item">{`Total: ${total}`}</li>
          <li className="statistics-item">{`Positive feedback: ${percentage}%`}</li>
        </ul>
    </>
    )
} 

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
}

