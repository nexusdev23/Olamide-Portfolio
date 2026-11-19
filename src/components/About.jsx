import { useInView } from '../hooks/useInView'

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section
      className={`about reveal ${inView ? 'is-visible' : ''}`}
      id="about"
      ref={ref}
      aria-labelledby="about-heading"
    >
      <div className="about__grid">
        <div>
          <p className="eyebrow">About</p>
          <h2 id="about-heading">
            Detail-minded marketer who turns brand friction into clear stories.
          </h2>
        </div>
        <div className="about__body">
          <p>
            I’m Olamide—a Product &amp; Social Media Marketer with hands-on
            experience shaping Instagram and TikTok content strategy. I plan,
            create, schedule, and read the metrics so messaging stays consistent
            and audiences actually engage—for brands in any category.
          </p>
          <p>
            My work sits at the intersection of product marketing and social:
            personas, positioning, channel plans, creative concepts, and nurture
            systems that move people from “I saw it” to “I bought it”—and back
            again. Recent case studies happen to be in beauty; the same process
            travels with the brief.
          </p>
          <ul className="about__creds">
            <li>Product &amp; Social Media Marketer — Shyne Luxxie &amp; Stelz Accessories</li>
            <li>Social Media Marketing — TS Academy</li>
            <li>Virtual Assistant Programme — ALX Africa</li>
            <li>CRM · Project Management · Soft Skills certifications</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
