# Herzenergie Yoga

Website für Herzenergie Yoga – Ninja Seidel, Yoga in Georgsmarienhütte.

Deployed auf GitHub Pages: [ninjaseidel.de](https://ninjaseidel.de) / [herzenergie-yoga.github.io](https://herzenergie-yoga.github.io)

## 🛠️ Technik

- [Astro](https://astro.build) – Static Site Generator
- [Tailwind CSS v4](https://tailwindcss.com) – Utility-first CSS framework
- [GitHub Pages](https://pages.github.com) – Hosting via `gh-pages` Branch
- [Deploy PR Preview](https://github.com/rossjrw/pr-preview-action) – Automatische Live-Vorschau für jeden Pull Request

## 💻 Entwicklung

```bash
npm run dev       # Dev-Server auf localhost:4321
npm run build     # Build nach ./dist/
npm run preview   # Produktions-Build lokal vorschauen
```

## 🚀 GitHub Pages & PR Previews

### ⚙️ GitHub Repository Einstellungen
1. Gehe zu **Settings > Pages**.
2. Wähle als **Source**: **Deploy from a branch**.
3. Wähle Branch **`gh-pages`** und Ordner **`/ (root)`**.
4. Gehe zu **Settings > Actions > General > Workflow permissions** und stelle sicher, dass **Read and write permissions** aktiviert ist.

### 🔍 PR Preview Funktionsweise
- Bei jedem Pull Request baut die GitHub Action `.github/workflows/preview.yml` die Site und deployt eine isolierte Vorschau unter:
  `https://ninjaseidel.de/pr-preview/pr-<Nummer>/`
- Ein Sticky-Kommentar mit direktem Link und QR-Code wird automatisch im Pull Request gepostet.
- Beim Schließen oder Mergen des PRs wird die Vorschau automatisch wieder entfernt.
