import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import History from './Components/History'
import Worddetails from './Components/Worddetails'


const App = () =>{

  return(
    <div>
      <BrowserRouter>
      <Header />
      <Worddetails />
      <Routes>
      <Route exact path="/" Component={Home} />
      <Route path="/History" Component={History} />
      </Routes>
      
  </BrowserRouter>
  
    </div>
  )
}


export default App