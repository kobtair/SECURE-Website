
import './App.css'
import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </>

  )
}

export default App
