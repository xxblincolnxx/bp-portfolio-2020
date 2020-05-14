import React from 'react'
import PropTypes from 'prop-types'
import { FaBrain, FaGraduationCap, FaVuejs, FaReact, FaPython, FaSass } from 'react-icons/fa'
import { DiDjango, DiJavascript1 } from 'react-icons/di'
import { BsCode } from 'react-icons/bs'
import { AiOutlineEllipsis } from 'react-icons/Ai'

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
      filter: 'All'
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (filter) {
    if (this.state.filter === filter) {
      this.setState({
        filter: 'All'
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
      <>
        <ul className='nav-list'>
          <li key='All'>
            <BsCode className='filter-item' onClick={() => this.handleClick('All')} color='rgb(255, 117, 93)' size={25} />
          </li>
          <li key='Independent'>
            <FaBrain className='filter-item' onClick={() => this.handleClick('Independent')} color='rgb(255, 117, 93)' size={25} />
          </li>
          <li key='Classwork'>
            <FaGraduationCap className='filter-item' onClick={() => this.handleClick('Classwork')} color='rgb(255, 117, 93)' size={25} />
          </li>
          <li key='Django'>
            <DiDjango className='filter-item' onClick={() => this.handleClick('Django')} color='rgb(255, 117, 93)' size={25} />
          </li>
          <li key='JavaScript'>
            <DiJavascript1 className='filter-item' onClick={() => this.handleClick('JavaScript')} color='rgb(255, 117, 93)' size={25} />
          </li>
          <li key='Vue'>
            <FaVuejs className='filter-item' onClick={() => this.handleClick('Vue.js')} color='rgb(255, 117, 93)' size={25} />
          </li>
          <li key='React'>
            <FaReact className='filter-item' onClick={() => this.handleClick('React')} color='rgb(255, 117, 93)' size={25} />
          </li>
          <li key='Python'>
            <FaPython className='filter-item' onClick={() => this.handleClick('Python')} color='rgb(255, 117, 93)' size={25} />
          </li>
          <li key='Sass'>
            <FaSass className='filter-item' onClick={() => this.handleClick('Sass')} color='rgb(255, 117, 93)' size={25} />
          </li>
          <li key='Incoming'>
            <AiOutlineEllipsis className='filter-item' onClick={() => this.handleClick('Incoming')} color='rgb(255, 117, 93)' size={25} />
          </li>
        </ul>
        <Label text={`${this.state.filter} Projects`} />
      </>
    )
  }
}

Nav.propTypes = {
  toggleDisplay: PropTypes.func.isRequired
}
