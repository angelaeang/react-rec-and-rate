import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Box from './Box.js'
import { useLocation } from 'react-router-dom'

const MainBody = ( {lists} ) => {
    const location = useLocation()
    let path = 'default'
    let myType = 'default'
    let myKey = 0
    if (location.pathname !== '/') {
        path = `${location.pathname}/*`
        myType = location.pathname.slice(1)
        lists.map((list) => 
            list['type'] === myType ? (myKey = list['id'])
            : (myKey = myKey + 0)
        )
    }
    let myListObj = {
      "id": myKey,
      "type": myType
    }

  return (
    <Routes>
          <Route path='*' element={<>
            { lists.map( (list) => (
                  <Box key={list.id} list={list} redirect={`/${list.type}`}/> 
              ) ) }
          </>} />
          
          <Route path={path} element={<>
            <Box key={myKey} list={myListObj} redirect={"/"}/>
          </>} />

        </Routes>
  )
}

export default MainBody

/*
    <Route path='/music/*' element={<>
    <Box key={0} list={ {"id": 1, "type": "music"}} redirect={"/"}/>
    </>} />

    <Route path='/shows/*' element={<>
    <Box key={1} list={ {"id": 2, "type": "shows"}} redirect={"/"}/>
    </>} />

    <Route path='/movies/*' element={<>
    <Box key={2} list={ {"id": 3, "type": "movies"}} redirect={"/"}/>
    </>} />

    <Route path='/boba/*' element={<>
    <Box key={3} list={ {"id": 4, "type": "boba"}} redirect={"/"}/>
    </>} />
*/