import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { useState, useEffect } from 'react'
import MainBody from './components/MainBody'
//import Music from './components/Music'


function App() {
  //empty list for the info about the lists
  const [lists, setLists] = useState([])

  //get and use lists from the server
  //not the actual lists, but info about the lists
  useEffect(() => {
    const getLists= async () => {
      const listsFromServer = await fetchLists()
      setLists(listsFromServer)
    }

    getLists()
  }, [])

  //Fetch info abt Lists from server
  const fetchLists = async () => {
    const res = await fetch('http://localhost:5000/lists')
    const data = await res.json()

    //console.log(data)
    return data
    //returns a promise on async
  }

  return ( //this is jsx , javascript syntax extension. 
    <Router>
      <h1 id='title'>Recommend &amp; Rate</h1>
      <div className='mainContainer'>

        <MainBody lists={lists}/>

      </div>

    </Router>
    
  );
}




/*********************************************************** */
//syntax to use classes instead of functions
/*
class App extends React.Component {
  render() {
    return <h1>hello!</h1>
  }
}
*/

export default App;


