import React, {useContext} from 'react'
import { CategoryContext } from '../Context/CategoryContext'
import {getArticles} from '../apiCalls.js'
import '../Styles/Dropdown.scss'

const Dropdown = ({toggleClick}) => {

  const {setCategory} = useContext(CategoryContext)

  const sections = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world']

  const handleSectionClick = (event) => {
    toggleClick()
    getArticles(event.target.id)
    .then(response => setCategory(response.results))
  }

  const dropdownButtons = () => {
    return sections.map((section, i)=> {
      return (
        <button
          id={section}
          key={i}
          onClick={event => handleSectionClick(event)}
        >
          {section}
        </button>
      )
    })
  }

  return(
    <div className='dropdown-container'>
      {dropdownButtons()}
    </div>
  )
}

export default Dropdown
