import './App.css'
import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import LoadingScreen from './components/LoadingScreen'
import ProductsPage from './pages/ProductsPage'
import About from './pages/About'
import Blogs from './pages/Blogs'
import Careers from './pages/Careers'


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/careers' element={<Careers/>} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
      <LoadingScreen/>
      </>
      

  )
}

export default App
