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
Add `screenshot-1.webp`, `screenshot-2.webp`, etc. in the same folder and list them in the project’s `gallery` in `config.js`. The gallery displays the full original images.
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
`cover.webp` and `screenshot-1.webp`, etc. are the original gallery images. Cards use a separate `preview` configuration to compose large application screens against a project-specific background.
Edit `config.js` to add/remove gallery images or App Store / GitHub links. Clicking a project preview opens a lightbox with arrows and keyboard controls.
DESTE App Store link has been configured. Taksicy has no screenshots yet.

## Featured project previews

In `config.js`, each project can define `preview: {tone, layout, screens}`. Supported tones are `blue`, `violet`, `warm`, `teal`, and `red`; use `layout: "landscape"` for photos or editorial visuals. Each screen has a `src`, descriptive `label`, `sourceWidth` (the original asset width), and `crop: {x, y, width, height}` measured in original image pixels. CSS displays this viewport without altering the source file. Use two distinct screens for a paired composition, one for a single-screen preview, or `screens: []` for the initials placeholder. Keep full images in `gallery` for the detail dialog.

Desktop uses two project columns; mobile uses one. Preview frames intentionally extend below the card’s image area, keeping the visible app interface large.

## Activity photo galleries

An activity can define `photo` (the card cover), `gallery` (ordered local image paths), `tags`, and `linkedin` (the original post URL). Certificates can be displayed in a separate activity entry with `type: "certificate"`, `image`, and `imageLabel`. Clicking the cover or “View event photos” opens the shared accessible gallery. The EMO exhibition entry includes the first three photos from the owner’s LinkedIn post, with the second post photo displayed first.
