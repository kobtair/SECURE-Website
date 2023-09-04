import './App.css'
import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import LoadingScreen from './components/LoadingScreen'
import ProductsPage from './pages/ProductsPage'
import About from './pages/About'
import BlogsList from './pages/BlogsList'
import CareersList from './pages/CareersList'
import ComplaintsAndDisputes from './pages/ComplaintsAndDisputes'
import ContactUs from './pages/ContactUs'
import TermsAndConditions from './pages/TermsAndConditions'
import ScheduleOfCharges from './pages/ScheduleOfCharges'
import Privacy from './pages/Privacy'
import FAQS from './components/FAQS'
import EmailSuccess from './pages/EmailSuccess'
import Blog from './pages/Blog'


function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/careers' element={<CareersList/>} />
        <Route path='/blogs' >
          <Route index element={<BlogsList />} />
          <Route path=':id' element={<Blog />} />
        </Route>
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/scheduleofcharges' element={<ScheduleOfCharges />} />
        <Route path='/termsandconditions' element={<TermsAndConditions />} />
        <Route path='/faqs' element={<FAQS />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/complaintsanddisputes' element={<ComplaintsAndDisputes />} />
        <Route path='/emailsuccess' element={<EmailSuccess />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
      <LoadingScreen/>
      </>
      

  )
}

export default App
