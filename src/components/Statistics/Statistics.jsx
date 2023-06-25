import css from './Statistics.module.css'
import PropTypes from 'prop-types'

export const Statistics = ({
    good, neutral, bad, total, percentage
}) => {
    return(
    <>
    <h2 className={css.heading}>Statistics</h2>
        <ul className={css.container}>
          <li className={css.item}>{`Good: ${good}`}</li>
          <li className={css.item}>{`Neutral: ${neutral}`}</li>
          <li className={css.item}>{`Bad: ${bad}`}</li>
          <li className={css.item}>{`Total: ${total}`}</li>
          <li className={css.item}>{`Positive feedback: ${percentage}%`}</li>
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

