import { useInView } from '../hooks/useInView'

const pillars = [
  {
    title: 'Content systems',
    text: 'Consistent Instagram & TikTok calendars, visual identity, and lifecycle posting that keep brands present without guesswork.',
  },
  {
    title: 'Go-to-market clarity',
    text: 'Personas, positioning, UVPs, and channel maps so every campaign answers a real customer tension.',
  },
  {
    title: 'Lead & retention loops',
    text: 'Lead magnets, email nurture, segmentation, and retargeting that turn attention into buyers—and buyers into advocates.',
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
          Research-backed storytelling, platform-native creative, and measured
          iteration—built to sell clarity, convenience, and confidence for
          whatever the brand sells.
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
