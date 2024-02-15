import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Intro from '../components/intro.jsx'
import Projects from '../components/projects.jsx'
function App()
{
    return(<div>
      <section><Intro /></section> 
       <section><Projects /></section>
    </div>)
}

export default App;