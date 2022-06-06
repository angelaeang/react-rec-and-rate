import PropTypes from 'prop-types'

const Button = ({ color, text, onClick}) => {
    return (
        <button onClick={onClick}
            style={{backgroundColor: color}}
            className='btn'
        >
            {text}
        </button>
    )
}

Button.defaultProps = {
    text: 'Task Tracker',
    color: 'blue'
}

Button.propTypes = {
    text: PropTypes.string, 
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
