import { useEffect, useRef, useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import CaseStudy from './components/CaseStudy'
import Approach from './components/Approach'
import Contact from './components/Contact'
import Nav from './components/Nav'
import { clawClipCase, mideyCase } from './data/projects'

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const mainRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="site" ref={mainRef}>
      <Nav scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <section className="work" id="work" aria-labelledby="work-heading">
          <div className="section-intro reveal">
            <p className="eyebrow">Selected work</p>
            <h2 id="work-heading">Selected case studies</h2>
            <p className="lede">
              Strategy, messaging, and channel systems from recent work—including
              beauty brand GTM and full-funnel marketing plans.
            </p>
          </div>
          <CaseStudy project={clawClipCase} index={1} />
          <CaseStudy project={mideyCase} index={2} />
        </section>
        <Approach />
        <Contact />
      </main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Olamide Olarewaju</p>
        <p>Social Media Manager · Digital Marketer · Lagos</p>
      </footer>
    </div>
  )
}
