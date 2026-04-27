import { Badge } from './Badge'
import { ProjectGalleryCarousel } from './ProjectGalleryCarousel'
import { useLanguage } from '../context/LanguageContext'
import { ui } from '../i18n/ui'
import type { PortfolioProject } from '../content/portfolio'

type Props = {
  project: PortfolioProject
}

export function ProjectCard({ project }: Props) {
  const { locale } = useLanguage()
  const t = ui[locale]
  const hasGallery = Boolean(project.gallery?.length)

  return (
    <article className={`card${hasGallery ? ' card--wide' : ''}`}>
      <div className="card__head">
        <div className="card__titleRow">
          <h3 className="card__title">{project.title}</h3>
          {project.confidentiality === 'private' ? <Badge>{t.badgeConfidential}</Badge> : null}
        </div>

        <p className="card__meta">
          {project.org ? <span>{project.org}</span> : null}
          {project.org && project.period ? <span className="card__sep">•</span> : null}
          {project.period ? <span>{project.period}</span> : null}
        </p>
      </div>

      <p className="card__summary">{project.summary}</p>

      {project.highlights?.length ? (
        <ul className="card__list">
          {project.highlights.map((h, idx) => (
            <li key={idx}>{h}</li>
          ))}
        </ul>
      ) : null}

      {project.stack?.length ? (
        <div className="card__badges" aria-label={t.techAria}>
          {project.stack.map((s) => (
            <span key={s} className="pill">
              {s}
            </span>
          ))}
        </div>
      ) : null}

      {hasGallery && project.gallery ? (
        <ProjectGalleryCarousel slides={project.gallery} title={project.title} closingNote={project.galleryClosing} />
      ) : null}

      {project.links?.length ? (
        <div className="card__links" aria-label={t.linksAria}>
          {project.links.map((l) => (
            <a key={l.href + l.label} className="link" href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  )
}
