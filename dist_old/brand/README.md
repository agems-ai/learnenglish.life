# See Guru — Brand Assets

Our affiliate partner See Guru. Use these assets for any banner, card, comparison page, or hero placement that references See Guru on learnenglish.life.

## Assets

| File | Size | Use |
|---|---|---|
| `see-guru-favicon.ico` | 16×16 / 32×32 | small inline mark, not for hero banners |
| `see-guru-icon-32.png` | 32×32 | list rows, compact cards |
| `see-guru-icon-512.png` | 512×512 | banners, hero, large cards (upscaled from the favicon — looks soft at full size) |

## Brand

- Primary color: violet / indigo (the circular background)
- Secondary: deep navy (the inner disc)
- Accent: white (the highlight dot)
- Voice: premium but approachable tutor marketplace — not playful-cartoony

## Rules

- Every use must link to the tagged affiliate URL: `https://see.guru/?aff=SG-SUAG151`. No plain `https://see.guru/` links.
- Don't distort the logo, don't recolor it, don't add drop shadows it doesn't have on see.guru.
- A higher-resolution vector is pending from the See Guru team. Until then, prefer `see-guru-icon-512.png` for anything larger than 128px and accept that it will look a bit soft.

## Where to use them

- Review page header (`src/pages/reviews/see-guru.astro`)
- Comparison pages (`src/pages/compare/see-guru-vs-*.astro`)
- Homepage featured-partner card
- StickyCTA and HeroCTA components when the current review is See Guru
- Comparison tables wherever See Guru is one of the options

Commit anything in this folder through the normal git workflow so James's deploy pipeline picks it up.
