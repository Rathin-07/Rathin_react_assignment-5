# Dev Stack — React + TypeScript + Vite

A responsive developer technology directory with searchable/filterable cards, a personal stack sidebar, React-Toastify notifications, and a local JSON data source.

## Run locally

1. Install [Node.js](https://nodejs.org/) (LTS recommended).
2. Open this folder in VS Code.
3. Open the terminal in the project folder and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL Vite prints, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
dev-stack/
├── public/
│   └── data/technologies.json  # All technology data lives here
├── src/
│   ├── App.tsx                 # UI, JSON loading, filters, stack logic
│   ├── main.tsx                # React entry point
│   └── styles.css              # Responsive design and shared theme
├── index.html
└── package.json
```

## Requirements covered

- Sticky desktop navbar and compact mobile navigation menu
- Hero/banner with a shared orange → pink → violet gradient
- 15 technologies loaded asynchronously from `public/data/technologies.json`
- Responsive technology cards, search, and category filters
- Stack add/remove/remove-all; duplicate protection; added buttons are disabled
- React-Toastify notifications for add, duplicate, remove, and remove-all
- Loading spinner and empty/no-results states
- Footer with Product, Company, Legal, social, Privacy, and Terms links

### Theme

Change `--brand-gradient` near the top of `src/styles.css` to retheme the brand name, hero highlight, and primary buttons together.

### Notes

Technology icons and Google Fonts load from external URLs, so an internet connection helps display them. The app itself and its JSON data run locally.
