import './App.css';
import React from 'react'
import Nav from './components/Nav'
import Main from './components/Main'
import SelectedArticle from './components/SelectedArticle'
import {Route, Routes} from 'react-router-dom'

const App = () => {

  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/SelectedArticle' element={<SelectedArticle/>}/>
    </Routes>
    </>
  )
}

export default App;
