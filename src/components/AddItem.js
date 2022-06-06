import { useState } from 'react'

const AddItem = ( { onAdd }) => {
    const [rec, setRec] = useState('')
    const [review, setReview] = useState('')
    const [name, setName] = useState('')
    const [anon, setAnon] = useState(false)
    const [score, setScore] = useState(0)
    const [up, setUp] = useState(0)
    const [down, setDown] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault() //doesn't actually submit to a page. 

        if(!rec) {
            alert('Please add a rec')
            return
        }

        onAdd({ rec, review, name, anon, score, up, down }) //pass in an object

        setRec('')
        setReview('')
        setName('')
        setAnon(false)
        setScore(0)
        setUp(0)
        setDown(0)
    }
    
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Item</label>
                <input type='text'
                    placeholder='Add Item'
                    value={rec}
                    onChange={(e) => setRec(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Add a Review</label>
                <input type='text'
                    placeholder='Add a Review'
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Name</label>
                <input type='text'
                    placeholder='Add a Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Anonymous</label>
                <input type='checkbox'
                    checked={anon}
                    value={anon}
                    onChange={(e) => setAnon(e.currentTarget.checked)}
                />
            </div>

            <input type='submit' value='Save Review' className='btn btn=block'/>

        </form>
    )
}

export default AddItem

//old code:
/*
<div className='form-control form-control-check'>
    <label>Set Reminder</label>
    <input type='checkbox'
        checked={reminder}
        value={reminder}
        onChange={(e) => setReminder(e.currentTarget.checked)}
    />
</div>
*/