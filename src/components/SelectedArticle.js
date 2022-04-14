import React, { useContext, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {ArticleContext} from '../Context/ArticleContext'
import {NavigationContext} from '../Context/NavigationContext'
import '../Styles/SelectedArticle.scss'

const SelectedArticle = () => {
  const { selection } = useContext(ArticleContext)
  const { setFilterButton } = useContext(NavigationContext)

  useEffect(() => {
    setFilterButton(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goHome = () => {
    setFilterButton(true)
  }

  const articleDisplay = (
    <div>
      <Link to='/'>
        <button onClick={goHome} >go home</button>
      </Link>
      <>
        <div className='article'>
          <img
            className='article-img'
            src={selection.multimedia[0].url} alt={selection.multimedia[0].caption}
          />
          <div className='article-details-container'>
            <h2 className='article-title'>{selection.title}</h2>
            <h3 className='article-author'>{selection.author}</h3>
            <p className='article-abstract'>{selection.abstract}</p>
            <a
              className='article-link'
              href={selection.url}
              target='_blank'
              rel="noreferrer"
            >
              Go to Full Article
            </a>
          </div>
        </div>
      </>
    </div>
  )

  return (
    <>
      {selection && articleDisplay}
    </>
  )
}

export default SelectedArticle
