import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { useState, useEffect } from 'react'
import {Route, Routes} from 'react-router-dom'
import Box from './components/Box'
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
      <h1>Recommend and Rate</h1>
      <div className='mainContainer'>

        <Routes>

          <Route path='*' element={<>
            { lists.map( (list) => (
                  <Box key={list.id} list={list} redirect={`/${list.type}`}/> 
              ) ) }
          </>} />

          <Route path='/music/*' element={<>
            <Box key={0} list={ {"id": 0, "type": "music"}} redirect={"/"}/>
          </>} />

          <Route path='/shows/*' element={<>
            <Box key={1} list={ {"id": 1, "type": "shows"}} redirect={"/"}/>
          </>} />

        </Routes>

      </div>

    </Router>
    
  );
}




/*********************************************************** */
/*
previously had:
    <Box key={0} id="music"/>
    <Box key={1} id="shows"/>
*/


//syntax to use classes instead of functions
/*
class App extends React.Component {
  render() {
    return <h1>hello!</h1>
  }
}
*/

export default App;


