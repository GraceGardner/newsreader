import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

const MainCard = ({article}) => {


  return (
    <>
      <Link to='/SelectedArticle'>
        <img src={`${article.multimedia[0].url}`}/>
        <h2 className='article-title'>{article.title}</h2>
        <h3>{article.author}</h3>
        <p>{article.abstract}</p>
        <p></p>
      </Link>
    </>

  )
}

export default MainCard
