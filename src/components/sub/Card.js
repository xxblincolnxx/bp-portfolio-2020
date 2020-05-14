import React from 'react'
import { FaBrain, FaGraduationCap, FaVuejs, FaReact, FaPython, FaSass } from 'react-icons/fa'
import { DiDjango, DiJavascript1 } from 'react-icons/di'
import { BsCode } from 'react-icons/bs'
import { AiOutlineEllipsis } from 'react-icons/Ai'

export default class Card extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      hoverClass: null
    }
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
  }

  handleMouseOver () {
    this.setState({
      hoverClass: ' animate__animated animate__fadeOutUp'
    })
  }

  handleMouseOut () {
    this.setState({
      hoverClass: null
    })
  }

  render () {
    const style = {
      backgroundImage: `url(${this.props.project.image})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      margin: '5px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
    const { title, href, status, filters } = this.props.project
    const { display } = this.props
    const { hoverClass } = this.state

    if (display === 'All') {
      return (
        <>
          <a href={href}>
            <div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} className={'card ' + status} style={style}>
              {filters.includes('Independent') && <FaBrain className={hoverClass} size={80} />}
              {filters.includes('Classwork') && <FaGraduationCap className={hoverClass} size={80} />}
            </div>
            <h1>{title}</h1>
          </a>
        </>
      )
    } else {
      return (
        <>
          <a href={href}>
            <div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} className={'card ' + status} style={style}>
              {display === 'Django' && <DiDjango className={hoverClass} size={80} />}
              {display === 'Vue.js' && <FaVuejs className={hoverClass} size={80} />}
              {display === 'React' && <FaReact className={hoverClass} size={80} />}
              {display === 'Python' && <FaPython className={hoverClass} size={80} />}
              {display === 'Sass' && <FaSass className={hoverClass} size={80} />}
              {display === 'JavaScript' && <DiJavascript1 className={hoverClass} size={80} />}
              {display === 'Incoming' && <AiOutlineEllipsis className={hoverClass} size={80} />}
            </div>
            <h1>{title}</h1>
          </a>
        </>
      )
    }
  }
}
