# asadikine.github.io

Personal website of Amine Sadikine. Plain HTML, CSS and JavaScript, hosted for free on GitHub Pages. No build step: edit a file, commit, and the site updates within a minute.

## Where to change what

All the content lives in the `data/` folder. You never need to touch the HTML pages or `assets/js/site.js`.

| What you want to change | File |
|---|---|
| Name, introduction, "In short", "What I work on", "Recent highlights", contact, profile links, portrait, analytics | `data/site.js` |
| Projects (text, animation or picture, GitHub links) | `data/projects.js` |
| Papers, thesis, talks and posters, BibTeX | `data/publications.js` |
| Path, funding, certificates, teaching, outreach | `data/about.js` |
| Photos from conferences and events | `data/photos.js` |
| Colours and fonts | `assets/css/style.css` (top of the file) |

Text fields accept simple HTML: `<b>bold</b>`, `<a href="https://...">link</a>`.

## Editing directly on github.com

1. Open the file (for example `data/publications.js`) and click the pencil icon.
2. Edit, then click **Commit changes**.
3. Wait about a minute and reload the site.

Each entry is a block between `{` and `},`. To add one, copy an existing block, paste it where you want it, and change the values. Keep the quotes `"..."` and the comma at the end of each block. If the page turns blank after an edit, a quote or a comma is missing: open the browser console (F12) to see the line, or undo the last commit.

## Common tasks

**Add a publication.** In `data/publications.js`, copy the first block of `papers`, paste it at the top (newest first), and fill in title, authors, venue, `short` (label on the home page), links (`doi`, `arxiv`, `hal`) and the BibTeX between the backticks.

**Update "Recent highlights" (home page).** In `data/site.js`, add a line at the top of `highlights` and remove the oldest, so the list stays at 3 to 5 recent, public items.

**Add a project.** In `data/projects.js`, copy a block. `sortDate` (YYYY-MM) sets the order, newest first. `featured: true` also shows it on the home page. `image` can be an animation in `assets/anim/` or any picture you upload to `assets/img/projects/`. `summary` is always visible; `details` appears when the visitor clicks *Read more*.

**Add photos of an event.** Upload the pictures to a new folder, for example `assets/img/photos/isbi-2023/` (on github.com: *Add file → Upload files*, and type the folder name in the file name box). Resize them to about 1600 px wide first. Then list them in `data/photos.js`; the first photo is the cover. An event without photos stays hidden.

**Change a picture.** Upload the new file with **the same name** over the old one (for example `assets/img/portrait.jpg`). Nothing else to edit.

**Add a step to "How I got here".** In `data/about.js`, add a block at the top of `path`. Only the first `pathVisible` steps are shown; the rest open with *Show earlier steps*.

## Visit statistics (optional)

1. Create a free account at <https://www.goatcounter.com> and choose a code, for example `asadikine`.
2. In `data/site.js`, set `goatcounter: "asadikine"`.
3. Your dashboard is then at `https://asadikine.goatcounter.com`. GoatCounter does not use cookies, so no consent banner is needed.

## Publishing (first time)

1. Create a public repository named exactly **asadikine.github.io**.
2. Upload the content of this folder (keep the hidden `.nojekyll` file).
3. In the repository: *Settings → Pages → Build and deployment → Source: Deploy from a branch*, branch `main`, folder `/ (root)`.
4. The site is live at <https://asadikine.github.io> after a minute or two.

The footer date ("Last updated") is read automatically from the date of your last commit.

## Link preview

When you paste the address in LinkedIn, an email or WhatsApp, the preview uses `assets/img/og-image.jpg` (1200 × 630). If you change your title or portrait, replace that image too. LinkedIn caches previews: use <https://www.linkedin.com/post-inspector/> to refresh it.

## Credits

Euclid image: ESA/Euclid/Euclid Consortium/NASA, image processing by J.-C. Cuillandre (CEA Paris-Saclay), G. Anselmi, CC BY-SA 3.0 IGO (cropped). Logos belong to their respective institutions.
