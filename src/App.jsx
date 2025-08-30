import Navbar from './components/navbar.jsx'
import Hero from './components/hero.jsx'
import About from './components/about.jsx'
import './index.css'

function App() {
  return (
    <div className="bg-stone-900">
      <Navbar />
        <Hero />

        <About />
      </div>
  )
}


export default App
