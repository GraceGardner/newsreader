import React, {useEffect, useContext} from 'react'
import MainCard from './MainCard'
import { CategoryContext } from '../Context/CategoryContext'
import {ErrorContext} from '../Context/ErrorContext'
import {Link} from 'react-router-dom'
import {getArticles} from '../apiCalls.js'
import '../Styles/Main.scss'

const Main = () => {
  const {category, setCategory} = useContext(CategoryContext)
  const {setError} = useContext(ErrorContext)

  useEffect(() => {
    getArticles('home')
    .then(response => setCategory(response.results))
    .catch(error => setError(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const displayArticles = () => {
    return category.map((article, i) => {
      return(
        <Link to='/SelectedArticle' key={i}>
          <MainCard article={article}/>
        </Link>
      )
    })
  }

  return (
    <div className='main-container'>
      {category && displayArticles()}
    </div>

  )
}

export default Main
