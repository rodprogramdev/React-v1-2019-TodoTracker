
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd  }) => {

    // const onClick = () =>{
    //     console.log('Click')
    // }
    
    return (
        <header className='header'>
            <h1> { title }</h1>
            <Button color={showAdd ? 'red' : 'green' } text={showAdd ? 'CLOSE' : 'ADD TASK'} onClick={onAdd}/>


         
        </header>
    )
}

Header.defaultProps = {
    title: 'To Do Tracker',
}

Header.propTypes  = {
    title: PropTypes.string.isRequired,
}

// //CSS in JS
// const headingStyle ={
//     color: 'red', 
//     backgroundColor: 'Black',
    
// }

export default Header
