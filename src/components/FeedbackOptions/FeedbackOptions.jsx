import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
    <ul className={css.container}>
        {options.map((item)=> {
            return (
                <li className={css.item} key={crypto.randomUUID()} >
                  <button className={css.btn}
                    onClick={()=>onLeaveFeedback(item)}>
                    {item}
                    </button>
                </li>
            )
        })}        
    </ul>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired
}