import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// CONDITIONAL IMPORTS:
const Home = React.lazy(() => import('./components/Home'))
const About = React.lazy(() => import('./components/About'))
const Contact = React.lazy(() => import('./components/Contact'))

function App () {
  return (
    <div className='App'>THIS IS A TEST</div>
  )
}

export default App
