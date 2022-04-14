import React, { useState, useContext } from 'react'
import Dropdown from './Dropdown'
import {NavigationContext} from '../Context/NavigationContext'
import '../Styles/Nav.scss'

const Nav = () => {
  const [clicked, setClicked] = useState(false)
  const { filterButton } = useContext(NavigationContext)

  const toggleClick = () => {
    setClicked(!clicked)
  }

  return (
    <div className='nav-container'>
      <h1 className='page-title'>News Reader</h1>
      {filterButton &&
        <button
          onClick={toggleClick}
          className='filter-button'
        >
          filter by
        </button>
      }
      {clicked && <Dropdown toggleClick={toggleClick}/>}
    </div>
)

}

export default Nav
