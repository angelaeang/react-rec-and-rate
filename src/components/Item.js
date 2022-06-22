//import { FaTimes } from 'react-icons/fa' 
import { useLocation } from 'react-router-dom'
import { BsFillHandThumbsDownFill, BsFillHandThumbsUpFill } from 'react-icons/bs'

//TODO: put on sort

const Item = ( { item, index, anon, onUp, onDown}) => {
    const location = useLocation()
    const name = item.name
    let review = item.review

    if (location.pathname === '/') {
        if ((review.length) > 45) {
            review = review.slice(0,45)
        }
        review = review + "..."
    } 

    return (
        <div className={`item ${item.reminder ? 'reminder': ''}
            `} 
        >
            <div>
                <h2 className='rank'>{index}</h2>
            </div>
            <div className='rating-text'>
                <h3>
                    {item.rec} 
                </h3>
                <p className='review'> <span id='author'>{anon ? ("anonymous"):(name)}: </span>{review}</p>
            </div>
            <div className='ratings'>
                <div className='up'>
                    <BsFillHandThumbsUpFill style={{color: '#E7B2D7', cursor: 'pointer', alignSelf: "center"}}
                                        onClick = {onUp}/>
                    <p>{item.up}</p>
                </div>
                <div className='down'>
                    <BsFillHandThumbsDownFill style={{color: '#F02D3A', cursor: 'pointer', alignSelf: "center"}}
                                        onClick = {onDown} />
                    <p>{item.down}</p>
                </div>
            </div>
        </div>
    )
}

export default Item

//use to have delete button:
/*
onDoubleClick={onToggle}

onDelete

<FaTimes 
    style={{color: 'red', cursor: 'pointer'}}
    onClick = {onDelete}
/>
*/
