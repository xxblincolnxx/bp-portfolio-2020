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
      this.props.toggleDisplay('All')
    } else {
      this.setState({
        filter: filter
      })
      this.props.toggleDisplay(filter)
    }
  }

  render () {
    return (
      <ul className='nav-list'>
        <li className='filter-item'>
          <TiStarburst onClick={() => this.handleClick('Independent')} color='rgb(59, 63, 106)' size={22} />
          {this.state.filter === 'Independent' ? <Label text='Independent Study' /> : null}
        </li>
        <li className='filter-item'>
          <MdSchool onClick={() => this.handleClick('Classwork')} color='rgb(59, 63, 106)' size={22} />
          {this.state.filter === 'Classwork' ? <Label text='Classwork' /> : null}
        </li>
        <li className='filter-item'>
          <FaLightbulb onClick={() => this.handleClick('Future')} color='rgb(59, 63, 106)' size={22} />
          {this.state.filter === 'Future' ? <Label text='Future Project' /> : null}
        </li>
      </ul>
    )
  }
}

Nav.propTypes = {
  toggleDisplay: PropTypes.func.isRequired
}
