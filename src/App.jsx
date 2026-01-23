import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/AboutPage'
import SocialPage from './pages/SocialPage'
import SchedulePage from './pages/SchedulePage'
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/redes" element={<SocialPage />} />
          <Route path="/horarios" element={<SchedulePage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
