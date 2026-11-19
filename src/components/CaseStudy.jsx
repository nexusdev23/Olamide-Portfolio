import { useInView } from '../hooks/useInView'

export default function CaseStudy({ project, index }) {
  const { ref, inView } = useInView()
  const odd = index % 2 === 1

  return (
    <article
      className={`case reveal ${odd ? 'case--odd' : 'case--even'} ${inView ? 'is-visible' : ''}`}
      id={project.id}
      ref={ref}
    >
      <header className="case__header">
        <span className="case__index">0{index}</span>
        <div>
          <p className="case__context">{project.context}</p>
          <h3 className="case__title">{project.title}</h3>
          <p className="case__subtitle">{project.subtitle}</p>
          <p className="case__tagline">{project.tagline}</p>
        </div>
      </header>

      <div className="case__story">
        <div className="case__block">
          <h4>Challenge</h4>
          <p>{project.challenge}</p>
        </div>
        <div className="case__block">
          <h4>Approach</h4>
          <p>{project.approach}</p>
        </div>
      </div>

      <div className="case__highlights">
        <h4>Strategy highlights</h4>
        <ul>
          {project.highlights.map((item) => (
            <li key={item.label}>
              <strong>{item.label}</strong>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="case__outcomes">
        <h4>Outcome &amp; learnings</h4>
        <ul>
          {project.outcomes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="case__note">{project.note}</p>
      </div>
    </article>
  )
}
