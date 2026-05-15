# portfolio-frontend

Personal portfolio site built with React and Vite. Displays projects, a bio, and a contact section.

Live at [lopezberg.dev](https://lopezberg.dev)

## Stack

- React + Vite
- React Router
- CSS (component-scoped)
- JetBrains Mono / Atkinson Hyperlegible (Google Fonts)

## Deployment

Triggered automatically on push to `main`.

1. GitHub Actions authenticates to AWS via OIDC (no stored credentials)
2. Builds the project with `npm run build`
3. Syncs `dist/` to S3 (`lopezberg-portfolio-deploy`)
4. Deploys to EC2 via SSM Run Command — no SSH required

Manual trigger available via `workflow_dispatch`.

## Structure

```
src/
├── components/     # Hero, Projects, Contact, ThemeToggle
├── pages/          # Blog
├── data/           # projects.json
├── App.jsx
└── App.css
```
