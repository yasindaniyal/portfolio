export type PortfolioProject = {
  title: string;
  type: string;
  description: string;
  technologies: string[];
  highlights?: string[];
  live?: string;
  featured?: boolean;
};

export const projects: PortfolioProject[] = [
  {
    title: "TapPakistan — Smart NFC & QR Business Platform",
    type: "Founder-led production platform",
    description:
      "End-to-end platform connecting physical NFC/QR standees with mobile business profiles. Built separate customer, business and admin experiences, secure onboarding, multi-branch management, analytics, order workflows and recurring payment infrastructure.",
    technologies: ["React 19", "TypeScript", "Firebase", "Cloud Functions", "Firestore", "Tailwind CSS", "SafePay"],
    highlights: [
      "Google and email onboarding with role-based routing",
      "Multi-tenant businesses, branches and memberships",
      "Signed webhook payment and subscription workflows",
      "Hardened Firestore and Storage security rules",
    ],
    live: "https://tappakistan.vercel.app/",
    featured: true,
  },

  {
    title: "DuePro",
    type: "Industry — Buzzware Tech",
    description:
      "Legal-tech SaaS platform connecting clients with attorneys through real-time chat, subscriptions, contracts, documents, quotes, professional profiles and role-based access control.",
    technologies: ["CodeIgniter 3", "Firebase", "Stripe", "PHP", "Google Maps", "REST API"],
    live: "https://duepro.com/",
    // featured: true,
  },
  {
    title: "Rokoli",
    type: "Industry — Buzzware Tech",
    description:
      "Medical transportation dispatch system with trip management, live GPS tracking, driver and contractor management, payroll, QuickBooks integration, reporting, audit tracking and push notifications.",
    technologies: ["CodeIgniter 3", "Firebase", "Google Maps", "QuickBooks API", "Figma"],
    live: "https://www.rokoli.com/",
    // featured: true,
  },

  {
    title: "RingSide",
    type: "Industry — Buzzware Tech",
    description:
      "Horse Show Management company that specializes in providing horse shows with Consulting, Management and Secretary services.",
    technologies: ["HTML5", "SCSS", "Bootstrap", "Vanilla JavaScript", "Adobe XD"],
    live: "https://www.ringsideproductionsllc.com/",
    // featured: true,
  },
  {
    title: "NL Constructions",
    type: "Industry — Buzzware Tech",
    description:
      "Construction company website showcasing infrastructure projects, galleries, equipment and PDF documents across responsive layouts.",
    technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Adobe XD"],
    live: "https://msnazirlak.com/",
    // featured: true,
  },
  {
    title: "OpenClub",
    type: "Industry — Buzzware Tech",
    description:
      "Multi-role nightclub and event management platform with Admin, Manager, Host, and Promoter dashboards. Features include event creation, floor map management, guest lists, reservations, analytics, payments, staff management, and Firebase authentication.",
    technologies: ["React.js", "Firebase", "SCSS", "REST API", "Figma"],
  }, {
    title: "NeuralMarket",
    type: "Industry — Buzzware Tech",
    description:
      "AI asset marketplace interface for agents, prompts, datasets and models. Delivered responsive marketplace pages, dynamic content, high-fidelity modals and community forum flows with a lightweight frontend implementation.",
    technologies: ["HTML5", "CSS3", "Vanilla JavaScript"],
  },
  {
    title: "LinkedAthletes",
    type: "Industry — Buzzware Tech",
    description:
      "Athlete-trainer networking platform with authentication, profile management and Firebase-powered data workflows.",
    technologies: ["CodeIgniter 3", "Firebase", "Vanilla JavaScript", "Bootstrap"],
  },
  {
    title: "Property Central",
    type: "Industry — Fokus LLC",
    description:
      "Property listing and management interface with reusable components, Splide.js interactions and scalable SCSS architecture.",
    technologies: ["Webpack", "SCSS", "Splide.js", "JavaScript", "Figma"],
  },
  {
    title: "Local Service",
    type: "Industry — Fokus LLC",
    description:
      "Responsive prototype enabling users to browse and book local services through a clear, mobile-first interface.",
    technologies: ["Webpack", "SCSS", "Bootstrap", "Figma"],
  },
  {
    title: "Arena Hall",
    type: "Industry — Fokus LLC",
    description:
      "Responsive event and venue booking frontend built with a maintainable SCSS and Bootstrap component structure.",
    technologies: ["Webpack", "SCSS", "Bootstrap", "Figma"],
  },
  {
    title: "API Book",
    type: "Internship — Cloud-tek",
    description:
      "React application consuming REST APIs through Axios, with Material UI components and React Router navigation.",
    technologies: ["React.js", "Material UI", "Axios", "React Router"],
  },
  {
    title: "Robo Friends",
    type: "Internship — Cloud-tek",
    description:
      "Interactive React application featuring a searchable list of robot profiles and responsive Tachyons styling.",
    technologies: ["React.js", "Tachyons", "JavaScript"],
  },
];
