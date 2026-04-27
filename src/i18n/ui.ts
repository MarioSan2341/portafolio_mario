import type { Locale } from '../context/LanguageContext'

export const ui: Record<
  Locale,
  {
    skipToContent: string
    brandHome: string
    navSections: string
    navInicio: string
    navSobre: string
    navProyectos: string
    navContacto: string
    navLang: string
    langEs: string
    langEn: string
    langEsTitle: string
    langEnTitle: string
    headerContact: string
    heroViewProjects: string
    downloadCv: string
    profilePhotoAria: string
    sectionAboutEyebrow: string
    sectionAboutTitle: string
    sectionSkillsTitle: string
    sectionSkillsAria: string
    sectionSocialsAria: string
    sectionProjectsEyebrow: string
    sectionProjectsTitle: string
    sectionContactEyebrow: string
    sectionContactTitle: string
    contactIntro: string
    contactEmail: string
    contactWhatsapp: string
    contactNote: string
    footerMadeWith: string
    footerSocialsAria: string
    badgeConfidential: string
    techAria: string
    linksAria: string
    carouselRoleDescription: string
    carouselLabelPrefix: string
    carouselPrev: string
    carouselNext: string
    carouselDotsAria: string
    carouselDotGoTo: (n: number) => string
    carouselSlideSr: (current: number, total: number) => string
  }
> = {
  es: {
    skipToContent: 'Saltar al contenido',
    brandHome: 'Ir al inicio',
    navSections: 'Secciones',
    navInicio: 'Inicio',
    navSobre: 'Sobre mí',
    navProyectos: 'Proyectos',
    navContacto: 'Contacto',
    navLang: 'Idioma',
    langEs: 'ES',
    langEn: 'EN',
    langEsTitle: 'Español',
    langEnTitle: 'Inglés',
    headerContact: 'Contactar',
    heroViewProjects: 'Ver proyectos',
    downloadCv: 'Descargar CV (PDF)',
    profilePhotoAria: 'Foto de perfil',
    sectionAboutEyebrow: 'Perfil',
    sectionAboutTitle: 'Sobre mí',
    sectionSkillsTitle: 'Habilidades',
    sectionSkillsAria: 'Habilidades',
    sectionSocialsAria: 'Redes',
    sectionProjectsEyebrow: 'Selección',
    sectionProjectsTitle: 'Proyectos',
    sectionContactEyebrow: 'Hablemos',
    sectionContactTitle: 'Contacto',
    contactIntro:
      '¿Quieres que te comparta más detalles (alcance, arquitectura, decisiones técnicas)? Escríbeme y armamos una llamada.',
    contactEmail: 'Enviar correo',
    contactWhatsapp: 'WhatsApp',
    contactNote: 'Respondo normalmente en 24–48 horas.',
    footerMadeWith: 'Hecho con React.',
    footerSocialsAria: 'Redes',
    badgeConfidential: 'Confidencial',
    techAria: 'Tecnologías',
    linksAria: 'Enlaces',
    carouselRoleDescription: 'carrusel',
    carouselLabelPrefix: 'Capturas:',
    carouselPrev: 'Imagen anterior',
    carouselNext: 'Imagen siguiente',
    carouselDotsAria: 'Seleccionar captura',
    carouselDotGoTo: (n) => `Ver captura ${n}`,
    carouselSlideSr: (current, total) => `Diapositiva ${current} de ${total}. `,
  },
  en: {
    skipToContent: 'Skip to content',
    brandHome: 'Go to home',
    navSections: 'Sections',
    navInicio: 'Home',
    navSobre: 'About',
    navProyectos: 'Projects',
    navContacto: 'Contact',
    navLang: 'Language',
    langEs: 'ES',
    langEn: 'EN',
    langEsTitle: 'Spanish',
    langEnTitle: 'English',
    headerContact: 'Contact',
    heroViewProjects: 'View projects',
    downloadCv: 'Download résumé (PDF)',
    profilePhotoAria: 'Profile photo',
    sectionAboutEyebrow: 'Profile',
    sectionAboutTitle: 'About me',
    sectionSkillsTitle: 'Skills',
    sectionSkillsAria: 'Skills',
    sectionSocialsAria: 'Social links',
    sectionProjectsEyebrow: 'Selected work',
    sectionProjectsTitle: 'Projects',
    sectionContactEyebrow: 'Let’s talk',
    sectionContactTitle: 'Contact',
    contactIntro:
      'Want more detail (scope, architecture, technical decisions)? Email me and we can schedule a call.',
    contactEmail: 'Send email',
    contactWhatsapp: 'WhatsApp',
    contactNote: 'I usually reply within 24–48 hours.',
    footerMadeWith: 'Built with React.',
    footerSocialsAria: 'Social links',
    badgeConfidential: 'Confidential',
    techAria: 'Technologies',
    linksAria: 'Links',
    carouselRoleDescription: 'carousel',
    carouselLabelPrefix: 'Screenshots:',
    carouselPrev: 'Previous image',
    carouselNext: 'Next image',
    carouselDotsAria: 'Select screenshot',
    carouselDotGoTo: (n) => `View screenshot ${n}`,
    carouselSlideSr: (current, total) => `Slide ${current} of ${total}. `,
  },
}
