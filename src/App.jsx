import Navbar from './components/navbar.jsx'
import Hero from './components/hero.jsx'
import About from './components/about.jsx'
import School from './components/schoolJourney.jsx'
import Skill from './components/skill.jsx'
import Project from './components/projek.jsx'
import './index.css'

function App() {
  return (
    <div className="bg-stone-900">
      <Navbar />
        <Hero />
        <About />
        <School />
        <Skill/>

      </div>
  )
}


export default App
