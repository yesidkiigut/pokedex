/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import { TopBar } from './components/TopBar'
import { Pokelist } from './components/Pokelist'
import { BottomBar } from './components/BottomBar'

function App() {

  return (
    <div>
      
    <TopBar/>
    <BottomBar/>
    <Pokelist/>


    </div>
     
  )
}

export default App
