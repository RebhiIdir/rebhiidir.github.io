export const profile = {
  name: "Idir REBHI",
  shortName: "Idir",
  title: "AI Research — Generative Models & Steganalysis",
  subtitle:
    "Master's graduate in Intelligent Computer Systems, specialized in the detection of generative steganography in diffusion models. Re-implemented the NS-DSer steganalysis pipeline on Stable Diffusion 2.1 and evaluated it against Message Concealment, mas-GRDH, and Gaussian Shading.",
  subtitleFr:
    "Diplômé d'un Master en Systèmes Informatiques Intelligents, spécialisé dans la détection de stéganographie issue de modèles génératifs. A ré-implémenté le pipeline de stéganalyse NS-DSer sur Stable Diffusion 2.1 et l'a évalué face à Message Concealment, mas-GRDH et Gaussian Shading.",
  location: "Tizi-Ouzou, Algeria",
  locationFr: "Tizi-Ouzou, Algérie",
  email: "idir.rebhi@yahoo.com",
  cvPageUrl: "/cv",
  cvPdfUrl: "/documents/cv-idir-rebhi-en.pdf",
  cvPdfUrlFr: "/documents/cv-idir-rebhi-fr.pdf",
  links: {
    github: "https://github.com/RebhiIdir",
    kaggle: "https://www.kaggle.com/idirrebhi",
    linkedin: "https://www.linkedin.com/in/idir-rebhi",
  },
  researchInterests: [
    "Steganalysis",
    "Diffusion Models",
    "Generative AI",
    "Computer Vision",
    "Deep Learning",
    "Trustworthy AI",
    "Data Science",
  ],
  researchInterestsFr: [
    "Stéganalyse",
    "Modèles de diffusion",
    "IA générative",
    "Vision par ordinateur",
    "Deep Learning",
    "IA de confiance",
    "Data Science",
  ],
  quickFacts: [
    "M2 Intelligent Computer Systems, Univ. Mouloud Mammeri de Tizi-Ouzou (graduated 2026)",
    "Master's thesis on steganalysis of diffusion-generated images, supervised by S. Sadi and T. Hedir, with S. Larbi",
    "NS-DSer baseline reproduced at 99.52% accuracy on Message Concealment (AUC-ROC 1.0)",
    "Full pipeline, notebooks and datasets open on GitHub, Kaggle and Colab",
  ],
  quickFactsFr: [
    "M2 Systèmes Informatiques Intelligents, Univ. Mouloud Mammeri de Tizi-Ouzou (diplômé 2026)",
    "Mémoire de master sur la stéganalyse d'images issues de modèles de diffusion, encadré par S. Sadi et T. Hedir, avec S. Larbi",
    "Baseline NS-DSer reproduite à 99,52% de précision sur Message Concealment (AUC-ROC 1.0)",
    "Pipeline complet, notebooks et jeux de données ouverts sur GitHub, Kaggle et Colab",
  ],
};

export const navRoutes = ["/", "/about", "/research", "/projects", "/cv", "/contact"] as const;
