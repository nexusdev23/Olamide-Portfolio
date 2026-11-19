import { useInView } from '../hooks/useInView'

const pillars = [
  {
    title: 'Account management',
    text: 'TikTok planning, publishing, captions, and hashtag research that keep pages consistent and discoverable.',
  },
  {
    title: 'Campaign strategy',
    text: 'Positioning, channel maps, launch sequences, and measurement frameworks—from teaser to retention.',
  },
  {
    title: 'Journeys that convert',
    text: 'Audience segmentation, lead capture, email nurture, and retargeting so attention becomes customers.',
  },
]

export default function Approach() {
  const { ref, inView } = useInView()

  return (
    <section
      className={`approach reveal ${inView ? 'is-visible' : ''}`}
      id="approach"
      ref={ref}
      aria-labelledby="approach-heading"
    >
      <div className="section-intro">
        <p className="eyebrow">Approach</p>
        <h2 id="approach-heading">How I work with brands</h2>
        <p className="lede">
          Platform-native creative, clear messaging, and structured strategy—built
          for health, retail, beauty, and whatever the next brief is.
        </p>
      </div>
      <ul className="approach__list">
        {pillars.map((p) => (
          <li key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
