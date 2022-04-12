import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {getArticles} from '../apiCalls.js'

const Main = () => {

  useEffect(() => {
    getArticles('home')
    .then(response => console.log(response))
  }, [])


  return (
    <>
      <Link to='/SelectedArticle'>
        <button>go to article</button>
      </Link>
    </>

  )
}

export default Main
