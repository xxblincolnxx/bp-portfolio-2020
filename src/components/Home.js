import React from 'react'
import Headline from './sub/Headline'
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
    href: 'https://github.com/xxblincolnxx/Beverage-Director',
    category: 'Classwork',
    tools: '',
    challenges: '',
    status: 'Complete'
  },
  {
    id: uuidv4(),
    title: 'Flashcards',
    blurb: null,
    image: '../img/flashcard_cropped.jpg',
    href: 'https://github.com/momentum-cohort-2020-01/django-multiple-choice-xxblincolnxx',
    category: 'Classwork',
    tools: '',
    challenges: '',
    status: 'Complete'
  }
  // {
  //   id: uuidv4(),
  //   title: '',
  //   blurb: null,
  //   image: '',
  //   href: '',
  //   category: '',
  //   tools: '',
  //   challenges: '',
  //   status: ''
  // },
  // {
  //   id: uuidv4(),
  //   title: '',
  //   blurb: null,
  //   image: '',
  //   href: '',
  //   category: '',
  //   tools: '',
  //   challenges: '',
  //   status: ''
  // },
  // {
  //   id: uuidv4(),
  //   title: '',
  //   blurb: null,
  //   image: '',
  //   href: '',
  //   category: '',
  //   tools: '',
  //   challenges: '',
  //   status: ''
  // },
  // {
  //   title: '',
  //   blurb: null,
  //   image: '',
  //   href: '',
  //   category: '',
  //   tools: '',
  //   challenges: '',
  //   status: ''
  // },
  // {
  //   id: uuidv4(),
  //   title: '',
  //   blurb: null,
  //   image: '',
  //   href: '',
  //   category: '',
  //   tools: '',
  //   challenges: '',
  //   status: ''
  // },
  // {
  //   id: uuidv4(),
  //   title: '',
  //   blurb: null,
  //   image: '',
  //   href: '',
  //   category: '',
  //   tools: '',
  //   challenges: '',
  //   status: ''
  // },
  // {
  //   title: '',
  //   blurb: null,
  //   image: '',
  //   href: '',
  //   category: '',
  //   tools: '',
  //   challenges: '',
  //   status: ''
  // },
  // {
  //   id: uuidv4(),
  //   title: '',
  //   blurb: null,
  //   image: '',
  //   href: '',
  //   category: '',
  //   tools: '',
  //   challenges: '',
  //   status: ''
  // },
  // {
  //   id: uuidv4(),
  //   title: '',
  //   blurb: null,
  //   image: '',
  //   href: '',
  //   category: '',
  //   tools: '',
  //   challenges: '',
  //   status: ''
  // },
  // {
  //   id: uuidv4(),
  //   title: '',
  //   blurb: null,
  //   image: '',
  //   href: '',
  //   category: '',
  //   tools: '',
  //   challenges: '',
  //   status: ''
  // }
]

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
        <Headline />
        <Nav toggleDisplay={(selection) => this.handleDisplayChange(selection)} />
        <Links />
        <Grid projects={this.state.projects} display={this.state.display} />
      </>
    )
  }
}
