import React from 'react'
import './style.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// CONDITIONAL IMPORTS:
const Home = React.lazy(() => import('./components/home'))
const About = React.lazy(() => import('./components/about'))
const Contact = React.lazy(() => import('./components/contact'))

function App () {
  return (
    <Router>
      <div className='App'>
        <React.Suspense fallback={<p>Trust me... the interwebs is workin' hard to get you your information...</p>}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Contact' component={Contact} />
          </Switch>
        </React.Suspense>
      </div>
    </Router>
  )
}

export default App
