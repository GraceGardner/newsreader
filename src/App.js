import './App.css';
import Nav from './components/Nav'
import Main from './components/Main'
import SelectedStory from './components/SelectedStory'
import {Route, Routes} from 'react-router-dom'

const App = () => {
  <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/SelectedStory' element={<SelectedStory/>}/>
    </Routes>
  </>
}

export default App;
