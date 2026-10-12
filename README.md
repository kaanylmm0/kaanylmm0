# Mehmet Kaan Yılmam — Portfolio

Static portfolio ready for GitHub Pages, using only HTML, CSS, and JavaScript.

## Folder structure

```
index.html
style.css
script.js
config.js
assets/
  profile/headshot.jpg
  cv/Mehmet_Kaan_Yilmam_Public_CV.pdf
  activities/
    coastal-volunteer-2024.jpg
    graduation-project-exhibition-2026.jpg
  images/
    safestep/
    passporter/
    shotmate/
    life-inventory/
    deste/
    logolab/
    snapmap/
    taksicy/
```

## Adding project images

For each project, save the main card image as `assets/images/<project>/cover.webp`.
You can also add `screenshot-1.webp`, `screenshot-2.webp`, `screenshot-3.webp` in the same folder for future galleries. **Only cover.webp is displayed in this version.**
Any project without cover.webp automatically displays its initials instead. For other file names, change the `image` value in `config.js`.

## CV

The included PDF is a privacy-conscious public CV draft. To replace it, overwrite `assets/cv/Mehmet_Kaan_Yilmam_Public_CV.pdf` or update the `cv` path in `config.js`. Do not publish government ID, full street address, or private references without permission.

## Contact form

This is a static GitHub Pages website, so the form uses `mailto:` to open the visitor's email application with prefilled content. **It does not send messages directly or store submissions.** For direct website submissions, a form backend/service is required.

## Publish

Create a public repository named `kaanylmm0.github.io`, upload the contents of this folder to the repository root, then go to Settings → Pages and set Deploy from a branch: `main` / `(root)`.

Update all personal text, skills, links, projects and activities in `config.js`.


## Project image galleries (October 2026)
The project screenshots supplied by the owner are included in `assets/images/<project>/`.
`cover.webp` is the project card's first screenshot; `screenshot-1.webp`, etc. are subsequent gallery images.
Edit `config.js` to add/remove gallery images or App Store / GitHub links. Clicking a project preview opens a lightbox with arrows and keyboard controls.
DESTE App Store link has been configured. Taksicy has no screenshots yet.
