import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-neutral-950 bg-texture-dark text-white selection:bg-yellow-400 selection:text-black">
      <div className="absolute top-0 z-[-2] h-full min-h-screen w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      
      <Header />
      <main className="px-4">
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App