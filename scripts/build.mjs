import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const root = new URL('../', import.meta.url);
const out = new URL('dist/', root);
await mkdir(new URL('assets/', out), {recursive:true});
await copyFile(new URL('picture.png', root), new URL('assets/picture.png', out));
const assetVersions = Object.fromEntries(await Promise.all(['style.css', 'theme.js', 'fonts.css', 'picture.png'].map(async name => [name, createHash('sha256').update(await readFile(new URL(`assets/${name}`, out))).digest('hex').slice(0, 10)])));
const urlArgument = process.argv.indexOf('--site-url');
const origin = (urlArgument > -1 ? process.argv[urlArgument + 1] : process.env.SITE_URL || 'https://flooreijkelboom.github.io').replace(/\/$/, '');
export const scholar = 'https://scholar.google.com/citations?user=jCWo5lUAAAAJ&hl=en';
const escape = (value) => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const favicon = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#FFFCF0"/><text x="12" y="48" font-family="Georgia,serif" font-size="48" fill="#205EA6">f.</text></svg>');

function shell(page, title, description, content) {
  const path = page === 'main' ? '/' : `/${page}/`;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escape(title)}</title>
  <meta name="description" content="${escape(description)}">
  <meta name="color-scheme" content="light dark">
  <meta name="theme-color" content="#FFFCF0">
  <link rel="canonical" href="${origin}${path}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${escape(title)}">
  <meta property="og:description" content="${escape(description)}">
  <meta property="og:url" content="${origin}${path}">
  <meta name="twitter:card" content="summary">
  <link rel="icon" type="image/svg+xml" href="${favicon}">
  <script src="/assets/theme.js?v=${assetVersions['theme.js']}"></script>
  <link rel="stylesheet" href="/assets/fonts.css?v=${assetVersions['fonts.css']}">
  <link rel="stylesheet" href="/assets/style.css?v=${assetVersions['style.css']}">
</head>
<body class="page-${page}">
  <a class="skip-link" href="#content">Skip to content</a>
  <div class="site-wrap">
    <header class="site-header">
      <div class="header-right">
        <button class="theme-toggle" type="button" aria-label="Switch to dark mode" title="Switch to dark mode" hidden>
          <svg class="moon" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M20.1 14.2A8.5 8.5 0 0 1 9.8 3.9a8.5 8.5 0 1 0 10.3 10.3Z"/></svg>
          <svg class="sun" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="12" cy="12" r="3.5"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
        </button>
      </div>
    </header>
    <main id="content" tabindex="-1">${content}</main>
    <footer class="site-footer">${page === 'main' ? '' : '<span>Amsterdam, the Netherlands</span>'}<span>© ${new Date().getFullYear()} Floor Eijkelboom</span></footer>
  </div>
</body>
</html>\n`;
}

const home = `<section class="home-intro" aria-labelledby="name">
  <div class="home-copy">
    <p class="eyebrow">Generative &amp; Foundation Models</p>
    <h1 id="name">Floor Eijkelboom</h1>
    <p class="bio">I’m doing my PhD at the University of Amsterdam with <a href="https://jwvdm.github.io/">Jan-Willem van de Meent</a> and <a href="https://amlab.science.uva.nl/people/MaxWelling/">Max Welling</a>, working on generative modeling. My work includes variational flow matching, which extends flow matching to discrete data such as text and molecules. That line of work has since found its way into flow-based language and reasoning models. I also spent time at <a href="https://www.cusp.ai/">CuspAI</a>, working on joint models of text and materials.</p>
    <p class="bio">Outside of work, I’m usually listening to R&amp;B, trying new recipes and restaurants, catching a film, or obsessing over perfume.</p>
    <ul class="profile-links" aria-label="Publications">
      <li><a href="${scholar}">Google Scholar</a></li>
    </ul>
  </div>
  <figure class="portrait">
    <div class="portrait-frame">
      <img src="/assets/picture.png?v=${assetVersions['picture.png']}" width="1254" height="1254" alt="Floor Eijkelboom outdoors in a mountainous landscape" fetchpriority="high">
    </div>
    <figcaption lang="id">di Gunung Bromo <span aria-hidden="true">☀︎</span></figcaption>
  </figure>
</section>`;

await mkdir(out, {recursive:true});
await writeFile(new URL('index.html', out), shell('main', 'Floor Eijkelboom', 'PhD researcher at the University of Amsterdam, working on generative modeling and variational flow matching.', home));

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${['/'].map(path=>`<url><loc>${origin}${path}</loc></url>`).join('')}</urlset>\n`;
await writeFile(new URL('sitemap.xml',out),sitemap);
await writeFile(new URL('robots.txt',out),`User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
await writeFile(new URL('.nojekyll',out),'');
await writeFile(new URL('404.html',out),shell('not-found','Page not found — Floor Eijkelboom','The requested page could not be found.',`<div class="page-heading"><p class="eyebrow">404</p><h1>Page not found.</h1><p class="page-intro">This page may have moved. You can <a href="/">return home</a> or find my publications on <a href="${scholar}">Google Scholar</a>.</p></div>`));
console.log(`Static pages written to ${fileURLToPath(out)}`);
