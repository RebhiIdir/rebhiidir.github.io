# Idir REBHI - Research Portfolio

Ce dossier contient mon site personnel academique. Il est construit avec Astro, Tailwind CSS, Markdown et GitHub Pages.

## 1. Lancer le site sur PC

Installation de Node.js LTS : https://nodejs.org/

Ensuite, un terminal dans ce dossier :

```bash
cd portfolio
npm install
npm run dev
```

Astro affichera une adresse du type :

```text
http://localhost:4321/
```

Ouvrir l'adresse

Important : apres `npm install`, un fichier `package-lock.json` sera cree. Il faut le garder et l'envoyer aussi sur GitHub. GitHub Pages s'en servira pour reconstruire le site correctement.

## 2. Les fichiers à modifier le plus souvent

### Identite generale

Fichier :

```text
src/data/profile.ts
```

C'est ici que je changes :

- mon nom ;
- mon titre ;
- mon email ;
- mes liens GitHub, Kaggle, LinkedIn ;
- mes domaines de recherche ;
- mes phrases courtes de presentation.

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

Pour ajouter une nouvelle recherche, copie le fichier, le renommer, puis modifier le contenu.

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

Pour ajouter un projet, il faut copier un fichier existant, changer le titre, les technologies, le resume et le texte.

### Ajouter mon CV ou mon memoire en PDF

Dossier :

```text
public/documents/
```

Mets les PDF ici. Exemple :

```text
public/documents/idir-rebhi-cv.pdf
public/documents/master-thesis.pdf
public/documents/master-presentation.pdf
```

Ensuite, mettre a jour les liens dans :

```text
src/data/profile.ts
src/content/research/generative-steganography.md
```

Dans `src/data/profile.ts`, mets par exemple :

```ts
cvPdfUrl: "/documents/idir-rebhi-cv.pdf",
```

Dans `src/content/research/generative-steganography.md`, je peux ajouter :

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
    profile.ts      mon profil central
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
2. Mettre le contenu du dossier `portfolio` dans ce depot.
3. Aller dans `Settings` puis `Pages`.
4. Choisir `GitHub Actions`.
5. Envoi de mon code sur la branche `main`.

GitHub va construire le site automatiquement.

Si mon nom d'utilisateur GitHub n'est pas `idirrebhi`, changer aussi la ligne `site` dans `astro.config.mjs`.

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

Mon site doit aider un professeur a comprendre en moins de 30 secondes :

- qui je suis ;
- ce que je recherches ;
- ce que j'ai deja construit ;
- ou trouver mon CV ;
- ou trouver mon code ;
- comment me contacter.
