import PropTypes from 'prop-types'
import Button from './button'


const header = ({ title}) => {
    const onClick = () => {
        console.log('click')
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick} />
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
