import React, { useState } from 'react'
import Dropdown from './Dropdown'
import '../Styles/Nav.scss'

const Nav = () => {
  const [clicked, setClicked] = useState(false)

  const toggleClick = () => {
    setClicked(!clicked)
  }

  return (
    <div className='nav-container'>
      <h1>News Reader</h1>
      <input type='text' placeholder='search ...'/>
      <button onClick={toggleClick}>filter by</button>
      {clicked && <Dropdown toggleClick={toggleClick}/>}
    </div>
)

}

export default Nav
