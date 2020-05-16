import React from 'react'
import PropTypes from 'prop-types'
import { FaBrain, FaGraduationCap, FaVuejs, FaReact, FaPython, FaSass } from 'react-icons/fa'
import { DiDjango, DiJavascript1 } from 'react-icons/di'
import { BsCode } from 'react-icons/bs'
import { AiOutlineEllipsis } from 'react-icons/Ai'

function Headline () {
  return (
    <div className='headline'>BP</div>
  )
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
          <Headline />
          <li key='All' title='Filter All'>
            <BsCode className='filter-item' onClick={() => this.handleClick('All')} color='rgb(255, 117, 93)' size={25} />
          </li>
          <li key='Independent' title='Filter Independent Studies'>
            <FaBrain className='filter-item' onClick={() => this.handleClick('Independent')} color='rgb(255, 117, 93)' size={25} />
          </li>
          <li key='Classroom' title='Filter Classroom Projects'>
            <FaGraduationCap className='filter-item' onClick={() => this.handleClick('Classroom')} color='rgb(255, 117, 93)' size={25} />
          </li>
          <li key='Django' title='Filter Django Projects'>
            <DiDjango className='filter-item' onClick={() => this.handleClick('Django')} color='rgb(255, 117, 93)' size={25} />
          </li>
          <li key='JavaScript' title='Filter JavaScript Projects'>
            <DiJavascript1 className='filter-item' onClick={() => this.handleClick('JavaScript')} color='rgb(255, 117, 93)' size={25} />
          </li>
          <li key='Vue' title='Filter Vue Projects'>
            <FaVuejs className='filter-item' onClick={() => this.handleClick('Vue.js')} color='rgb(255, 117, 93)' size={25} />
          </li>
          <li key='React' title='Filter React Projects'>
            <FaReact className='filter-item' onClick={() => this.handleClick('React')} color='rgb(255, 117, 93)' size={25} />
          </li>
          <li key='Python' title='Filter Python Projects'>
            <FaPython className='filter-item' onClick={() => this.handleClick('Python')} color='rgb(255, 117, 93)' size={25} />
          </li>
          <li key='Sass' title='Filter Sass Projects'>
            <FaSass className='filter-item' onClick={() => this.handleClick('Sass')} color='rgb(255, 117, 93)' size={25} />
          </li>
          <li key='Incoming' title='Filter Future Projects'>
            <AiOutlineEllipsis className='filter-item' onClick={() => this.handleClick('Coming Soon')} color='rgb(255, 117, 93)' size={25} />
          </li>
        </ul>

      </>
    )
  }
}

Nav.propTypes = {
  toggleDisplay: PropTypes.func.isRequired
}
