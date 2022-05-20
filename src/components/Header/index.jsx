import React from 'react'
import './styles.css'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const handleActive = ({isActive}) => {
    return isActive ? 'active' : undefined
  }

  return (
    <header>
      <NavLink className={`logo ${handleActive}`} to='/'>MindX</NavLink>
      <div className='option'>
        <ul>
          <li>
            <NavLink className={handleActive} to='/resource'>Resource</NavLink>
            <NavLink className={handleActive} to='/about'>About</NavLink>
            <NavLink className={handleActive} to='/signup'>Sign Up</NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header