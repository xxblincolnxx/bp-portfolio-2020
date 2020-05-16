import React from 'react'
import Links from './sub/mylinks'
import Nav from './sub/nav'
import Grid from './sub/grid'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'

const projects = [
  {
    id: uuidv4(),
    title: 'Bev Dev',
    blurb: 'My final group project at Momentum Learning.',
    image: '../img/bev_dev_cropped.jpg',
    href: 'https://bevdir.herokuapp.com/',
    category: 'Classroom',
    tools: '',
    challenges: '',
    filters: ['Classroom', 'Vue.js', 'JavaScript', 'Django', 'Python', 'All'],
    status: 'Complete'
  },
  {
    id: uuidv4(),
    title: 'Flashcards',
    blurb: null,
    image: '../img/flashcard_cropped.jpg',
    href: 'https://flashcard-benji.herokuapp.com/',
    category: 'Classroom',
    tools: '',
    challenges: '',
    filters: ['Classroom', 'JavaScript', 'Django', 'Python', 'All'],
    status: 'Complete'
  },
  {
    id: uuidv4(),
    title: 'OO-PIG',
    blurb: null,
    image: '../img/oop_pig_cropped.jpg',
    href: 'https://github.com/xxblincolnxx/oo-pig-xxblincolnxx',
    category: 'Classroom',
    tools: '',
    challenges: '',
    filters: ['Classroom', 'Python'],
    status: 'Complete'
  },
  {
    id: uuidv4(),
    title: 'Baby Notes',
    blurb: null,
    image: '../img/bb_notes_cropped.jpg',
    href: 'https://github.com/xxblincolnxx/build-a-notes-application-xxblincolnxx',
    category: '',
    tools: '',
    challenges: '',
    filters: ['Classroom', 'JavaScript'],
    status: 'Complete'
  },
  {
    id: uuidv4(),
    title: 'Portfolio',
    blurb: null,
    image: '../img/port_cropped.jpg',
    href: 'https://github.com/xxblincolnxx/bp-portfolio-2020',
    category: '',
    tools: '',
    challenges: '',
    filters: ['Independent', 'React', 'JavaScript', 'Sass'],
    status: 'In Progress'
  },
  {
    id: uuidv4(),
    title: 'Tank Builder',
    blurb: null,
    image: '../img/tank_builder_cropped.jpg',
    href: '',
    category: '',
    tools: '',
    challenges: '',
    filters: ['Independent', 'React', 'Django', 'Python', 'JavaScript', 'Coming Soon'],
    status: 'Not Started'
  },
  {
    id: uuidv4(),
    title: 'Just the Recipe',
    blurb: null,
    image: '../img/jtfr_bg_cropped.jpg',
    href: '',
    category: '',
    tools: '',
    challenges: '',
    filters: ['Independent', 'React', 'Coming Soon'],
    status: 'Not Started'
  }
]

function Label ({ text }) {
  return (
    <div className='filter-label'>{text}</div>
  )
}

Label.propTypes = {
  text: PropTypes.string.isRequired
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
      <div className='container'>
        <Links />
        <div className='main'>
          <div className='container align-items-center'>
            <Nav toggleDisplay={(selection) => this.handleDisplayChange(selection)} />
            <Label text={`${this.state.display} Projects`} />
          </div>

          <Grid projects={this.state.projects} display={this.state.display} />
        </div>

      </div>
    )
  }
}
