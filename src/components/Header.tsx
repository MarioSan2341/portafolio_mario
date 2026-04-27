import { useLanguage } from '../context/LanguageContext'
import { portfolioByLocale } from '../content/portfolio'
import { ui } from '../i18n/ui'
import { LanguageSwitch } from './LanguageSwitch'

export function Header() {
  const { locale } = useLanguage()
  const portfolio = portfolioByLocale[locale]
  const t = ui[locale]

  const nav = [
    { id: 'inicio', label: t.navInicio },
    { id: 'sobre-mi', label: t.navSobre },
    { id: 'proyectos', label: t.navProyectos },
    { id: 'contacto', label: t.navContacto },
  ]

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand" href="#inicio" aria-label={t.brandHome}>
          <span className="brand__dot" aria-hidden="true" />
          <span className="brand__text">{portfolio.name}</span>
        </a>

        <nav className="nav" aria-label={t.navSections}>
          {nav.map((item) => (
            <a key={item.id} className="nav__link" href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header__tools">
          <LanguageSwitch />
          <a className="button button--ghost header__ctaBtn" href="#contacto">
            {t.headerContact}
          </a>
        </div>
      </div>
    </header>
  )
}
