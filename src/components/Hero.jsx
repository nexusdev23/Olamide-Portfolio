import { useEffect, useState } from 'react'

export default function Hero() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section className={`hero ${ready ? 'hero--ready' : ''}`} id="top">
      <div className="hero__atmosphere" aria-hidden="true">
        <div className="hero__wash" />
        <div className="hero__grain" />
        <div className="hero__orb hero__orb--a" />
        <div className="hero__orb hero__orb--b" />
        <div className="hero__strand hero__strand--1" />
        <div className="hero__strand hero__strand--2" />
        <div className="hero__glow" />
      </div>

      <div className="hero__content">
        <p className="hero__brand">Olamide Olarewaju</p>
        <h1 className="hero__headline">
          Social strategy that helps any brand grow with clarity.
        </h1>
        <p className="hero__support">
          Social Media Manager &amp; Digital Marketer in Lagos—building content
          systems, go-to-market plans, and lifecycle journeys for brands across
          categories.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#work">
            View case studies
          </a>
          <a className="btn btn--ghost" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
