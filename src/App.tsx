import { portfolioByLocale } from './content/portfolio'
import { useLanguage } from './context/LanguageContext'
import { ExpandableImage } from './components/ExpandableImage'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ProjectCard } from './components/ProjectCard'
import { Section } from './components/Section'
import { ui } from './i18n/ui'

function App() {
  const { locale } = useLanguage()
  const portfolio = portfolioByLocale[locale]
  const t = ui[locale]

  return (
    <div className="app">
      <a className="skipLink" href="#contenido">
        {t.skipToContent}
      </a>

      <Header />

      <main id="contenido" className="main">
        <div className="container">
          <section id="inicio" className="hero">
            <div className="hero__grid">
              <div>
                <p className="hero__eyebrow">{portfolio.role}</p>
                <h1 className="hero__title">{portfolio.name}</h1>
                <p className="hero__tagline">{portfolio.tagline}</p>

                <div className="hero__cta">
                  <a className="button" href="#proyectos">
                    {t.heroViewProjects}
                  </a>
                  <a className="button button--ghost" href={`mailto:${portfolio.email}`}>
                    {portfolio.email}
                  </a>
                  <a
                    className="button button--ghost"
                    href={portfolio.cvPdfHref}
                    download={portfolio.cvDownloadName}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.downloadCv}
                  </a>
                </div>

                <div className="hero__meta">
                  {portfolio.location ? <span className="meta">{portfolio.location}</span> : null}
                  {portfolio.phone ? (
                    <a className="meta meta--link" href={`tel:${portfolio.phone.replace(/\s/g, '')}`}>
                      {portfolio.phone}
                    </a>
                  ) : null}
                  <span className="meta">{portfolio.skills.slice(0, 5).join(' · ')}</span>
                </div>
              </div>

              <div className="hero__avatarWrap" aria-label={t.profilePhotoAria}>
                <ExpandableImage
                  src={portfolio.avatar.src}
                  alt={portfolio.avatar.alt}
                  imgClassName="hero__avatar"
                  wrapClassName="hero__avatarBtn"
                />
              </div>
            </div>
          </section>

          <Section id="sobre-mi" eyebrow={t.sectionAboutEyebrow} title={t.sectionAboutTitle}>
            <div className="grid2">
              <div className="prose">
                {portfolio.about.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="panel">
                <h3 className="panel__title">{t.sectionSkillsTitle}</h3>
                <div className="panel__pills" aria-label={t.sectionSkillsAria}>
                  {portfolio.skills.map((s) => (
                    <span key={s} className="pill">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="panel__links" aria-label={t.sectionSocialsAria}>
                  {portfolio.socials.map((s) => (
                    <a
                      key={s.href}
                      className="link"
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          <Section id="proyectos" eyebrow={t.sectionProjectsEyebrow} title={t.sectionProjectsTitle}>
            <div className="cards">
              {portfolio.projects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </Section>

          <Section id="contacto" eyebrow={t.sectionContactEyebrow} title={t.sectionContactTitle}>
            <div className="contact">
              <div className="prose">
                <p>{t.contactIntro}</p>
              </div>
              <div className="contact__actions">
                <a className="button" href={`mailto:${portfolio.email}`}>
                  {t.contactEmail}
                </a>
                {portfolio.phone ? (
                  <a
                    className="button button--ghost"
                    href={`https://wa.me/${portfolio.phone.replace(/[^\d]/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.contactWhatsapp}
                  </a>
                ) : null}
                <a
                  className="button button--ghost"
                  href={portfolio.cvPdfHref}
                  download={portfolio.cvDownloadName}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.downloadCv}
                </a>
                <span className="contact__note">{t.contactNote}</span>
              </div>
            </div>
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
