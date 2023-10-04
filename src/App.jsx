import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextEntry from './components/TextEntry'
import TextAnalysis from './components/TextAnalysis'

function App() {

  return ( 
    <>
      <div>
      <h1 className="headTitle">Welcome to EmoRelease: Your Emotion Outlet</h1>
      <div className="flex-container" >
       <TextEntry />
       <TextAnalysis />
    </div>
    </div>
    </>
  )
}

export default App
