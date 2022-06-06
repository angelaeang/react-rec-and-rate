import Item from './Item'
import { useLocation } from 'react-router-dom'

const Items = (props) => {
    const location = useLocation();
    let items = props.items

    if (location.pathname === '/') {
        items = items.slice(0, 5)
    }

    return (
        <>
            { items.map( (item, index) => (
                <Item key={item.id} item={item} index={index + 1} anon={item.anon} onUp={() => props.onUp(item.id)} onDown={() => props.onDown(item.id)} /> 
            ) ) }

        </>
    )
}

export default Items


//NOTES
/* prev
onToggle={() => props.onToggle(item.id)}
onDelete={() => props.onDelete(item.id)}
*/