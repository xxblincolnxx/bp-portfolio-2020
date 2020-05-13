import React from 'react'
import Headline from './sub/Headline'
import Links from './sub/Mylinks'
import Nav from './sub/Nav'

const projects = [
  {
    title: 'Bev Dev',
    blurb: 'My final group project at Momentum Learning.',
    image: 'bp-portfolio-2020/img/bev_dev_cropped.jpg',
    href: 'https://github.com/xxblincolnxx/Beverage-Director',
    category: 'Classwork',
    status: 'Complete'
  },
  {
    title: 'Flashcards',
    blurb: null,
    image: 'bp-portfolio-2020/img/flashcard_cropped.jpg',
    href: 'https://github.com/momentum-cohort-2020-01/django-multiple-choice-xxblincolnxx',
    category: 'Classwork',
    status: 'Complete'
  },
  {
    title: '',
    blurb: null,
    image: '',
    href: '',
    category: '',
    status: ''
  },
  {
    title: '',
    blurb: null,
    image: '',
    href: '',
    category: '',
    status: ''
  },
  {
    title: '',
    blurb: null,
    image: '',
    href: '',
    category: '',
    status: ''
  },
  {
    title: '',
    blurb: null,
    image: '',
    href: '',
    category: '',
    status: ''
  },
  {
    title: '',
    blurb: null,
    image: '',
    href: '',
    category: '',
    status: ''
  },
  {
    title: '',
    blurb: null,
    image: '',
    href: '',
    category: '',
    status: ''
  },
  {
    title: '',
    blurb: null,
    image: '',
    href: '',
    category: '',
    status: ''
  },
  {
    title: '',
    blurb: null,
    image: '',
    href: '',
    category: '',
    status: ''
  },
  {
    title: '',
    blurb: null,
    image: '',
    href: '',
    category: '',
    status: ''
  },
  {
    title: '',
    blurb: null,
    image: '',
    href: '',
    category: '',
    status: ''
  }
]

export default class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      projects: projects
    }
  }

  render () {
    return (
      <>
        <Headline />
        <Nav />
        <Links />
      </>
    )
  }
}
