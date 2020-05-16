import React from 'react'
import { FaBrain, FaGraduationCap, FaVuejs, FaReact, FaPython, FaSass } from 'react-icons/fa'
import { DiDjango, DiJavascript1 } from 'react-icons/di'
import { AiOutlineEllipsis } from 'react-icons/ai'

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
      backgroundImage: `linear-gradient(rgba(59, 63, 106,0.5),rgba(59, 63, 106,0.5)), url(${this.props.project.image})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
    const { title, href, status, filters } = this.props.project
    const { display } = this.props
    const { hoverClass } = this.state

    if (filters.includes('Coming Soon')) {
      return (
        <a href={href} className='card-contain animate__animated animate__fadeIn'>
          <div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} className={'card ' + status} style={style}>
            <h2 className={hoverClass}>COMING SOON!</h2>
          </div>
          <h1 className='card-title'>{title}</h1>
        </a>
      )
    }

    if (display === 'All') {
      return (
        <>
          <a href={href} className='card-contain animate__animated animate__fadeIn'>
            <div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} className={'card ' + status} style={style}>
              {filters.includes('Independent') && <FaBrain className={hoverClass} color='rgba(189, 189, 189, 0.9)' size={80} />}
              {filters.includes('Classroom') && <FaGraduationCap className={hoverClass} color='rgba(189, 189, 189, 0.9)' size={80} />}
              {filters.includes('Coming Soon') && <h2>COMING SOON!</h2>}
            </div>
            <h1 className='card-title'>{title}</h1>
          </a>
        </>
      )
    } else {
      return (
        <>
          <a href={href} className='card-contain animate__animated animate__fadeIn'>
            <div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} className={'card ' + status} style={style}>
              {display === 'Django' && <DiDjango className={hoverClass} color='rgba(189, 189, 189, 0.9)' size={80} />}
              {display === 'Vue.js' && <FaVuejs className={hoverClass} color='rgba(189, 189, 189, 0.9)' size={80} />}
              {display === 'React' && <FaReact className={hoverClass} color='rgba(189, 189, 189, 0.9)' size={80} />}
              {display === 'Python' && <FaPython className={hoverClass} color='rgba(189, 189, 189, 0.9)' size={80} />}
              {display === 'Sass' && <FaSass className={hoverClass} color='rgba(189, 189, 189, 0.9)' size={80} />}
              {display === 'JavaScript' && <DiJavascript1 className={hoverClass} color='rgba(189, 189, 189, 0.9)' size={80} />}
              {display === 'Incoming' && <AiOutlineEllipsis className={hoverClass} color='rgba(189, 189, 189, 0.9)' size={80} />}
              {display === 'Independent' && <FaBrain className={hoverClass} color='rgba(189, 189, 189, 0.9)' size={80} />}
              {display === 'Classroom' && <FaGraduationCap className={hoverClass} color='rgba(189, 189, 189, 0.9)' size={80} />}

            </div>
            <h1 className='card-title'>{title}</h1>
          </a>
        </>
      )
    }
  }
}
