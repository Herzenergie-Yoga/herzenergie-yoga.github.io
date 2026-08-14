# Herzenergie Yoga

Website für Herzenergie Yoga – Ninja Seidel, Yoga in Georgsmarienhütte.

Deployed auf GitHub Pages: [ninjaseidel.de](https://ninjaseidel.de) / [herzenergie-yoga.github.io](https://herzenergie-yoga.github.io)

## 🛠️ Technik

- [Astro](https://astro.build) – Static Site Generator
- [Tailwind CSS v4](https://tailwindcss.com) – Utility-first CSS framework
- [GitHub Pages](https://pages.github.com) – Hosting via GitHub Actions
- [Gemini CLI GitHub Action](https://github.com/google-github-actions/run-gemini-cli) – KI-gestützte Code-Reviews, Issue-Triage und Assistenz

## 💻 Entwicklung

```bash
npm run dev       # Dev-Server auf localhost:4321
npm run build     # Build nach ./dist/
npm run preview   # Produktions-Build lokal vorschauen
```

## 🤖 Gemini CLI GitHub Action

Dieses Repository ist mit der offiziellen [`google-github-actions/run-gemini-cli`](https://github.com/google-github-actions/run-gemini-cli) GitHub Action ausgestattet.

### 🔑 Einmalige Einrichtung

1. Erstelle einen API-Schlüssel in [Google AI Studio](https://aistudio.google.com/).
2. Gehe in GitHub zu deinem Repository: **Settings > Secrets and variables > Actions**.
3. Klicke auf **New repository secret**:
   - **Name**: `GEMINI_API_KEY`
   - **Secret**: Dein erstellter Google Gemini API-Schlüssel
4. Stelle sicher, dass unter **Settings > Actions > General > Workflow permissions** die Option **Read and write permissions** aktiviert ist.

### ⚡ Verfügbare Funktionen & Befehle

| Auslöser / Befehl | Beschreibung |
|---|---|
| **Neuer Pull Request** | Automatisches Code-Review für neu geöffnete PRs |
| `@gemini-cli /review` | Manuelles Code-Review anfordern (in PR-Kommentaren) |
| `@gemini-cli /review <fokus>` | Review mit spezifischem Fokus (z.B. `@gemini-cli /review focus on performance`) |
| **Neues Issue** | Automatische Analyse und Label-Zuweisung |
| `@gemini-cli /triage` | Manuelle Triage eines Issues auslösen |
| `@gemini-cli <frage>` | Interaktiver KI-Assistent für Fragen, Code-Vorschläge oder Refactorings |
| `@gemini-cli /approve` | Plan-Ausführung und automatische PR-Erstellung |

Projektrichtlinien und Architektur-Kontext für Gemini befinden sich in [`GEMINI.md`](./GEMINI.md).
