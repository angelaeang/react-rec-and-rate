import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowsAngleExpand } from 'react-icons/bs' 

const Expand = ( {redirect} ) => {
  return (
    <div className='expand'>
        < Link to={redirect}>
            <BsArrowsAngleExpand color= "#DFF3E4" />
        </Link>
    </div>
  )
}

export default Expand