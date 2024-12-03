import Hero from "./components/organisms/Hero"
import About from "./components/organisms/About"
import Skills from "./components/organisms/Skills"
import Experience from "./components/organisms/Experience"
import Projects from "./components/organisms/Projects"
import Contact from "./components/organisms/Contact"

function App() {

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
