# Idir REBHI - Research Portfolio

Ce dossier contient ton site personnel academique. Il est construit avec Astro, Tailwind CSS, Markdown et GitHub Pages.

## 1. Lancer le site sur ton PC

Installe Node.js LTS si ce n'est pas deja fait : https://nodejs.org/

Ensuite, ouvre un terminal dans ce dossier :

```bash
cd portfolio
npm install
npm run dev
```

Astro affichera une adresse du type :

```text
http://localhost:4321/
```

Ouvre cette adresse dans ton navigateur.

Important : apres `npm install`, un fichier `package-lock.json` sera cree. Garde-le et envoie-le aussi sur GitHub. GitHub Pages s'en servira pour reconstruire le site correctement.

## 2. Les fichiers que tu vas modifier le plus souvent

### Ton identite generale

Fichier :

```text
src/data/profile.ts
```

C'est ici que tu changes :

- ton nom ;
- ton titre ;
- ton email ;
- tes liens GitHub, Kaggle, LinkedIn ;
- tes domaines de recherche ;
- les phrases courtes de presentation.

### Ajouter ou modifier une page de recherche

Dossier :

```text
src/content/research/
```

Chaque fichier Markdown devient automatiquement une page.

Exemple :

```text
src/content/research/generative-steganography.md
```

Pour ajouter une nouvelle recherche, copie ce fichier, renomme-le, puis modifie le contenu.

### Ajouter ou modifier un projet

Dossier :

```text
src/content/projects/
```

Chaque fichier Markdown devient automatiquement une page projet.

Exemple :

```text
src/content/projects/rest-api.md
```

Pour ajouter un projet, copie un fichier existant, change le titre, les technologies, le resume et le texte.

### Ajouter ton CV ou ton memoire en PDF

Dossier :

```text
public/documents/
```

Mets tes PDF ici. Exemple :

```text
public/documents/idir-rebhi-cv.pdf
public/documents/master-thesis.pdf
public/documents/master-presentation.pdf
```

Ensuite, mets a jour les liens dans :

```text
src/data/profile.ts
src/content/research/generative-steganography.md
```

Dans `src/data/profile.ts`, mets par exemple :

```ts
cvPdfUrl: "/documents/idir-rebhi-cv.pdf",
```

Dans `src/content/research/generative-steganography.md`, tu peux ajouter :

```yaml
links:
  - label: "GitHub"
    url: "https://github.com/idirrebhi"
  - label: "Thesis PDF"
    url: "/documents/master-thesis.pdf"
  - label: "Slides"
    url: "/documents/master-presentation.pdf"
```

## 3. Structure du site

```text
src/
  components/       Petits blocs reutilisables
  content/
    research/       Pages de recherche en Markdown
    projects/       Pages de projets en Markdown
  data/
    profile.ts      Ton profil central
  layouts/
    BaseLayout.astro
  pages/
    index.astro     Accueil
    about.astro     A propos
    research.astro  Liste des recherches
    projects.astro  Liste des projets
    cv.astro        CV
    contact.astro   Contact
  styles/
    global.css      Style global + Tailwind
```

## 4. Publier gratuitement sur GitHub Pages

Le plus simple pour un site personnel :

1. Cree un depot GitHub nomme exactement `idirrebhi.github.io`.
2. Mets le contenu du dossier `portfolio` dans ce depot.
3. Va dans `Settings` puis `Pages`.
4. Choisis `GitHub Actions`.
5. Envoie ton code sur la branche `main`.

GitHub va construire le site automatiquement.

Si ton nom d'utilisateur GitHub n'est pas `idirrebhi`, change aussi la ligne `site` dans `astro.config.mjs`.

## 5. Commandes utiles

Lancer le site en local :

```bash
npm run dev
```

Verifier que le site compile :

```bash
npm run build
```

Voir la version compilee :

```bash
npm run preview
```

## 6. Regle d'or

Ton site doit aider un professeur a comprendre en moins de 30 secondes :

- qui tu es ;
- ce que tu recherches ;
- ce que tu as deja construit ;
- ou trouver ton CV ;
- ou trouver ton code ;
- comment te contacter.
