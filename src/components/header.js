import PropTypes from 'prop-types'
import Button from './button'


const header = ({ title, onAdd }) => {
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onAdd} />
        </header>
    )
}

header.defaultProps = {
    title: 'Task Tracker',
}

header.propTypes = {
    title: PropTypes.string.isRequired,

}

export default header
