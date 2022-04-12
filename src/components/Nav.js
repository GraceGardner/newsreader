import React from 'react'
import '../Styles/Nav.scss'

const Nav = () => {

  return (
    <div className='nav-container'>
      <h1>News Reader</h1>
      <input type='text' placeholder='search ...'/>
      <button>filter by</button>
    </div>
)

}

export default Nav
