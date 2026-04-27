import { createPortal } from 'react-dom'
import { useEffect, type ReactNode } from 'react'

type Props = {
  open: boolean
  onClose: () => void
  src: string
  alt: string
  /** Texto opcional debajo de la imagen (p. ej. leyenda del carrusel) */
  caption?: ReactNode
  labels: { close: string; dialog: string }
}

export function ImageLightbox({ open, onClose, src, alt, caption, labels }: Props) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  if (!open || typeof document === 'undefined') return null

  return createPortal(
    <div className="imgLightbox" role="dialog" aria-modal="true" aria-label={labels.dialog}>
      <button
        type="button"
        className="imgLightbox__backdrop"
        aria-label={labels.close}
        onClick={onClose}
      />
      <button type="button" className="imgLightbox__close" aria-label={labels.close} onClick={onClose}>
        ×
      </button>
      <div className="imgLightbox__frame">
        <img className="imgLightbox__img" src={src} alt={alt} />
        {caption ? <div className="imgLightbox__caption">{caption}</div> : null}
      </div>
    </div>,
    document.body,
  )
}
