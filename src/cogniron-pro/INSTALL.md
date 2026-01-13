# Cogniron Pro - Quick Installation Guide

This guide will help you install and set up the Cogniron Pro WordPress theme in minutes.

---

## 📋 Pre-Installation Checklist

Before installing, ensure you have:
- [ ] WordPress 6.0 or higher installed
- [ ] PHP 7.4 or higher
- [ ] Admin access to your WordPress site
- [ ] The Cogniron Pro theme folder

---

## 🚀 Installation Steps

### Step 1: Prepare the Theme

1. Locate the `cogniron-pro` folder
2. Create a ZIP file of the entire folder:
   - **Windows:** Right-click → Send to → Compressed (zipped) folder
   - **Mac:** Right-click → Compress "cogniron-pro"
   - **Linux:** `zip -r cogniron-pro.zip cogniron-pro/`

### Step 2: Upload to WordPress

1. Log in to your WordPress admin dashboard
2. Navigate to **Appearance → Themes**
3. Click the **Add New** button at the top
4. Click the **Upload Theme** button
5. Click **Choose File** and select your `cogniron-pro.zip` file
6. Click **Install Now**
7. Wait for the upload and installation to complete
8. Click **Activate** when installation is finished

✅ **Theme Installed!** Now let's configure it.

---

## ⚙️ Initial Configuration (5 Minutes)

### Step 3: Set Up Navigation Menu

1. Go to **Appearance → Menus**
2. Click **Create a new menu**
3. Name it "Primary Menu" (or any name you prefer)
4. Click **Create Menu**
5. Add your pages to the menu from the left panel
6. Check the box **Primary Menu** under "Display location"
7. Click **Save Menu**

### Step 4: Configure Homepage

1. Create a new page: **Pages → Add New**
2. Title it "Home" (you can add content with Gutenberg blocks if desired)
3. Click **Publish**
4. Go to **Settings → Reading**
5. Select **A static page** under "Your homepage displays"
6. Choose "Home" for **Homepage**
7. (Optional) Choose or create a page for **Posts page**
8. Click **Save Changes**

### Step 5: Customize Theme Settings

1. Go to **Appearance → Customize**
2. Click on each section to customize:

   **Site Identity:**
   - Upload your logo (recommended: PNG, 300x100px)
   - Set site title and tagline
   
   **Hero Section:**
   - Edit hero title and subtitle
   - Upload hero image (recommended: 1920x1080px)
   - Set button text and URLs
   
   **Features Section:**
   - Edit section title and description
   - Customize up to 6 features
   
   **Services Section:**
   - Add your service titles and descriptions
   - Upload service images
   
   **Call to Action:**
   - Set CTA title, text, and button
   
   **Header Settings:**
   - Configure header button
   
   **Footer Settings:**
   - Edit copyright text

3. Click **Publish** after making changes

### Step 6: Add Footer Widgets (Optional)

1. Go to **Appearance → Widgets**
2. Drag widgets to Footer Widget 1-4 areas
3. Suggested widgets:
   - **Footer Widget 1:** Text widget with company info
   - **Footer Widget 2:** Navigation Menu widget
   - **Footer Widget 3:** Recent Posts
   - **Footer Widget 4:** Custom HTML with social icons

### Step 7: Create Your First Blog Post

1. Go to **Posts → Add New**
2. Write your post title and content
3. Set a **Featured Image** (recommended: 1200x675px)
4. Assign **Categories** and **Tags**
5. Click **Publish**

---

## 🎨 Image Setup

### Replace Placeholder Images

The theme comes with placeholder images that you should replace:

**Option A: Via Customizer (Recommended)**
1. Go to **Appearance → Customize**
2. Navigate to the section with the image (e.g., Hero Section)
3. Click the image upload button
4. Upload your image
5. Click **Publish**

**Option B: Direct Upload via FTP**
1. Prepare your images according to specifications (see `/assets/images/README.md`)
2. Upload to: `/wp-content/themes/cogniron-pro/assets/images/`
3. Name them: `hero-placeholder.jpg`, `logo-placeholder.png`, `placeholder.jpg`

### Image Specifications

- **Hero Image:** 1920 x 1080px (landscape)
- **Logo:** 300 x 100px (transparent PNG or SVG)
- **Blog Featured Images:** 1200 x 675px
- **Service/Case Study Images:** 800 x 450px

---

## ✅ Post-Installation Checklist

After installation, verify these items:

- [ ] Homepage displays correctly
- [ ] Navigation menu appears in header
- [ ] Logo is visible (or site title if no logo)
- [ ] All homepage sections display
- [ ] Light/dark mode toggle works
- [ ] Mobile menu works on small screens
- [ ] Blog posts display correctly
- [ ] Footer widgets appear
- [ ] Search functionality works
- [ ] 404 page displays correctly

---

## 🔧 Recommended Plugins

Install these plugins to enhance your site:

**Essential:**
- **Yoast SEO** or **Rank Math** - For SEO optimization
- **WP Super Cache** - For performance
- **Akismet Anti-Spam** - Spam protection

**Optional:**
- **Contact Form 7** - For contact forms
- **Smush** - Image optimization
- **UpdraftPlus** - Automatic backups

To install plugins:
1. Go to **Plugins → Add New**
2. Search for the plugin name
3. Click **Install Now**
4. Click **Activate**

---

## 🐛 Troubleshooting

### Problem: Theme doesn't appear after upload

**Solution:**
- Ensure you zipped the `cogniron-pro` folder itself, not its parent folder
- Check that the ZIP contains `style.css` in the root
- Try Method 2 (FTP upload) instead

### Problem: Homepage shows blog posts

**Solution:**
- Go to **Settings → Reading**
- Select "A static page" and choose your homepage
- Save changes

### Problem: Menu doesn't display

**Solution:**
- Go to **Appearance → Menus**
- Ensure your menu is assigned to "Primary Menu" location
- Save the menu

### Problem: Images don't appear

**Solution:**
- Check file permissions (755 for folders, 644 for files)
- Re-upload images via WordPress Media Library
- Clear browser cache

---

## 📞 Need Help?

If you encounter issues:

1. **Check the README.md** - Comprehensive documentation
2. **Review Theme Files** - All code is well-documented
3. **WordPress Support Forums** - Community help
4. **Contact Support** - support@cogniron.com

---

## 🎉 You're All Set!

Your Cogniron Pro theme is now installed and configured. Here's what to do next:

1. ✍️ **Create Content** - Add more pages and blog posts
2. 📸 **Upload Images** - Replace all placeholders with your images
3. 🎨 **Fine-tune Design** - Adjust colors and spacing if needed
4. 📱 **Test Mobile** - Check how it looks on different devices
5. 🚀 **Launch** - Make your site live!

---

**Installation Time:** ~10 minutes  
**Last Updated:** December 3, 2025

**Enjoy your new website!** 🚀
