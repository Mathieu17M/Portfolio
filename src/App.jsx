import { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-primary min-h-screen text-white">
      <Navbar />
      <main className="container mx-auto px-4">
        <section id="about" className="py-20">
          <About />
        </section>
        <section id="projects" className="py-20">
          <Projects />
        </section>
        <section id="skills" className="py-20">
          <Skills />
        </section>
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App 