import { useCallback, useEffect, useState, type KeyboardEvent } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { ui } from '../i18n/ui'
import { ImageLightbox } from './ImageLightbox'

export type GallerySlide = {
  src: string
  caption: string
}

type Props = {
  slides: GallerySlide[]
  title: string
  closingNote?: string
}

export function ProjectGalleryCarousel({ slides, title, closingNote }: Props) {
  const { locale } = useLanguage()
  const t = ui[locale]
  const [index, setIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const total = slides.length
  const safeIndex = ((index % total) + total) % total
  const current = slides[safeIndex]

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => {
        const next = i + delta
        const len = slides.length
        return ((next % len) + len) % len
      })
    },
    [slides.length],
  )

  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(0, slides.length - 1)))
  }, [slides.length])

  useEffect(() => {
    setLightboxOpen(false)
  }, [safeIndex])

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      go(-1)
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      go(1)
    }
  }

  if (!slides.length) return null

  const regionLabel = `${t.carouselLabelPrefix} ${title}`

  return (
    <div
      className="carousel"
      role="region"
      aria-roledescription={t.carouselRoleDescription}
      aria-label={regionLabel}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <div className="carousel__viewport">
        <figure className="carousel__figure">
          <button
            type="button"
            className="carousel__thumbBtn"
            onClick={() => setLightboxOpen(true)}
            aria-label={t.openLightbox}
          >
            <img
              className="carousel__img"
              src={current.src}
              alt=""
              loading={safeIndex === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          </button>
          <figcaption className="carousel__caption">
            <span className="srOnly">{t.carouselSlideSr(safeIndex + 1, total)}</span>
            {current.caption}
          </figcaption>
        </figure>

        <div className="carousel__controls" aria-hidden="true">
          <button type="button" className="carousel__btn" onClick={() => go(-1)} aria-label={t.carouselPrev}>
            ‹
          </button>
          <button type="button" className="carousel__btn" onClick={() => go(1)} aria-label={t.carouselNext}>
            ›
          </button>
        </div>
      </div>

      <div className="carousel__dots" role="tablist" aria-label={t.carouselDotsAria}>
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === safeIndex}
            aria-label={t.carouselDotGoTo(i + 1)}
            className={`carousel__dot ${i === safeIndex ? 'is-active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      <p className="carousel__counter" aria-live="polite">
        {safeIndex + 1} / {total}
      </p>

      {closingNote ? <p className="carousel__closing">{closingNote}</p> : null}

      <ImageLightbox
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        src={current.src}
        alt=""
        caption={current.caption}
        labels={{ close: t.closeLightbox, dialog: t.lightboxDialog }}
      />
    </div>
  )
}
