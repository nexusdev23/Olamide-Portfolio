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
          <p className="eyebrow">Profile</p>
          <h2 id="about-heading">
            A practical, audience-aware approach to digital content.
          </h2>
        </div>
        <div className="about__body">
          <p>
            I’m Olamide Olarewaju—a social media and digital marketing
            practitioner with hands-on experience managing TikTok content for
            brands in different niches, alongside marketing plans and
            go-to-market strategies.
          </p>
          <p>
            My work brings together content planning, clear messaging,
            platform-aware copywriting, and performance review. I translate
            brand goals into useful content and campaigns that speak to the
            right audience—whether the brief is health education, fragrance
            retail, or product launch.
          </p>
          <ul className="about__creds" aria-label="Core capabilities">
            <li>Social media management — planning, publishing, page consistency</li>
            <li>Content &amp; copywriting — captions, hooks, CTAs, hashtag research</li>
            <li>Digital marketing — segmentation, lead generation, customer journeys</li>
            <li>Campaign strategy — positioning, channel planning, launch KPIs</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
