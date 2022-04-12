import React from 'react'

const Dropdown = ({toggleClick}) => {

  const sections = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world']

  const handleSectionClick = () => {
    toggleClick()
  }

  const dropdownButtons = () => {
    return sections.map((section, i)=> {
      return (
        <button
          id={section}
          key={i}
          onClick={handleSectionClick}
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
