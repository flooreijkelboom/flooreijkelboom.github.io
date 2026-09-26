# Floor Eijkelboom

Personal website at [flooreijkelboom.github.io](https://flooreijkelboom.github.io/).

## Edit and preview

The site uses a small Node.js build script and requires no npm dependencies.
Use Node.js 22 or later.

- Edit the homepage content in `scripts/build.mjs`.
- Edit the styling in `dist/assets/style.css`, fonts in `dist/assets/fonts.css`, and theme behavior in `dist/assets/theme.js`.
- Replace `picture.png` to update the portrait.

The CSS, JavaScript, and fonts in `dist/assets/` are source files; keep them when rebuilding.

```sh
node scripts/build.mjs
python3 -m http.server 4173 --directory dist
```

Open <http://localhost:4173>. The build generates the homepage, a 404 page, sitemap, and robots file in `dist/`, and copies the portrait into its assets.

## Deployment

Every push to `main` builds the site and deploys `dist/` through GitHub Actions to GitHub Pages. The workflow can also be run manually from the Actions tab. GitHub Pages should use **GitHub Actions** as its deployment source.

The build defaults to `https://flooreijkelboom.github.io`; `SITE_URL` or `--site-url` can override the canonical origin.

## Credits

The design uses the [Flexoki palette](https://stephango.com/flexoki), DM Sans, and Newsreader. Their license notices are included with the assets. The existing MIT notice in `LICENSE.md` is retained from the previous site template; the repository history preserves that earlier site.
