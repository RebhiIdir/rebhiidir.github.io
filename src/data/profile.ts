export const profile = {
  name: "Idir REBHI",
  shortName: "Idir",
  title: "AI Research — Master's in Intelligent Computer Systems",
  subtitle:
    "Master's graduate in Computer Science, specialized in Intelligent Computer Systems (AI). My Master's thesis focused on detecting steganography from generative models, in which I reproduced and evaluated the NS-DSer method.",
  subtitleFr:
    "Diplômé d'un Master en Informatique, spécialité Systèmes Informatiques Intelligents (IA). Mon mémoire de master a porté sur la détection de stéganographie issue de modèles génératifs, dans le cadre duquel j'ai reproduit et évalué la méthode NS-DSer.",
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
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Generative AI",
    "Steganalysis",
    "Data Science",
  ],
  researchInterestsFr: [
    "Machine Learning",
    "Deep Learning",
    "Vision par ordinateur",
    "IA générative",
    "Stéganalyse",
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
