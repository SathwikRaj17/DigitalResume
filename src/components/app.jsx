import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Intro from '../components/intro.jsx'
import Div from '../components/div.jsx'
function App()
{
    return(<div>
      <section><Intro /></section> 
       <section><Div /></section>
    </div>)
}

export default App;