import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { ui } from '../i18n/ui'
import { ImageLightbox } from './ImageLightbox'

type Props = {
  src: string
  alt: string
  /** Clases del img (p. ej. hero__avatar) */
  imgClassName: string
  /** Clases del botón contenedor */
  wrapClassName?: string
}

export function ExpandableImage({ src, alt, imgClassName, wrapClassName }: Props) {
  const [open, setOpen] = useState(false)
  const { locale } = useLanguage()
  const t = ui[locale]

  return (
    <>
      <button
        type="button"
        className={wrapClassName ? `expandableThumb ${wrapClassName}` : 'expandableThumb'}
        onClick={() => setOpen(true)}
        aria-label={t.openLightbox}
      >
        <img src={src} alt={alt} className={imgClassName} />
      </button>
      <ImageLightbox
        open={open}
        onClose={() => setOpen(false)}
        src={src}
        alt={alt}
        labels={{ close: t.closeLightbox, dialog: t.lightboxDialog }}
      />
    </>
  )
}
