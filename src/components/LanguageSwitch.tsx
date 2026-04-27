import { useLanguage } from '../context/LanguageContext'
import { ui } from '../i18n/ui'

export function LanguageSwitch() {
  const { locale, setLocale } = useLanguage()
  const t = ui[locale]

  return (
    <div className="langSwitch" role="group" aria-label={t.navLang}>
      <button
        type="button"
        className={`langSwitch__btn ${locale === 'es' ? 'is-active' : ''}`}
        onClick={() => setLocale('es')}
        aria-pressed={locale === 'es'}
        title={t.langEsTitle}
      >
        {t.langEs}
      </button>
      <button
        type="button"
        className={`langSwitch__btn ${locale === 'en' ? 'is-active' : ''}`}
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
        title={t.langEnTitle}
      >
        {t.langEn}
      </button>
    </div>
  )
}
