# Spritztech Frontend Developer Task

## Setup Instructions

1. Clone the repository:
   ```
   git clone <your-repo-url>
   ```
2. Open the project folder in VS Code.
3. Open `index.html` in your browser to preview the site.
4. For SCSS development, compile SCSS files in the `styles/` folder to CSS (see below).

### SCSS Compilation

You can use the following command to compile SCSS to CSS:

```
sass styles/main.scss styles/main.css --watch
```

## Notes & Assumptions

- No frameworks or libraries are used; only HTML5, SCSS, and Vanilla JS.
- All assets should be placed in the `assets/` folder.
- Components (reusable HTML snippets) go in the `components/` folder.
- Scripts are in the `scripts/` folder.
- The design is responsive and matches the provided Figma file as closely as possible.
- Placeholder images/assets should be replaced with final assets as needed.

## Live Preview

- Use VS Code Live Server extension or open `index.html` directly in your browser.

## Git Usage

- Commit messages should be clear and descriptive (e.g., `feat: add header section`, `fix: adjust mobile layout`).

## License

MIT
