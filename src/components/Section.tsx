import type { ReactNode } from 'react'

type Props = {
  id: string
  eyebrow?: string
  title: string
  children: ReactNode
}

export function Section({ id, eyebrow, title, children }: Props) {
  return (
    <section id={id} className="section">
      <div className="section__head">
        {eyebrow ? <p className="section__eyebrow">{eyebrow}</p> : null}
        <h2 className="section__title">{title}</h2>
      </div>
      <div className="section__body">{children}</div>
    </section>
  )
}

