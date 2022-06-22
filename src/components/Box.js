import React from 'react'
import Header from './Header'
import Expand from './Expand'
import Items from './Items'
import AddItem from './AddItem'
import { useState, useEffect } from 'react'

const Box = ( {list, redirect} ) => {
  //boolean whether to show the "add" button
  const [showAdditem, setShowAdditem] = useState(false)

  //items holds a list of the reviews, setItems is way to update the state
  const [items, setItems] = useState([])

  let myClassName = "container multPage"
  if (redirect === "/") {
    myClassName = "container indPage"
  }

  //get initial state from database
  useEffect(() => {
    //Fetch items
    const fetchitems = async () => {
      const res = await fetch(`http://localhost:5000/${list.type}`) //use to have be "http://localhost:5000/items/"
      const data = await res.json()

      return data
      //returns a promise on async
    }
    const getitems= async () => {
      const itemsFromServer = await fetchitems()
      itemsFromServer.sort( compare )
      itemsFromServer.reverse()
      setItems(itemsFromServer)
    }

    getitems()
  }, [list.type])

  
  //Fetch item (singular)
  const fetchitem = async (id) => {
    const res = await fetch(`http://localhost:5000/${list.type}/${id}`)
    const data = await res.json()

    //console.log(data)
    //console.log("NUM2")
    return data
  }


  //change the score base on up or down vote! (num=0 is down, num=1 is up)
  const thumbsUp = (id) => { 
    changeScore(id, 1)
  }

  //change the score base on up or down vote! (num=0 is down, num=1 is up)
  const thumbsDown = (id) => { 
    changeScore(id, 0)
  }

  //change the score base on up or down vote! (num=0 is down, num=1 is up)
  const changeScore = async (id, num) => { //filter creates new array w/ a;; elmts that pass test
    const myItem = await fetchitem(id, list.type)
    let upScore = myItem.up
    let downScore = myItem.down
    if (num === 0) {
      downScore = downScore + 1
    } else {
      upScore = upScore + 1
    }
    let newScore = upScore-downScore
    const upditem = {...myItem, 
    up: upScore, down: downScore, score: newScore}

    await fetch(`http://localhost:5000/${list.type}/${id}`, {
      method: "PUT",
      headers: {
        'Content-type': "application/json",
      },
      body: JSON.stringify(upditem)
    })
    

    //const data = await res.json()
    // setItems(
    //   items.map((item) => 
    //     item.id === id ?
    //     {...item, up: upScore, down: downScore, score: newScore} : item
    //   )
    // )
    const new_items =
      items.map((item) => 
        item.id === id ?
        {...item, up: upScore, down: downScore, score: newScore} : item
      )

    sortItems(new_items)

  }

  //delete item
  const deleteitem = async (id) => { //filter creates new array w/ a;; elmts that pass test
    await fetch(`http://localhost:5000/${list.type}/${id}`, {
      method: "DELETE",
    })
    //item.id !== id  -> is a bool. If true, include it in the new list! 
    setItems(items.filter((item) => item.id !== id))
  }

  //add item
  const additem = async (item) => {
    const res = await fetch(`http://localhost:5000/${list.type}`, {
      method: "POST",
      headers: {
        'Content-type': "application/json",
      },
      body: JSON.stringify(item),
    })

    const data = await res.json()
    // console.log(data)

    const new_items = [...items, data]
    sortItems(new_items)
  }

  const compare = ( a, b ) => {
      if ( a.score < b.score ){
        return -1;
      }
      if ( a.score > b.score ){
        return 1;
      }
      return 0;
  }  

  const sortItems = (new_items) => {
    //put items in order by score
    new_items.sort( compare )
    new_items.reverse()
    setItems(new_items)
  
  }


  /*
  const toggleAnon = async(id) => {
    const itemToToggle = await fetchitem(id, list.type)
    const upditem = {...itemToToggle, 
    anon: !itemToToggle.anon }

    const res = await fetch(`http://localhost:5000/${list.type}/${id}`, {
      method: "PUT",
      headers: {
        'Content-type': "application/json",
      },
      body: JSON.stringify(upditem)
    })
    

    const data = await res.json()

    setItems(
      items.map((item) => 
        item.id === id ?
        {...item, anon: data.anon} : item
      )
    )
  }
  */


    return (
      <div className={myClassName} >
        <Expand redirect={redirect}/>
        <Header title={list.type} toggleAdd={() => {setShowAdditem(!showAdditem)}}
          showAdd={showAdditem}
        /> 
           
        {showAdditem && <AddItem onAdd={additem} />}
        {items.length > 0 ? (
          <Items
            items={items}
            onDelete={deleteitem}
            onUp={thumbsUp}
            onDown={thumbsDown}
          />
        ) : (
          'No items To Show'
        )}
            
      </div>
  )
}

export default Box

//in "<Items />"" , use to have: "onToggle={toggleReminder}"