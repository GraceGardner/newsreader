import React, {useEffect, useContext} from 'react'
import MainCard from './MainCard'
import { CategoryContext } from '../Context/CategoryContext'
import {Link} from 'react-router-dom'
import {getArticles} from '../apiCalls.js'
import '../Styles/Main.scss'

const Main = () => {
  const {category, setCategory} = useContext(CategoryContext)


  useEffect(() => {
    getArticles('home')
    .then(response => setCategory(response.results))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const displayArticles = () => {
    console.log(category)
    return category.map(article => {
      return(
        <Link to='/SelectedArticle'>
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
