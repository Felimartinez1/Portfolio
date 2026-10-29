# Felipe Martínez · Portfolio

Personal site of Felipe Martínez, Data Scientist and Data & AI Engineer: experience, selected work, side projects and certifications.

Live at **[felipemartinezcv.com](https://www.felipemartinezcv.com)**.

## Run it locally

It's a static site with no build step. Serve the folder with any static server, for example:

```bash
python -m http.server 8080
```

Then open http://localhost:8080.

## Where things live

| What | File |
| --- | --- |
| Page structure and copy (about, portfolio cards, expertise, contact) | `index.html` |
| Styles, light/dark theme tokens | `css/style.css` |
| Experience timeline data and modal | `portfolio_scripts/timeline/timeline.js` (`experienceData`) |
| Certifications data and viewer | `portfolio_scripts/certificates/certificates.js` (`certificatesData`) |
| Shared modal + LinkedIn video embeds | `portfolio_scripts/modal/modals.js` |
| Navbar, theme toggle, scroll effects | `portfolio_scripts/{navbar,theme,scroll}/` |
| Images (WebP) | `Images/projects/`, `Images/certificates/` |

### Common updates

- **Changed any CSS or JS?** Bump the `?v=` value on the `<link>` and `<script>` tags in `index.html` (e.g. `?v=20261029` → today's date). The host tells browsers to cache these files for 7 days, so without a new URL returning visitors keep the old version.

- **New job:** add an entry to `experienceData`. The Gantt chart, its colors and the "About" stats (years, roles, countries) update on their own.
- **New certificate:** add an optimized image to `Images/certificates/` and an entry to `certificatesData`. Issuer logos live in `Images/logos/` and are registered in `issuerLogos` (each with a display height tuned so all wordmarks look the same size).
- **New project:** copy a `project-col` block in `index.html`. Add `data-video="<LinkedIn embed URL>"` to the image button to open a demo in the video modal.
- **Featured case study:** the `case-study` block at the top of the Portfolio section (Lena, Lebane's AI reporting agent). The image is the cover of the LinkedIn demo video and opens the post in the video modal.
- **Social preview:** `Images/og-image.png` (1200×630) is what LinkedIn, X and WhatsApp show when the link is shared.

## Contact

[LinkedIn](https://www.linkedin.com/in/felipe-martinez-py/) · [GitHub](https://github.com/Felimartinez1) · felimartinez072@gmail.com
