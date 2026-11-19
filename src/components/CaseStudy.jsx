import { useInView } from '../hooks/useInView'

export default function CaseStudy({ project, index }) {
  const { ref, inView } = useInView()
  const odd = index % 2 === 1
  const hasGallery = project.gallery?.length > 0
  const hasMetrics = project.metrics?.items?.length > 0

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

      {hasGallery && (
        <div className="case__gallery" aria-label={`${project.title} visuals`}>
          {project.gallery.map((shot) => (
            <figure key={shot.src} className="case__shot">
              <img src={shot.src} alt={shot.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      )}

      {hasMetrics && (
        <div className="case__metrics">
          <p className="case__metrics-period">{project.metrics.period}</p>
          <dl className="case__metrics-row">
            {project.metrics.items.map((m) => (
              <div key={m.label} className="case__metric">
                <dt>{m.value}</dt>
                <dd>{m.label}</dd>
              </div>
            ))}
          </dl>
          {project.metrics.extras && (
            <p className="case__metrics-extra">{project.metrics.extras}</p>
          )}
          <p className="case__metrics-disclaimer">{project.metrics.disclaimer}</p>
        </div>
      )}

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
        {project.note && <p className="case__note">{project.note}</p>}
        {project.link && (
          <a
            className="case__link"
            href={project.link.href}
            target="_blank"
            rel="noreferrer"
          >
            {project.link.label}
          </a>
        )}
      </div>
    </article>
  )
}
