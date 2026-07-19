export const languages = {
  en: "English",
  fr: "Français",
};

export const defaultLang = "en";

export const ui = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      research: "Research",
      projects: "Projects",
      cv: "CV",
      contact: "Contact",
    },
    footer: {
      tagline: "Research portfolio.",
      email: "Email",
    },
    home: {
      highlights: "Research Highlights",
      viewProject: "View →",
      latestProjects: "Latest Projects",
      researchInterests: "Research Interests",
      viewCv: "View CV",
    },
    about: {
      eyebrow: "About",
      title: "A research-oriented AI profile",
      description:
        "Master's graduate in Computer Science (Intelligent Computer Systems), whose Master's thesis focused on detecting steganography from generative models.",
      atAGlance: "At a glance",
      name: "Name",
      location: "Location",
      focus: "Focus",
      focusValue: "Machine learning, deep learning, computer vision, generative AI",
      languages: "Languages",
      researchInterests: "Research interests",
    },
    cv: {
      eyebrow: "CV",
      title: "Curriculum Vitae",
      description:
        "Master's graduate in Intelligent Computer Systems — machine learning, computer vision, and steganalysis of generative AI.",
      download: "Download PDF",
      coreSkills: "Core skills",
      languages: "Languages",
      certifications: "Certifications",
      education: "Education",
      research: "Research",
      technicalExperience: "Technical experience",
      publications: "Publications",
    },
    research: {
      eyebrow: "Research",
      title: "Research work",
      description: "Research pages are written in Markdown so they can evolve into full publication pages over time.",
      readMore: "Read more →",
      back: "← Research",
      collaborators: "With",
    },
    projects: {
      eyebrow: "Projects",
      title: "Selected projects",
      description: "Each project page explains the goal, technologies, implementation choices, and results.",
      viewProject: "View project →",
      back: "← Projects",
      collaborators: "With",
      group: "Group project",
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact and academic links",
      description: "Use this page for direct contact and profiles that show code, projects, datasets, or public work.",
      emailLabel: "Email",
      emailTitle: "Research contact",
      emailBody: "For research discussions, internships, thesis supervision, or collaboration opportunities.",
      profiles: "Profiles",
    },
    theme: {
      toggle: "Toggle dark mode",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      research: "Recherche",
      projects: "Projets",
      cv: "CV",
      contact: "Contact",
    },
    footer: {
      tagline: "Portfolio de recherche.",
      email: "E-mail",
    },
    home: {
      highlights: "Travaux de recherche",
      viewProject: "Voir →",
      latestProjects: "Derniers projets",
      researchInterests: "Domaines de recherche",
      viewCv: "Voir le CV",
    },
    about: {
      eyebrow: "À propos",
      title: "Un profil orienté recherche en IA",
      description:
        "Diplômé d'un Master en Informatique (Systèmes Informatiques Intelligents), dont le mémoire de master a porté sur la détection de stéganographie issue de modèles génératifs.",
      atAGlance: "En bref",
      name: "Nom",
      location: "Localisation",
      focus: "Domaine",
      focusValue: "Machine learning, deep learning, vision par ordinateur, IA générative",
      languages: "Langues",
      researchInterests: "Domaines de recherche",
    },
    cv: {
      eyebrow: "CV",
      title: "Curriculum Vitae",
      description:
        "Diplômé d'un Master en Systèmes Informatiques Intelligents — machine learning, vision par ordinateur et stéganalyse de l'IA générative.",
      download: "Télécharger le PDF",
      coreSkills: "Compétences clés",
      languages: "Langues",
      certifications: "Certifications",
      education: "Formation",
      research: "Recherche",
      technicalExperience: "Expérience technique",
      publications: "Publications",
    },
    research: {
      eyebrow: "Recherche",
      title: "Travaux de recherche",
      description: "Les pages de recherche sont écrites en Markdown afin de pouvoir évoluer vers de vraies pages de publication.",
      readMore: "Lire la suite →",
      back: "← Recherche",
      collaborators: "Avec",
    },
    projects: {
      eyebrow: "Projets",
      title: "Projets sélectionnés",
      description: "Chaque page de projet détaille l'objectif, les technologies, les choix d'implémentation et les résultats.",
      viewProject: "Voir le projet →",
      back: "← Projets",
      collaborators: "Avec",
      group: "Projet de groupe",
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact et profils académiques",
      description: "Utilisez cette page pour me contacter directement et consulter les profils montrant code, projets, données ou travaux publics.",
      emailLabel: "E-mail",
      emailTitle: "Contact recherche",
      emailBody: "Pour des échanges de recherche, un stage, un encadrement de thèse, ou une collaboration.",
      profiles: "Profils",
    },
    theme: {
      toggle: "Activer le mode sombre",
    },
  },
} as const;

export type Locale = keyof typeof ui;

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split("/");
  if (lang === "fr") return "fr";
  return "en";
}

export function useTranslations(lang: Locale) {
  return ui[lang];
}

export function localizePath(path: string, lang: Locale): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return lang === "fr" ? `/fr${clean === "/" ? "" : clean}` : clean;
}
