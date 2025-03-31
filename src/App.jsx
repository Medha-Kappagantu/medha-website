
import styles from './App.module.css'
import { About } from './components/about/About'
import { Awards } from './components/awards/Awards'
import { Contact } from './components/contact/Contact'
import { Experience } from './components/experience/Experience'
import { Hero } from './components/hero/Hero'
import { Navbar } from './components/navbar/Navbar'

function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero />
      <About />
      <Experience />
      <Awards />
      <Contact />
    </div>
  )
}

export default App
