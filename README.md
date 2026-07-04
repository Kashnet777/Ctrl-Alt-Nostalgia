# Ctrl + Alt + Nostalgia

A personal archive journal — ten chapters, one person.

## Project Structure

```
ctrl-alt-nostalgia/
│
├── index.html                        ← open this in a browser (or deploy to GitHub Pages)
│
├── assets/
│   ├── css/
│   │   ├── main.css                  ← base styles, cover, chrome, layout
│   │   ├── toc.css                   ← table of contents
│   │   ├── ch1-photos.css            ← I · Polaroids & Pictures
│   │   ├── ch2-calls.css             ← II · Call Files
│   │   ├── ch3-messages.css          ← III · Message Fragments
│   │   ├── ch4-ideas.css             ← IV · Business Ideas
│   │   ├── ch5-evidence.css          ← V · Evidence
│   │   ├── ch6-soundtrack.css        ← VI · Soundtrack
│   │   └── ch7-10.css                ← VII–X · Plans, Little Things, Letter, Ending
│   └── js/
│       └── main.js                   ← all interactivity
│
├── chapters/                         ← reference copies of each chapter's HTML
│   ├── 1-photos/content.html
│   ├── 2-calls/content.html
│   ├── 3-messages/content.html
│   ├── 4-ideas/content.html
│   ├── 5-evidence/content.html
│   ├── 6-soundtrack/content.html
│   ├── 7-plans/content.html
│   ├── 8-little-things/content.html
│   ├── 9-letter/content.html
│   └── 10-ending/content.html
│
└── images/                           ← put your real images here
    ├── photos/      → photo1.jpg … photo6.jpg   (polaroid grid)
    ├── film/        → film1.jpg  … film6.jpg    (film strip)
    └── screenshots/ → ss1.png   … ss6.png       (evidence chapter)
```

## Customising

| What to edit | Where |
|---|---|
| Name on the cover | `index.html` — search `Her Name Here` |
| Polaroid photos | Replace emoji placeholders with `<img src="images/photos/photoN.jpg">` |
| Film strip frames | Replace emoji with `<img src="images/film/filmN.jpg">` |
| Screenshots (evidence) | Replace emoji with `<img src="images/screenshots/ssN.png">` |
| Sticky notes (Ch VIII) | Edit every `.sticky-val` in `index.html` |
| The letter (Ch IX) | Edit the `.letter-body` paragraphs and `.letter-sig` |
| Redacted messages | Edit `data-secret="..."` on `.msg-redacted` elements |
| Songs / cassettes | Edit cassette label titles and notes in Ch VI |

## GitHub Pages Deploy

1. Push this folder to a GitHub repo
2. Settings → Pages → Deploy from branch → `main` / `/ (root)`
3. Done — no build step needed
