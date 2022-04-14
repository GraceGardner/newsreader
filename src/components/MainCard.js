import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import '../Styles/MainCard.scss'
import {ArticleContext} from '../Context/ArticleContext'

const MainCard = ({article}) => {
  const { setSelection } = useContext(ArticleContext)

  const handleArticleClick = () => {
    setSelection(article)
  }

  return (
    <>
      <div className='article-card' onClick={handleArticleClick}>
      {article.multimedia &&
        <img
          className='card-img'
          src={article.multimedia[0].url}
          alt={article.multimedia[0].caption}
        />
      }
        <h2 className='card-title'>{article.title}</h2>
        <h3 className='card-author'>{article.author}</h3>
      </div>
    </>
  )
}

export default MainCard
