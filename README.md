# Portfolio — Tonyo Callimoutou

Portfolio personnel développé en Angular, déployé automatiquement sur GitHub Pages via GitHub Actions.

## Stack

- **Framework** — Angular 17 (standalone components, signals)
- **Styles** — SCSS
- **Contact** — Formspree
- **CI/CD** — GitHub Actions
- **Hébergement** — GitHub Pages

## Architecture

```
    ├──portfolio/
    │   └── src/
    │       ├── app/
    │       │   ├── core/models/          # Interfaces TypeScript
    │       │   ├── features/             # Composants par section
    │       │   │   ├── navbar/
    │       │   │   ├── hero/
    │       │   │   ├── skills/
    │       │   │   ├── experience/
    │       │   │   ├── projects/
    │       │   │   └── contact/
    │       │   └── shared/services/      # ScrollSpy, Typewriter, FadeIn, Email
    │       ├── assets/data/
    │       │   └── portfolio.data.ts     # ← toutes les données ici
    │       └── styles/
    │           └── global.scss
    └── .github/workflows/
        └── main.yml
```

## Développement local

```bash
# Installer les dépendances
npm install

# Lancer en local
npm start
# → http://localhost:4200
```

## Déploiement

Le déploiement est entièrement automatisé.

```
push sur main
      │
      ▼
GitHub Actions (main.yml)
  → npm run build:prod
  → génère les fichiers statiques dans dist/
  → pousse le build sur la branche prod
      │
      ▼
GitHub Pages
  → expose la branche prod comme site statique
  → https://tonyocallimoutou.github.io/portfolio
```