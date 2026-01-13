# 🎨 Cogniron Logo Setup Guide

## ✅ What's Been Done

Your logo asset handling has been completely fixed to ensure logos **always work correctly** when pushed to GitHub and deployed.

### Changes Made:

1. ✅ **Created `/public/logos/` directory** for brand assets
2. ✅ **Updated Navigation.tsx** to use local PNG references
3. ✅ **Updated Footer.tsx** to use local PNG references
4. ✅ **Added TypeScript declarations** for PNG imports
5. ✅ **Removed all `figma:asset` imports** (these broke on GitHub)
6. ✅ **Created comprehensive documentation**

---

## 📋 What You Need to Do

### ⚠️ IMPORTANT: Replace Placeholder Files

The current files in `/public/logos/` are **text placeholders**. You need to replace them with your actual PNG logo files.

---

## 🚀 Quick Setup (5 Minutes)

### Step 1: Export Logos from Figma

You've already uploaded two PNG logos to Figma Make:
- **Full logo with text** (for light theme backgrounds)
- **Logo mark** (for dark theme backgrounds)

Based on the Figma assets you provided:
- `figma:asset/c0c08b6016dfe1e199fd26697ed5b9a8e4e77e83.png` → **Light theme logo** (full logo with text)
- `figma:asset/125a1b17e8b52d6b3e0ad9c52f95ce8f1fe5af59.png` → **Dark theme logo** (logo mark)

**Export these from Figma**:

1. Open your Figma file with the logos
2. Select the **full logo** (with "COGNIRON LIMITLESS POSSIBILITIES" text)
   - Right-click → Export → PNG
   - Scale: **2x or 3x** (for retina displays)
   - Click **Export**
   - Save as: `cogniron-logo-light.png`

3. Select the **logo mark** (just the "C" icon)
   - Right-click → Export → PNG
   - Scale: **2x or 3x** (for retina displays)
   - Click **Export**
   - Save as: `cogniron-logo-dark.png`

---

### Step 2: Replace Placeholder Files

1. Navigate to your project folder: `/public/logos/`

2. You'll see these placeholder files:
   - `cogniron-logo-light.png` (currently a text placeholder)
   - `cogniron-logo-dark.png` (currently a text placeholder)

3. **Replace them** with your exported PNG files:
   - Delete or overwrite `cogniron-logo-light.png`
   - Delete or overwrite `cogniron-logo-dark.png`
   - Copy your exported PNGs to `/public/logos/`

4. **Verify filenames are EXACT**:
   - Must be: `cogniron-logo-light.png` (lowercase, with hyphen)
   - Must be: `cogniron-logo-dark.png` (lowercase, with hyphen)
   - File extension must be `.png` (not .PNG, not .jpg)

---

### Step 3: Test Locally

```bash
# Start the development server
npm run dev
```

**Visual checks**:
- ✅ Open http://localhost:3000
- ✅ Check header navigation - logo should appear
- ✅ Check footer - logo should appear
- ✅ Click theme toggle (sun/moon icon in header)
- ✅ Switch to **dark mode** - logo should change to logo mark
- ✅ Switch to **light mode** - logo should change to full logo
- ✅ Navigate to different pages - logo should persist
- ✅ Open browser console (F12) - verify NO errors about missing images

---

### Step 4: Commit to Git

```bash
# Check what files have changed
git status

# Add the logo PNG files
git add public/logos/cogniron-logo-light.png
git add public/logos/cogniron-logo-dark.png

# Commit the changes
git commit -m "Add Cogniron brand logo PNG assets for deployment"

# Push to GitHub
git push origin main
```

---

### Step 5: Verify Deployment

After GitHub deployment completes:

1. **Open your deployed website**
2. **Check header** - Logo should display
3. **Check footer** - Logo should display
4. **Toggle theme** - Logo should switch between light and dark versions
5. **Check browser console** - No 404 errors
6. **Test on mobile** - Logo should display and scale correctly

**If logo doesn't show**:
- Wait for deployment to complete (may take 1-5 minutes)
- Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Verify files are in GitHub repo at `/public/logos/`

---

## 📊 File Specifications

### Recommended Logo Dimensions

| Logo | Width | Height | Max File Size |
|------|-------|--------|---------------|
| Light theme (full logo) | ~400px | ~80px | < 50KB |
| Dark theme (logo mark) | ~400px | ~80px | < 50KB |

**Note**: These are 2x dimensions for retina displays. The logos will display at 200px × 40px on the website.

### Optimization

Before committing, optimize your PNGs to reduce file size:

**Free tools**:
- [TinyPNG](https://tinypng.com/) - drag and drop PNG compression
- [Squoosh](https://squoosh.app/) - advanced image optimization
- [ImageOptim](https://imageoptim.com/) (Mac only) - drag and drop compression

**Goal**: Keep each logo file under 50KB for fast loading

---

## 🎯 How It Works

### Old System (Broken ❌)
```tsx
// Navigation.tsx - OLD
import logoFull from 'figma:asset/c0c08b6016dfe1e199fd26697ed5b9a8e4e77e83.png';
import logoMark from 'figma:asset/125a1b17e8b52d6b3e0ad9c52f95ce8f1fe5af59.png';
```

**Problems**:
- ❌ `figma:asset` only works inside Figma Make
- ❌ Doesn't exist when pushed to GitHub
- ❌ Results in 404 errors on deployed site
- ❌ Required manual fixes after every push

### New System (Fixed ✅)
```tsx
// Navigation.tsx - NEW
const logoLight = '/logos/cogniron-logo-light.png';  // Full logo for light theme
const logoDark = '/logos/cogniron-logo-dark.png';    // Logo mark for dark theme

<img 
  src={theme === 'light' ? logoLight : logoDark}
  alt="Cogniron"
/>
```

**Benefits**:
- ✅ Uses local PNG files in `/public/logos/`
- ✅ Files committed to Git repository
- ✅ Works in all environments (local, GitHub, production)
- ✅ No manual intervention needed
- ✅ Original PNG quality preserved
- ✅ Theme-aware automatic switching

---

## 🔄 Future Logo Updates

**When you need to update logos**:

1. Export new PNG from Figma (2x or 3x scale)
2. Replace files in `/public/logos/`
3. Commit and push to GitHub
4. **That's it!** No code changes needed

The components automatically reference the updated files.

---

## ✅ Verification Checklist

Before pushing to GitHub, verify:

- [ ] Both PNG files exist in `/public/logos/`
- [ ] Filenames are exact: `cogniron-logo-light.png` and `cogniron-logo-dark.png`
- [ ] Files are actual PNG images (not text placeholders)
- [ ] Files are optimized (< 50KB each if possible)
- [ ] Local dev server shows logos correctly
- [ ] Light mode shows full logo
- [ ] Dark mode shows logo mark
- [ ] No console errors about missing images
- [ ] Logo scales properly on mobile
- [ ] All pages show logo in header and footer

---

## 🆘 Troubleshooting

### Logo Shows "PNG_PLACEHOLDER" Text
**Problem**: You haven't replaced the placeholder files yet.  
**Solution**: Follow Steps 1-2 above to export and replace with actual PNG files.

### Logo Not Showing Locally
**Solutions**:
1. Verify PNG files exist in `/public/logos/`
2. Check filenames are exact (case-sensitive)
3. Restart dev server: Stop with `Ctrl+C`, then run `npm run dev` again
4. Clear browser cache: `Ctrl+Shift+R`

### Logo Not Showing on Deployed Site
**Solutions**:
1. Verify files were committed: `git log --stat | grep logos`
2. Check files are visible on GitHub.com in your repository
3. Wait for deployment to complete (check deployment status)
4. Hard refresh browser: `Ctrl+Shift+R`
5. Check browser console for 404 errors

### TypeScript Errors
**Solution**: Restart TypeScript server in VSCode
- Press `Ctrl+Shift+P` (Windows) or `Cmd+Shift+P` (Mac)
- Type: "TypeScript: Restart TS Server"
- Press Enter

### Logo Quality is Blurry/Pixelated
**Solution**: Export at higher resolution
- Use 2x or 3x scale when exporting from Figma
- Recommended: 400px × 80px for 200px × 40px display size

---

## 📚 Additional Documentation

- **Logo asset details**: `/public/logos/README.md`
- **Theme context**: `/contexts/ThemeContext.tsx`
- **Navigation component**: `/components/Navigation.tsx`
- **Footer component**: `/components/Footer.tsx`

---

## 🎉 Summary

Your logo asset system is now configured to:

✅ Keep logos in **PNG format** (no conversion)  
✅ Store in **repository** (committed to Git)  
✅ Work **automatically** on all deployments  
✅ Support **theme switching** (light/dark modes)  
✅ Require **no manual fixes** after pushing to GitHub  

**Next step**: Replace the placeholder PNG files with your actual logo exports from Figma.

---

**Status**: ✅ Code updated and ready  
**Action required**: Replace placeholder PNGs with actual logo files  
**Time to complete**: ~5 minutes  
**Difficulty**: Easy (just file replacement)

---

## 📞 Support

If you encounter any issues:
- Review `/public/logos/README.md` for detailed documentation
- Check browser console for error messages
- Verify file paths and names are exact
- Ensure PNG files are valid images (not text files)

**Contact**: info@cogniron.com  
**Website**: https://cogniron.com
