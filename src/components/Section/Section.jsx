import css from './Section.module.css';
import PropTypes from 'prop-types'

export const Section = ({children, title}) => {
    return (
        <>
        <h2 className={css.heading}>{title}</h2>
        {children}
        </>
    )
}

export const Notification = ({message}) => {
    return (
    <p className={css.notification}>{message}</p>
    )
}

Section.propType = {
    children: PropTypes.element
}

Notification.propType = {
    message: PropTypes.string
}