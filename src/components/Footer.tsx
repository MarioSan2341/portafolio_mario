import { portfolioByLocale } from '../content/portfolio'
import { useLanguage } from '../context/LanguageContext'
import { ui } from '../i18n/ui'

export function Footer() {
  const { locale } = useLanguage()
  const portfolio = portfolioByLocale[locale]
  const t = ui[locale]
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {year} {portfolio.name}. {t.footerMadeWith}
        </p>
        <div className="footer__links" aria-label={t.footerSocialsAria}>
          {portfolio.socials.map((s) => (
            <a key={s.href} className="link" href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
