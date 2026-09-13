# Ryne Echaluse — CSESoc Exec Portfolio

Campaign site for Co-President & Vice President of Externals, CSESoc 2027.

Built with React + TypeScript + Vite + Tailwind CSS v4, deployed on Vercel.

## Getting started

```bash
npm install
npm run dev
```

## Adding your real photos

Every photo on the site is currently a dashed placeholder box (see
`src/components/PhotoSlot.tsx`) so the layout can be reviewed before real
images are ready. To swap one in:

1. Drop the image file into `src/assets/photos/`.
2. Import it at the top of the relevant component, e.g.
   ```tsx
   import heroPhoto from "../assets/photos/hero.jpg";
   ```
3. Pass it to the `<PhotoSlot src={heroPhoto} ... />` call — the placeholder
   is replaced by the real `<img>` automatically.

Where each placeholder lives:

| Placeholder | File | Suggested aspect ratio |
| --- | --- | --- |
| Hero background | `src/components/Hero.tsx` | full-bleed, landscape or portrait |
| About photo | `src/components/About.tsx` | fills a tall right-hand column |
| Gallery (5 slides) | `src/components/Gallery.tsx` | 4:5 portrait, edit the `SLIDES` array to add/remove slides |

## Writing the Visions copy

`src/components/Visions.tsx` has a clearly marked `[INSERT DESCRIPTION]`
placeholder paragraph — replace it with your own copy on what you'll
actually do to foster a welcoming, inclusive CSE community.

## Deploying to Vercel

1. Push this repo to GitHub (see commands below).
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Vercel auto-detects Vite — defaults (`npm run build`, output dir `dist`)
   work with no changes needed.
4. Every push to `main` redeploys automatically; pull requests get preview
   URLs.

```bash
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```
