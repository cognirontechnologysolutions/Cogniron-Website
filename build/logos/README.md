# Public logos

Place your exported Cogniron PNG logos here so the site can reference them at runtime.

Required filenames (exact):

- `cogniron-logo-light.png`  — full logo for light theme
- `cogniron-logo-dark.png`   — logo mark for dark theme

After adding the files run:

```bash
git add public/logos/cogniron-logo-light.png public/logos/cogniron-logo-dark.png
git commit -m "Add brand logos"
git push
```

They will be served at `/logos/cogniron-logo-light.png` and `/logos/cogniron-logo-dark.png`.
