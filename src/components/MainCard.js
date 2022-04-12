import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../Styles/MainCard.scss'

const MainCard = ({article}) => {


  return (
    <>
      <Link to='/SelectedArticle' className='article-card'>
        <img className='card-img'src={article.multimedia[0].url}/>
        <h2 className='card-title'>{article.title}</h2>
        <h3 className='card-author'>{article.author}</h3>
        <p className='card-abstract'>{article.abstract}</p>
        <p></p>
      </Link>
    </>
  )
}

export default MainCard
