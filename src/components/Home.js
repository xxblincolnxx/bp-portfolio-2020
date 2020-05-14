import React from 'react'
import Links from './sub/Mylinks'
import Nav from './sub/Nav'
import Grid from './sub/Grid'
import { v4 as uuidv4 } from 'uuid'

const projects = [
  {
    id: uuidv4(),
    title: 'Bev Dev',
    blurb: 'My final group project at Momentum Learning.',
    image: '../img/bev_dev_cropped.jpg',
    href: 'https://bevdir.herokuapp.com/',
    category: 'Classwork',
    tools: '',
    challenges: '',
    filters: ['Classwork', 'Vue.js', 'JS', 'Django', 'All'],
    status: 'Complete'
  },
  {
    id: uuidv4(),
    title: 'Flashcards',
    blurb: null,
    image: '../img/flashcard_cropped.jpg',
    href: 'https://flashcard-benji.herokuapp.com/',
    category: 'Classwork',
    tools: '',
    challenges: '',
    filters: ['Classwork', 'JS', 'Django', 'Python', 'All'],
    status: 'Complete'
  },
  {
    id: uuidv4(),
    title: '',
    blurb: null,
    image: '',
    href: '',
    category: '',
    tools: '',
    challenges: '',
    filters: [],
    status: ''
  },
  {
    id: uuidv4(),
    title: '',
    blurb: null,
    image: '',
    href: '',
    category: '',
    tools: '',
    challenges: '',
    filters: [],
    status: ''
  },
  {
    id: uuidv4(),
    title: '',
    blurb: null,
    image: '',
    href: '',
    category: '',
    tools: '',
    challenges: '',
    filters: [],
    status: ''
  },
  {
    title: '',
    blurb: null,
    image: '',
    href: '',
    category: '',
    tools: '',
    challenges: '',
    filters: [],
    status: ''
  },
  {
    id: uuidv4(),
    title: '',
    blurb: null,
    image: '',
    href: '',
    category: '',
    tools: '',
    challenges: '',
    filters: [],
    status: ''
  },
  {
    id: uuidv4(),
    title: '',
    blurb: null,
    image: '',
    href: '',
    category: '',
    tools: '',
    challenges: '',
    filters: [],
    status: ''
  },
  {
    id: uuidv4(),
    title: '',
    blurb: null,
    image: '',
    href: '',
    category: '',
    tools: '',
    challenges: '',
    filters: [],
    status: ''
  },
  {
    id: uuidv4(),
    title: '',
    blurb: null,
    image: '',
    href: '',
    category: '',
    tools: '',
    challenges: '',
    filters: [],
    status: ''
  },
  {
    id: uuidv4(),
    title: '',
    blurb: null,
    image: '',
    href: '',
    category: '',
    tools: '',
    challenges: '',
    filters: [],
    status: ''
  }
]
function Headline () {
  return (
    <div className='headline'>BP</div>
  )
}

export default class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      projects: projects,
      display: 'All'
    }

    this.handleDisplayChange = this.handleDisplayChange.bind(this)
  }

  handleDisplayChange (selection) {
    this.setState({
      display: selection
    })
  }

  render () {
    return (
      <>
        <div className='container'>
          <Headline />
          <Nav toggleDisplay={(selection) => this.handleDisplayChange(selection)} />
        </div>

        <Grid projects={this.state.projects} display={this.state.display} />
        <Links />
      </>
    )
  }
}
