import type { Locale } from '../context/LanguageContext'

export type ProjectGallerySlide = {
  src: string
  caption: string
}

export type PortfolioProject = {
  id: string
  title: string
  org?: string
  period?: string
  summary: string
  highlights: string[]
  stack: string[]
  links?: { label: string; href: string }[]
  confidentiality?: 'public' | 'private'
  gallery?: ProjectGallerySlide[]
  galleryClosing?: string
}

export type PortfolioData = {
  avatar: { src: string; alt: string }
  name: string
  role: string
  location?: string
  email: string
  phone?: string
  /** Ruta bajo `public/`, p. ej. `/MarioSanchezCV.pdf` */
  cvPdfHref: string
  /** Nombre sugerido al descargar (atributo `download`) */
  cvDownloadName: string
  tagline: string
  about: string[]
  skills: string[]
  socials: { label: string; href: string }[]
  projects: PortfolioProject[]
}

const skills: PortfolioData['skills'] = [
  'React',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'NestJS',
  'Laravel',
  'PHP',
  'PostgreSQL',
  'MySQL',
  'SQL',
  'Python',
  'Kotlin',
  'Git',
]

const socials: PortfolioData['socials'] = [
  { label: 'GitHub', href: 'https://github.com/MarioSan2341' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mario-alfonso-s%C3%A1nchez-gonz%C3%A1lez-213055318',
  },
]

const portfolioEs: PortfolioData = {
  avatar: { src: '/fotoperfil2.jpeg', alt: 'Foto de Mario Sánchez' },
  name: 'Mario Sánchez',
  role: 'Full‑Stack Developer',
  location: 'México',
  email: 'mario.sanchez.22s@utzmg.edu.mx',
  phone: '+52 3320431798',
  cvPdfHref: '/MarioSanchezCV.pdf',
  cvDownloadName: 'Mario-Sanchez-CV.pdf',
  tagline:
    'Desarrollo aplicaciones web full‑stack con foco en resultados: usabilidad, rendimiento y código mantenible.',
  about: [
    'Soy Ingeniero en Desarrollo y Gestión de Software con 2 años de experiencia en desarrollo Full Stack. He trabajado principalmente en backend y frontend, construyendo soluciones orientadas a usuarios finales y equipos operativos.',
    'Me gusta convertir ideas en productos: analizo el problema, propongo una solución simple y la implemento con buenas prácticas para que sea escalable y fácil de mantener.',
    'He desarrollado módulos como: sistemas de usuarios, reportes, gráficas con datos reales, y catálogos, cuidando la experiencia de uso y la calidad del código.',
  ],
  skills,
  socials,
  projects: [
    {
      id: 'sistema-gob-1',
      title: 'Sistema de Control de Edificación ALCH',
      org: 'H. Ayuntamiento de San Pedro Tlaquepaque / Obras Públicas',
      period: '2026',
      summary:
        'Sistema modernizado y automatizado para la gestión de Licencias de Obras Públicas. Rol: Desarrollador Full Stack.',
      highlights: [
        'Organicé e implementé la migración del histórico MySQL → PostgreSQL (~800,000 registros), priorizando integridad de datos y una transición controlada para el área operativa.',
        'Diseñé y programé automatizaciones en el registro y seguimiento de obras públicas, reduciendo pasos manuales y retrabajo frente al flujo anterior.',
        'Integré en front y back la exportación a PDF, Excel y Word (licencias, reportes y documentos), alineando reglas de negocio con vistas previas donde el trámite lo requería.',
      ],
      stack: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'MySQL'],
      confidentiality: 'private',
      gallery: [
        {
          src: '/Aimagen1.png',
          caption:
            'Login del sistema: usuarios ya registrados; no se permite crear cuenta salvo que un administrador cree el usuario.',
        },
        {
          src: '/Aimagen2.png',
          caption:
            'Menú del sistema: acceso a los distintos módulos y datos del usuario que inició sesión.',
        },
        {
          src: '/Aimagen3.png',
          caption:
            'Catálogos, destacando el de directores de obra (obras públicas): alta, consulta, filtros, exportación a Word, generación de PDF con vista previa y edición de datos.',
        },
        {
          src: '/Aimagen4.png',
          caption: 'Vista del PDF generado para el director de obra.',
        },
        {
          src: '/Aimagen5.png',
          caption:
            'Módulo de usuarios: registro (solo administrador), consulta, actualización y baja de usuarios.',
        },
        {
          src: '/Aimagen6.png',
          caption:
            'Módulo de obras: obras públicas de Tlaquepaque; búsqueda por consecutivo y filtros, edición, duplicar datos para nueva obra e impresión de datos.',
        },
        {
          src: '/Aimagen7.png',
          caption:
            'Registro de obra en 4 pasos — paso 1: datos básicos de la obra.',
        },
        {
          src: '/AImagen8.png',
          caption:
            'Conceptos del catálogo (relación padre–hijo, precios, observaciones, etc.): se agregan a la obra y el importe se calcula según cantidad y costo.',
        },
        {
          src: '/Aimagen9.png',
          caption:
            'Documentos e información adicional: archivos, imágenes, director de obra, recibo de pago y generación de la pre-forma.',
        },
        {
          src: '/AImagen10.png',
          caption:
            'Resumen de lo capturado en pasos anteriores: descarga de PDF de licencias para firmas y trámites de pago.',
        },
        {
          src: '/Aimagen11.png',
          caption:
            'Módulo de reportes: información operativa para obras públicas y generación de reportes.',
        },
        {
          src: '/Aimagen12.png',
          caption:
            'Panel de administración: auditoría de cambios por usuario y alertas antes de imprimir PDF si hay inconsistencias en la obra.',
        },
      ],
      galleryClosing:
        'Gracias por ver mi proyecto del Sistema de Edificación ALCH. (Los datos mostrados no corresponden a Obras Públicas de Tlaquepaque.)',
    },
    {
      id: 'sistema-prehospitalario-tlajomulco',
      title: 'Sistema Integral de Administración Prehospitalaria',
      org: 'H. Ayuntamiento de Tlajomulco de Zúñiga / Cruz Verde',
      period: '2025',
      summary:
        'Desarrollo de sitio web y aplicación móvil para el registro de insumos y equipo de ambulancias, el estado de las unidades y la información de pacientes en contexto prehospitalario.',
      highlights: [
        'Participé en sustituir hojas físicas por captura digital en app y web, afinando flujos para paramédicos y el panel de administración.',
        'Implementé pantallas y reglas que acortan el tiempo de registro de equipos e insumos frente al proceso manual previo.',
        'Aporté en el modelo de datos y consultas para que la información persista de forma confiable y sea más fácil de localizar y auditar.',
      ],
      stack: ['React', 'TypeScript', 'Expo', 'Tailwind CSS', 'NestJS', 'PostgreSQL'],
      confidentiality: 'private',
      gallery: [
        {
          src: '/Bimagen1.png',
          caption:
            'Login de la app para paramédicos: acceso con usuarios ya registrados.',
        },
        {
          src: '/Bimagen2.png',
          caption:
            'Registro de base, unidad y operador que acompaña; nombre y fecha se adjuntan automáticamente.',
        },
        {
          src: '/Bimagen3.png',
          caption:
            'Registros de equipo e insumos: comentarios e imágenes cuando hay fallas o incidencias en el material.',
        },
        {
          src: '/Bimagen4.png',
          caption:
            'Sitio web para administración: recepción de los formularios que envían los paramédicos para su verificación (antes todo en hojas físicas).',
        },
      ],
      galleryClosing:
        'Gracias por ver este proyecto. Las imágenes mostradas fueron las únicas autorizadas por el H. Ayuntamiento de Tlajomulco de Zúñiga; los datos visibles son ficticios.',
    },
  ],
}

const portfolioEn: PortfolioData = {
  avatar: { src: '/fotoperfil2.jpeg', alt: 'Photo of Mario Sánchez' },
  name: 'Mario Sánchez',
  role: 'Full‑Stack Developer',
  location: 'Mexico',
  email: 'mario.sanchez.22s@utzmg.edu.mx',
  phone: '+52 3320431798',
  cvPdfHref: '/MarioSanchezCV.pdf',
  cvDownloadName: 'Mario-Sanchez-CV.pdf',
  tagline:
    'I build full‑stack web applications focused on outcomes: usability, performance, and maintainable code.',
  about: [
    'Software Development and Management Engineer with 2 years of full‑stack experience. I have worked across backend and frontend, delivering solutions for end users and operational teams.',
    'I like turning ideas into products: I analyze the problem, propose a simple approach, and implement it with solid practices so it scales and stays easy to maintain.',
    'I have built modules such as user management, reporting, charts with real data, and catalogs—prioritizing UX and code quality.',
  ],
  skills,
  socials,
  projects: [
    {
      id: 'sistema-gob-1',
      title: 'ALCH Building Control System',
      org: 'Municipality of San Pedro Tlaquepaque / Public Works',
      period: '2026',
      summary:
        'Modernized, automated system for managing public‑works building permits. Role: Full‑Stack Developer.',
      highlights: [
        'I planned and delivered the historic MySQL → PostgreSQL migration (~800,000 rows), focusing on data integrity and a safe rollout for operations.',
        'I designed and built automation across public‑works registration and tracking, cutting manual steps and rework compared to the legacy process.',
        'I implemented end‑to‑end PDF, Excel, and Word exports (permits, reports, and related documents), pairing business rules with previews where the workflow required them.',
      ],
      stack: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'MySQL'],
      confidentiality: 'private',
      gallery: [
        {
          src: '/Aimagen1.png',
          caption:
            'System login: preregistered users; new accounts are only created by an administrator.',
        },
        {
          src: '/Aimagen2.png',
          caption:
            'Main menu: navigation across modules and session information for the signed‑in user.',
        },
        {
          src: '/Aimagen3.png',
          caption:
            'Catalogs, highlighting construction managers (public works): create, view, filters, Word export, PDF generation with preview, and edit.',
        },
        {
          src: '/Aimagen4.png',
          caption: 'Generated PDF view for a construction manager record.',
        },
        {
          src: '/Aimagen5.png',
          caption:
            'Users module: create (admin only), view, update, and deactivate users.',
        },
        {
          src: '/Aimagen6.png',
          caption:
            'Works module: Tlaquepaque public works; search by file number and filters, edit, duplicate data to start a new work, and print details.',
        },
        {
          src: '/Aimagen7.png',
          caption: 'Four‑step work registration — step 1: basic work information.',
        },
        {
          src: '/AImagen8.png',
          caption:
            'Catalog concepts (parent/child, prices, notes, etc.): added to the work; totals computed from quantity and unit cost.',
        },
        {
          src: '/Aimagen9.png',
          caption:
            'Documents and extras: files, images, construction manager, payment receipt, and pre‑form generation.',
        },
        {
          src: '/AImagen10.png',
          caption:
            'Summary of captured data: download permit PDFs for signatures and payment workflows.',
        },
        {
          src: '/Aimagen11.png',
          caption:
            'Reporting module: operational data for public works and report generation.',
        },
        {
          src: '/Aimagen12.png',
          caption:
            'Admin panel: per‑user change history and warnings before printing PDFs when data looks inconsistent.',
        },
      ],
      galleryClosing:
        'Thanks for viewing my ALCH Building Control System project. (Displayed data is not from Tlaquepaque Public Works.)',
    },
    {
      id: 'sistema-prehospitalario-tlajomulco',
      title: 'Integrated Prehospital Administration System',
      org: 'Municipality of Tlajomulco de Zúñiga / Cruz Verde',
      period: '2025',
      summary:
        'Web platform and mobile app to register ambulance supplies and equipment, unit status, and patient information in a prehospital context.',
      highlights: [
        'I contributed to replacing paper forms with digital capture on mobile and web, tuning flows for paramedics and the admin dashboard.',
        'I shipped screens and validation rules that shorten registration time for equipment and supplies versus the previous manual process.',
        'I helped shape the data model and queries so information stays reliable, searchable, and auditable.',
      ],
      stack: ['React', 'TypeScript', 'Expo', 'Tailwind CSS', 'NestJS', 'PostgreSQL'],
      confidentiality: 'private',
      gallery: [
        {
          src: '/Bimagen1.png',
          caption: 'App login for paramedics with preregistered accounts.',
        },
        {
          src: '/Bimagen2.png',
          caption:
            'Record base, unit, and accompanying operator; name and date attached automatically.',
        },
        {
          src: '/Bimagen3.png',
          caption:
            'Equipment and supply entries: comments and photos when something is failing or damaged.',
        },
        {
          src: '/Bimagen4.png',
          caption:
            'Admin web: incoming forms sent by paramedics for verification (previously on paper).',
        },
      ],
      galleryClosing:
        'Thanks for viewing this project. The images shown were the only ones authorized by the Municipality of Tlajomulco de Zúñiga; visible data is fictional.',
    },
  ],
}

export const portfolioByLocale: Record<Locale, PortfolioData> = {
  es: portfolioEs,
  en: portfolioEn,
}
