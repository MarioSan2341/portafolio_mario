import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type Locale = 'es' | 'en'

const STORAGE_KEY = 'portfolio-locale'

type Ctx = {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<Ctx | null>(null)

function readStoredLocale(): Locale {
  if (typeof window === 'undefined') return 'es'
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw === 'en' ? 'en' : 'es'
  } catch {
    return 'es'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(STORAGE_KEY, next)
      } catch {
        /* modo privado u orígenes restringidos */
      }
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale === 'en' ? 'en' : 'es'
  }, [locale])

  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
