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
      <p className="eyebrow">Let’s work</p>
      <h2 id="contact-heading">Let’s build brands people want to follow.</h2>
      <p className="lede">
        I bring thoughtful content planning, practical account management, and
        structured marketing strategy so brands communicate clearly and connect
        with their audiences—across industries.
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
      </div>
      <div className="contact__accounts">
        <p className="contact__accounts-label">Selected accounts</p>
        <a
          href="http://www.tiktok.com/@doctor_x01"
          target="_blank"
          rel="noreferrer"
        >
          TikTok · @doctor_x01
        </a>
        <a
          href="https://www.tiktok.com/@shyneluxxieperfumes"
          target="_blank"
          rel="noreferrer"
        >
          TikTok · @shyneluxxieperfumes
        </a>
      </div>
      <p className="contact__place">Lagos, Nigeria</p>
    </section>
  )
}
