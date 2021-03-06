import './App.css';
import React from 'react'
import Nav from './components/Nav'
import Main from './components/Main'
import SelectedArticle from './components/SelectedArticle'
import {Route, Routes} from 'react-router-dom'
import { ArticleProvider } from './Context/ArticleContext'
import { CategoryProvider } from './Context/CategoryContext'
import { NavigationProvider } from './Context/NavigationContext'
import { ErrorProvider } from './Context/ErrorContext'

const App = () => {

  return (
    <ErrorProvider>
      <NavigationProvider>
        <CategoryProvider>
          <ArticleProvider>
            <Nav/>
            <Routes>
              <Route path='/' element={<Main/>}/>
              <Route path='/SelectedArticle' element={<SelectedArticle/>}/>
            </Routes>
          </ArticleProvider>
        </CategoryProvider>
      </NavigationProvider>
    </ErrorProvider>
  )
}

export default App;
