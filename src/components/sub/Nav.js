import React from 'react'
import PropTypes from 'prop-types'
import { TiStarburst } from 'react-icons/ti'
import { MdSchool } from 'react-icons/md'
import { FaLightbulb } from 'react-icons/fa'

function Label ({ text }) {
  return (
    <div className='filter-label'>{text}</div>
  )
}

Label.propTypes = {
  text: PropTypes.string.isRequired
}

export default class Nav extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      filter: null
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (filter) {
    if (this.state.filter === filter) {
      this.setState({
        filter: null
      })
    } else {
      this.setState({
        filter: filter
      })
    }
  }

  render () {
    return (
      <ul className='nav-list'>
        <li className='filter-item'>
          <TiStarburst onClick={() => this.handleClick('Latest')} color='rgb(59, 63, 106)' size={22} />
          {this.state.filter === 'Latest' ? <Label text='Working On' /> : null}
        </li>
        <li className='filter-item'>
          <MdSchool onClick={() => this.handleClick('School')} color='rgb(59, 63, 106)' size={22} />
          {this.state.filter === 'School' ? <Label text='Classwork' /> : null}
        </li>
        <li className='filter-item'>
          <FaLightbulb onClick={() => this.handleClick('Future')} color='rgb(59, 63, 106)' size={22} />
          {this.state.filter === 'Future' ? <Label text='Ideas for Future' /> : null}
        </li>
      </ul>
    )
  }
}
