import React from 'react'
import {Link} from 'react-router-dom'
import SideBar from './SideBar'

const SelectedArticle = () => {

  return (
    <>
      {SideBar}
      <div>
        <Link to='/'>
          <button>go home</button>
        </Link>
      </div>
    </>
  )
}

export default SelectedArticle
