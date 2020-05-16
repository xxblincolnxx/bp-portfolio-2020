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
    image: 'https://res.cloudinary.com/deodwfxkn/image/upload/v1589671341/portfolio/bev_dev_cropped_a96bfm.jpg',
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
    image: 'https://res.cloudinary.com/deodwfxkn/image/upload/v1589671341/portfolio/flashcard_cropped_sjysmo.jpg',
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
    image: 'https://res.cloudinary.com/deodwfxkn/image/upload/v1589671341/portfolio/oop_pig_cropped_szg1ir.jpg',
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
    image: 'https://res.cloudinary.com/deodwfxkn/image/upload/v1589671341/portfolio/bb_notes_cropped_hwkdni.jpg',
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
    image: 'https://res.cloudinary.com/deodwfxkn/image/upload/v1589671341/portfolio/port_cropped_pwrpxp.jpg',
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
    image: 'https://res.cloudinary.com/deodwfxkn/image/upload/v1589671341/portfolio/tank_builder_cropped_hfrdjd.jpg',
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
    image: 'https://res.cloudinary.com/deodwfxkn/image/upload/v1589671341/portfolio/jtfr_bg_cropped_zdxkpd.jpg',
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
