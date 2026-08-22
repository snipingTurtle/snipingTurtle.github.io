# Personal site

A static Jekyll site for GitHub Pages. No build step — GitHub compiles it on push.

Everything you'll update regularly lives in `_data/`. You shouldn't need to touch
HTML to add a project, an achievement, or a post.

---

## Deploy it

1. Create a repo. Name it `<your-username>.github.io` for a site at the root
   domain, or anything else (e.g. `portfolio`) for a project site.
2. Push these files to the `main` branch.
3. On GitHub: **Settings → Pages → Source: Deploy from a branch**, then pick
   `main` and folder `/ (root)`. Save.
4. Wait ~1 minute. The URL appears at the top of that same Pages settings page.

**If the repo is *not* named `<username>.github.io`**, open `_config.yml` and set:

```yml
baseurl: "/portfolio"   # your repo name, with the leading slash
```

Otherwise CSS and links will 404. Also set `url:` to your Pages URL in both cases.

---

## Fill in the placeholders

Search the project for `[FILL IN]` and `YOUR_`. The main ones:

| What | Where |
|---|---|
| Email, GitHub, LinkedIn | `_data/social.yml` |
| Site URL, your name/role | `_config.yml` |
| Bio and one-line statement | `index.html` (marked with comments) |
| Project repo links | `_data/projects.yml` |

Contact links behave like this:

- `url: ""` → the entry is hidden entirely (use this for Codeforces, Discord, etc.
  until you have one)
- `url` still containing `YOUR_` → shown dimmed with a `[FILL IN]` marker, so you
  can see at a glance what's missing
- a real URL → a real link

---

## Add a project

Append a block to `_data/projects.yml`:

```yml
- title: "CTF: picoCTF 2026 web writeup"
  summary: "How a leaky JWT let me read another user's flag."
  year: "2026"
  tags: [security, personal]
  details: >
    Longer paragraph, optional. Explains context.
  links:
    - label: "writeup"
      url: "https://..."
  learned: "Never trust a token you didn't sign."
```

Then delete one of the `placeholder: true` entries at the bottom of the file —
those render the dashed "open slot" cards.

**Tags:** any word works. `cp`, `security`, `coursework`, and `personal` get their
own accent colors. To add a color for a new tag, add one line in `assets/css/style.css`:

```css
.tag[data-tag="ml"] { color: #b48ead; }
```

## Add an achievement

`_data/achievements.yml`:

```yml
- title: "ICPC Dhaka Regional Preliminary 2026"
  detail: "Rank 84 of 400+ teams"
  date: "Nov 2026"
  url: ""    # optional
```

The section shows an empty state until the first entry exists, then switches to a
list on its own.

## Add a note (blog post)

Create `_posts/YYYY-MM-DD-some-title.md`:

```markdown
---
layout: post
title: "Dijkstra with a twist"
date: 2026-09-04
tags: [cp]
description: "One line for the listing page and search results."
---

Your content here. Markdown, code blocks, images.
```

The filename date must match the front matter date, and the file must be in
`_posts/`. It'll appear on `/notes/` and in the latest-three list on the home page.

## Update "now"

`_data/now.yml` — the list plus an `updated:` date that's printed on the page, so a
stale section is visible rather than quietly wrong.

---

## Change the look

All colors, fonts, and spacing are CSS custom properties in the block at the top of
`assets/css/style.css`. Nothing below that block hardcodes a color.

To re-skin the whole site, change one value:

```css
--accent: #f0a24b;   /* amber (current) */
/* --accent: #4fd1c5;   cyan */
/* --accent: #7ee081;   terminal green */
```

Also update `--accent-wash` and `--accent-line` to matching low-opacity `rgba()`
versions, and the `[data-theme="light"]` block for a darker light-mode variant
(light mode needs more contrast against the pale background).

Dark is the default. The toggle persists the choice in `localStorage`.

**Fonts** are system stacks — zero network requests, instant render. If you want a
webfont, add the `<link>` in `_includes/head.html` and change `--font-mono` /
`--font-body`.

---

## Preview locally (optional)

Not required — you can just push and let GitHub build. But if you want it:

```bash
bundle install
bundle exec jekyll serve
# http://localhost:4000
```

Needs Ruby. If it's a hassle, skip it; the GitHub build is the source of truth.

---

## File map

```
_config.yml              site settings, your name, baseurl
_data/
  projects.yml           ← the file you'll edit most
  achievements.yml
  coursework.yml
  now.yml
  social.yml             contact links
_includes/
  head.html              meta tags, favicon, theme init
  nav.html
  footer.html            contact section + colophon
  contact-links.html
  project-card.html      card markup, incl. empty slots
_layouts/
  default.html
  post.html
_posts/
  2026-08-16-keeping-notes.md   seed post — delete or keep as a format reference
assets/
  css/style.css          design tokens + all styles
  js/main.js             theme toggle, typed intro, year
index.html               all home page sections
notes.html               post listing
404.html
```
