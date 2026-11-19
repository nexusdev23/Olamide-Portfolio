import { useInView } from '../hooks/useInView'

export default function Contact() {
  const { ref, inView } = useInView()

  return (
    <section
      className={`contact reveal ${inView ? 'is-visible' : ''}`}
      id="contact"
      ref={ref}
      aria-labelledby="contact-heading"
    >
      <p className="eyebrow">Contact</p>
      <h2 id="contact-heading">Let’s build the next campaign.</h2>
      <p className="lede">
        Open to social media management, digital marketing projects, and brand
        collaborations across industries.
      </p>
      <div className="contact__links">
        <a href="mailto:olarewajuolamide524@gmail.com">olarewajuolamide524@gmail.com</a>
        <a href="tel:+2347018141917">(+234) 07018141917</a>
        <a
          href="https://linkedin.com/in/olamideolarewaju"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/olamideolarewaju
        </a>
        <p className="contact__place">Lagos, Nigeria</p>
      </div>
    </section>
  )
}
