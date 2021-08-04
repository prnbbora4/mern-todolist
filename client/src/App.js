import React from 'react'
import { Route, Switch } from 'react-router-dom'

import CreateNotes from './components/CreateNotes'
import DisplayNotes from './components/DisplayNotes'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>

        <Route path="/create">
          <CreateNotes />
        </Route>

        <Route  path="/show" >
          <DisplayNotes />
        </Route>
      </Switch>


      <Footer />
    </>
  )
}

export default App
