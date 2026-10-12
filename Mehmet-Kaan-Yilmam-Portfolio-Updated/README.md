# Mehmet Kaan Yılmam — Portfolio

A responsive, single-page English portfolio for GitHub Pages.

## Current content

- Your profile photo, contact details and background
- A **privacy-reviewed public CV** in `assets/cv/`; this is a condensed version, **not the original uploaded PDF**, which had private identity/address details. Please review it before publication.
- Eight project cards with temporary monogram artwork; real screenshots and per-project URLs can be added later.
- Two participation certificates and internship history

## Add screenshots later

Save project screenshots in `assets/projects/`, e.g. `assets/projects/passporter.webp`. In `config.js`, set `image: "assets/projects/passporter.webp"` on the corresponding project. Also paste verified App Store, GitHub or website URLs in the `appStore`, `github`, or `website` fields. Empty links stay hidden.

## Publish

1. Create a public GitHub repository named `kaanylmm0.github.io`.
2. Upload **the files inside this folder**, including `index.html`, `config.js`, `style.css`, `script.js`, and `assets/`.
3. In GitHub **Settings → Pages**, select **Deploy from a branch**, `main`, `/(root)`.
4. Open `https://kaanylmm0.github.io` once Pages finishes deploying.

**Privacy reminder:** the included public CV omits your government ID, street address, phone number, birth details and references. Do not upload the original sensitive CV into a public repository. Published certificates and contact email will be visible to anyone; review them before publishing.
