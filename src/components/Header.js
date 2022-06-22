import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
//import { useLocation } from 'react-router-dom'

const Header = ( { title, toggleAdd, showAdd }) => {
    // const onClick = (e) => {
    //     {toggleShowAddTask}
    // }
    //const location = useLocation()

    return (
        <header className='header'>
            <h1> {title}</h1>
            <Button color={showAdd ?'#F02D3A':'#E7B2D7'} text={showAdd ?'close':'add'} onClick={toggleAdd}/>
            
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Header

//NOTES
/*
You can import prop types!

{location.pathname === '/' && (
                <Button color={showAdd ?'red':'green'} text={showAdd ?'close':'add'} onClick={toggleAdd}/>
            )}

for styling you can use: index.css, styling components, direct css in js, etc.
    - direct in-line css needs double curly braces. 
        - <h1 style={{color: 'red', backgroundColor: "black"}>
    - diff way of css in js:
        - <h1 style={headingStyle}>
        - const headingStyle = {
            color: 'red'
          }

*/
