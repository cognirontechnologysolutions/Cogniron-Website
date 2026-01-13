# Cogniron Logo Assets

This directory contains the official Cogniron brand logos in PNG format, designed to work seamlessly across all deployment environments.

## Files

### `cogniron-logo-light.png`
- **Usage**: Displayed when the site is in **light theme**
- **Format**: PNG (portable network graphics)
- **Description**: Full Cogniron logo with text and branding
- **Theme**: Optimized for light backgrounds
- **Recommended dimensions**: ~200px width × 40-50px height (or proportional)

### `cogniron-logo-dark.png`
- **Usage**: Displayed when the site is in **dark theme**
- **Format**: PNG (portable network graphics)
- **Description**: Cogniron logo mark (may be simplified or color-adjusted for dark backgrounds)
- **Theme**: Optimized for dark backgrounds
- **Recommended dimensions**: ~200px width × 40-50px height (or proportional)

---

## Implementation

### Components Using Logos

The logos are referenced in the following components:

1. **Navigation.tsx** - Header logo in navigation bar
2. **Footer.tsx** - Footer branding logo

### Code Implementation

```tsx
// Logo assets stored in /public/logos/ - committed to Git, no conversion
const logoLight = '/logos/cogniron-logo-light.png';  // Full logo for light theme
const logoDark = '/logos/cogniron-logo-dark.png';    // Logo mark for dark theme

// Theme-aware logo rendering
<img 
  src={theme === 'light' ? logoLight : logoDark}
  alt="Cogniron"
  className="h-10 w-auto"
/>
```

### Theme Switching Logic

- **Light mode**: Displays `cogniron-logo-light.png`
- **Dark mode**: Displays `cogniron-logo-dark.png`
- The theme is managed by `ThemeContext` and switches automatically when users toggle between light/dark modes

---

## Deployment & Git Integration

### ✅ File Location
- **Path**: `/public/logos/`
- **Committed to Git**: Yes - these files are part of the repository
- **Served by**: Vite's public directory (copied to build output as-is)

### ✅ Production Build
When running `npm run build`:
1. Vite copies `/public/logos/` to `/build/logos/`
2. Files are served at: `https://yourdomain.com/logos/cogniron-logo-light.png`
3. No transformation, optimization, or conversion occurs
4. Original PNG format is preserved

### ✅ GitHub Integration
- These PNG files are tracked in version control
- Pushing to GitHub includes these assets automatically
- No manual upload or patching required
- Deployments pull logos directly from the repository

---

## Asset Specifications

### File Format Requirements
- **Format**: PNG only (do NOT convert to SVG, WebP, or Base64)
- **Extension**: Must be `.png`
- **Compression**: Recommended to use optimized PNG (e.g., via TinyPNG)
- **Transparency**: Supported (alpha channel)
- **Color space**: RGB or RGBA

### Recommended Specifications
| Property | Light Logo | Dark Logo |
|----------|-----------|-----------|
| Width | ~200-250px | ~200-250px |
| Height | ~40-50px | ~40-50px |
| File size | < 50KB | < 50KB |
| DPI | 72-144 (web) | 72-144 (web) |
| Transparency | Optional | Optional |

### Naming Convention
- **Filenames must be exact**: `cogniron-logo-light.png` and `cogniron-logo-dark.png`
- **Case-sensitive**: Use lowercase
- **No spaces**: Use hyphens for word separation
- **No versioning in filename**: Don't use `logo-v2.png` or `logo-final.png`

---

## Updating Logos

### To Replace Logos:

1. **Export from design tool**:
   - Open your design in Figma, Adobe Illustrator, etc.
   - Select the logo artwork
   - Export as PNG (2x or 3x scale for retina displays)
   - Ensure transparent background if needed

2. **Naming**:
   - Light theme logo → Save as `cogniron-logo-light.png`
   - Dark theme logo → Save as `cogniron-logo-dark.png`

3. **Replace files**:
   - Navigate to `/public/logos/` in your project
   - Replace existing PNG files with new ones
   - Keep exact filenames

4. **Commit to Git**:
   ```bash
   git add public/logos/cogniron-logo-light.png
   git add public/logos/cogniron-logo-dark.png
   git commit -m "Update brand logos"
   git push origin main
   ```

5. **No code changes needed**:
   - Components automatically reference the new files
   - No imports to update
   - Deployment will use updated logos automatically

---

## Important Notes

### ✅ DO:
- ✅ Keep logos in **PNG format**
- ✅ Store in `/public/logos/` directory
- ✅ Commit logo files to Git
- ✅ Use exact filenames: `cogniron-logo-light.png` and `cogniron-logo-dark.png`
- ✅ Optimize file size (compress PNGs before committing)
- ✅ Test logos in both light and dark themes before pushing

### ❌ DON'T:
- ❌ Convert to other formats (SVG, WebP, Base64, etc.)
- ❌ Use remote URLs or CDN links
- ❌ Rename files or add version numbers
- ❌ Move files to other directories
- ❌ Inline logos as data URLs in component code
- ❌ Use `figma:asset` imports (these break on GitHub deployment)

---

## Troubleshooting

### Logo not displaying on deployed site
**Symptoms**: Broken image icon or missing logo

**Solutions**:
1. Verify files exist in `/public/logos/`
2. Check filenames are exact: `cogniron-logo-light.png` and `cogniron-logo-dark.png`
3. Ensure files are committed to Git: `git status`
4. Verify files are in GitHub repository (check on GitHub.com)
5. Clear browser cache: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
6. Check browser console for 404 errors
7. Verify build output includes `/build/logos/` directory

### Logo shows placeholder text
**Solution**: 
- The PNG files are text placeholders
- Replace with actual exported PNG logo images
- Follow the "Updating Logos" section above

### TypeScript errors about PNG imports
**Solution**:
- Restart TypeScript server in VSCode: `Ctrl+Shift+P` → "TypeScript: Restart TS Server"
- Verify `/vite-env.d.ts` has PNG module declarations
- Run `npm run build` to verify build works

### Logo quality is poor/pixelated
**Solution**:
- Export logos at higher resolution (2x or 3x scale)
- Ensure source artwork is vector-based (scalable)
- Use retina-ready dimensions (e.g., 400px × 80px for 200px × 40px display)

---

## Architecture

### Why `/public/logos/`?

1. **Static asset serving**: Vite serves `/public/` files as-is without processing
2. **Git integration**: Files are committed and tracked in version control
3. **No bundler transformation**: PNGs aren't converted or optimized by build tools
4. **Reliable deployment**: Works consistently across all hosting platforms
5. **Simple references**: Use `/logos/filename.png` paths directly

### File Flow

```
Development:
/public/logos/cogniron-logo-light.png
    ↓
Referenced as: /logos/cogniron-logo-light.png
    ↓
Served by Vite dev server at: http://localhost:3000/logos/cogniron-logo-light.png

Production Build:
/public/logos/cogniron-logo-light.png
    ↓ (copied by Vite)
/build/logos/cogniron-logo-light.png
    ↓ (deployed)
https://yourdomain.com/logos/cogniron-logo-light.png
```

---

## Version History

| Date | Version | Changes |
|------|---------|---------|
| 2024-12 | 1.0 | Initial implementation with theme-aware logos |

---

## Related Documentation

- **Vite Public Directory**: https://vite.dev/guide/assets.html#the-public-directory
- **Theme System**: `/contexts/ThemeContext.tsx`
- **Navigation Component**: `/components/Navigation.tsx`
- **Footer Component**: `/components/Footer.tsx`

---

## Support

For questions about logo assets or brand guidelines, contact:
- **Email**: info@cogniron.com
- **Website**: https://cogniron.com

---

**Status**: ✅ Configured and ready for production deployment  
**Format**: PNG (no conversion)  
**Git Integration**: ✅ Enabled  
**Theme Support**: ✅ Light and Dark modes  
**Deployment**: ✅ Automatic (no manual fixes required)
