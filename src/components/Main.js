import React, {useEffect, useState} from 'react'
import MainCard from './MainCard'
import {Link} from 'react-router-dom'
import {getArticles} from '../apiCalls.js'
import '../Styles/Main.scss'

const Main = () => {
  const [articles, setArticles] = useState(null)


  useEffect(() => {
    getArticles('home')
    .then(response => setArticles(response.results))
  }, [])

  const displayArticles = () => {
    console.log(articles)
    return articles.map(article => {
      return(
        <Link to='/SelectedArticle'>
          <MainCard article={article}/>
        </Link>
      )
    })
  }

  return (
    <div className='main-container'>
      {articles && displayArticles()}
    </div>

  )
}

export default Main
