
import './App.css'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import HowItWorks from './components/HowItWorks'
import Mission from './components/Mission'
import Products from './components/Products'
import FeaturesList from './components/FeaturesList'
import Team from './components/Team'
import FAQS from './components/FAQS'
import Footer from './components/Footer'

function App() {
  return (
    <div className='flex flex-col items-center '>
      <NavBar />
      <HeroSection />
      <HowItWorks />
      <Mission />
      <Products />
      <FeaturesList />
      <Team />
      <FAQS/>
      <Footer/>
    </div>

  )
}

export default App
