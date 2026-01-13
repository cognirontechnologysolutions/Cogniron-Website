# Cogniron Pro - WordPress Theme

**Version:** 1.0.0  
**Author:** Cogniron Team  
**License:** GPL v2 or later

A modern, professional WordPress theme designed for AI-driven QA testing and enterprise solution companies. Features include light/dark mode toggle, smooth animations, full Gutenberg support, and complete CMS functionality.

---

## 🚀 Features

- ✅ **Fully Responsive** - Perfect on desktop, tablet, and mobile devices
- 🎨 **Light/Dark Mode** - Automatic theme switcher with localStorage persistence
- 🎬 **Smooth Animations** - Beautiful scroll animations using custom AOS implementation
- 📝 **Full Gutenberg Support** - Works perfectly with WordPress block editor
- 🎯 **SEO Optimized** - Clean semantic HTML structure
- ⚡ **Fast Loading** - Optimized assets and lazy loading
- 🔧 **Fully Customizable** - WordPress Customizer integration
- 📱 **Mobile-First Design** - Optimized for mobile devices
- ♿ **Accessible** - WCAG 2.1 compliant with keyboard navigation
- 🔄 **Translation Ready** - Full i18n support

---

## 📋 Requirements

- WordPress 6.0 or higher
- PHP 7.4 or higher
- Modern web browser with ES6 support

---

## 📦 Installation

### Method 1: Upload via WordPress Admin (Recommended)

1. Download the theme folder
2. Create a ZIP file of the `cogniron-pro` folder
3. Log in to your WordPress admin dashboard
4. Go to **Appearance → Themes → Add New**
5. Click **Upload Theme**
6. Choose the ZIP file and click **Install Now**
7. After installation, click **Activate**

### Method 2: FTP Upload

1. Download the theme folder
2. Connect to your server via FTP
3. Upload the `cogniron-pro` folder to `/wp-content/themes/`
4. Log in to WordPress admin
5. Go to **Appearance → Themes**
6. Find "Cogniron Pro" and click **Activate**

### Method 3: Direct Server Upload

1. Access your server via cPanel or file manager
2. Navigate to `/wp-content/themes/`
3. Upload the `cogniron-pro` folder
4. Go to **Appearance → Themes** in WordPress admin
5. Activate the theme

---

## ⚙️ Initial Setup

### 1. Set Up Menus

1. Go to **Appearance → Menus**
2. Create a new menu (e.g., "Primary Menu")
3. Add pages to your menu
4. Assign it to **Primary Menu** location
5. (Optional) Create a footer menu and assign it to **Footer Menu** location
6. Save the menu

### 2. Configure Homepage

1. Create a new page called "Home" (or any name)
2. Add content using Gutenberg blocks if needed
3. Go to **Settings → Reading**
4. Select "A static page" for homepage displays
5. Choose "Home" as your homepage
6. Save changes

### 3. Customize Theme Settings

1. Go to **Appearance → Customize**
2. Navigate through the sections:
   - **Site Identity** - Upload logo, set site title
   - **Hero Section** - Edit hero title, subtitle, buttons, image
   - **Features Section** - Configure features
   - **Services Section** - Add your services
   - **Call to Action Section** - Set CTA text and button
   - **Header Settings** - Configure header CTA button
   - **Footer Settings** - Edit copyright text
   - **Blog Preview Section** - Configure blog display
3. Click **Publish** to save changes

### 4. Set Up Widgets (Optional)

1. Go to **Appearance → Widgets**
2. Add widgets to the footer widget areas (Footer Widget 1-4)
3. Common widgets to add:
   - **Text** - Company information
   - **Navigation Menu** - Quick links
   - **Custom HTML** - Social media icons
   - **Recent Posts** - Latest blog posts

### 5. Upload Images

Replace placeholder images with your actual images:
- Go to **Appearance → Customize → Hero Section**
- Upload your hero image (recommended: 1920x1080px)
- For services/case studies, upload images via their respective sections
- See `/assets/images/README.md` for detailed image specifications

---

## 📝 Creating Content

### Blog Posts

1. Go to **Posts → Add New**
2. Write your post content using Gutenberg blocks
3. Set a **Featured Image** (recommended: 1200x675px)
4. Assign **Categories** and **Tags**
5. Click **Publish**

### Pages

1. Go to **Pages → Add New**
2. Add content using Gutenberg blocks
3. (Optional) Set a Featured Image
4. Click **Publish**

### Homepage Sections

The homepage displays the following sections automatically:
- Hero Section (customizable via Customizer)
- Features Section (customizable via Customizer)
- Services Section (customizable via Customizer)
- Case Studies Section (customizable via Customizer)
- Testimonials Section (customizable via Customizer)
- Blog Preview (shows latest 3 posts)
- Call to Action Section (customizable via Customizer)

To add custom Gutenberg content to homepage:
1. Edit your homepage
2. Add any Gutenberg blocks
3. Content will appear between Hero and Features sections

---

## 🎨 Customization Guide

### Theme Colors

Edit colors in `style.css` (lines 26-51):
```css
:root {
  --color-primary: #2563eb;      /* Primary brand color */
  --color-secondary: #06b6d4;    /* Secondary color */
  --color-accent: #8b5cf6;       /* Accent color */
}
```

### Typography

Edit fonts in `style.css`:
```css
:root {
  --font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
}
```

To use Google Fonts:
1. Edit `functions.php`
2. Add font enqueue in `cogniron_enqueue_scripts()` function
3. Update `--font-family-base` in `style.css`

### Spacing

All spacing uses exact pixel values defined in CSS variables:
```css
:root {
  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 96px;
  --space-5xl: 128px;
}
```

---

## 🔧 Theme Features

### Light/Dark Mode

The theme includes an automatic dark mode toggle:
- Click the sun/moon icon in the header
- Preference is saved in browser localStorage
- Persists across page loads

### Animations

Animations are powered by a custom AOS (Animate On Scroll) implementation:
- Automatically animates elements as you scroll
- Respects `prefers-reduced-motion` setting
- Can be customized in `assets/js/animations.js`

### Mobile Menu

- Automatically appears on screens < 768px
- Click hamburger icon to toggle
- Press ESC to close
- Click outside menu to close

### Back to Top Button

- Appears after scrolling 300px
- Smooth scroll to top
- Automatically generated via JavaScript

---

## 📱 Responsive Breakpoints

- **Desktop:** > 1024px
- **Tablet:** 768px - 1024px
- **Mobile:** < 768px

---

## 🔌 Plugin Recommendations

While the theme works perfectly standalone, these plugins enhance functionality:

### Essential
- **Yoast SEO** or **Rank Math** - SEO optimization
- **WP Super Cache** or **W3 Total Cache** - Performance
- **Akismet** - Spam protection

### Optional
- **Contact Form 7** - Contact forms
- **MonsterInsights** - Google Analytics
- **UpdraftPlus** - Backups
- **Smush** - Image optimization

---

## 🐛 Troubleshooting

### Issue: Menu doesn't appear
**Solution:** Go to Appearance → Menus and assign your menu to "Primary Menu" location

### Issue: Homepage shows blog posts instead of static page
**Solution:** Go to Settings → Reading and set a static page as homepage

### Issue: Dark mode doesn't work
**Solution:** Clear browser cache and localStorage, then try again

### Issue: Images not appearing
**Solution:** Check file permissions on `/assets/images/` folder (should be 755)

### Issue: Animations not working
**Solution:** Ensure JavaScript is enabled. Check browser console for errors.

### Issue: Customizer changes not saving
**Solution:** Check file permissions on theme folder. Ensure you clicked "Publish" button.

---

## 📄 File Structure

```
cogniron-pro/
├── style.css                    # Main stylesheet with theme header
├── functions.php                # Theme functions and setup
├── header.php                   # Header template
├── footer.php                   # Footer template
├── front-page.php               # Homepage template
├── page.php                     # Page template
├── single.php                   # Single post template
├── archive.php                  # Archive template
├── category.php                 # Category archive template
├── tag.php                      # Tag archive template
├── search.php                   # Search results template
├── 404.php                      # 404 error page
├── index.php                    # Main fallback template
├── comments.php                 # Comments template
├── searchform.php               # Search form template
├── sidebar.php                  # Sidebar template
├── screenshot.png               # Theme screenshot (add your own)
├── README.md                    # This file
├── inc/
│   ├── customizer.php           # Customizer settings
│   └── template-functions.php  # Helper functions
├── template-parts/
│   ├── content-post.php         # Post loop template
│   ├── content-page.php         # Page content template
│   ├── content-none.php         # No content template
│   ├── section-hero.php         # Hero section
│   ├── section-features.php     # Features section
│   ├── section-services.php     # Services section
│   ├── section-case-studies.php # Case studies section
│   ├── section-testimonials.php # Testimonials section
│   ├── section-blog.php         # Blog preview section
│   └── section-cta.php          # Call to action section
└── assets/
    ├── css/
    │   ├── main.css             # Additional styles
    │   ├── animations.css       # Animation styles
    │   └── editor-style.css     # Gutenberg editor styles
    ├── js/
    │   ├── main.js              # Main JavaScript
    │   ├── animations.js        # Animation scripts
    │   └── customizer.js        # Customizer preview JS
    └── images/
        ├── README.md            # Image specifications
        ├── hero-placeholder.jpg # Hero image placeholder
        ├── logo-placeholder.png # Logo placeholder
        └── placeholder.jpg      # General placeholder
```

---

## 🔒 Security

- All user inputs are sanitized and escaped
- Nonce verification for AJAX requests
- No SQL queries without $wpdb->prepare()
- Follows WordPress Coding Standards

---

## 🌐 Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Opera (latest 2 versions)

---

## 📞 Support

For support, bug reports, or feature requests:
- Email: support@cogniron.com
- Documentation: https://cogniron.com/docs
- Issues: Create an issue on GitHub

---

## 📜 Changelog

### Version 1.0.0 (December 2025)
- Initial release
- Full Gutenberg support
- Light/dark mode toggle
- Responsive design
- Animation system
- Customizer integration
- SEO optimization
- Accessibility features

---

## 📄 License

This theme is licensed under the GPL v2 or later.

```
Cogniron Pro WordPress Theme, Copyright 2025 Cogniron Team
Cogniron Pro is distributed under the terms of the GNU GPL v2 or later.
```

---

## 👏 Credits

- Font: System fonts for performance
- Icons: Inline SVG icons
- Animation: Custom AOS implementation
- Code: WordPress best practices

---

## 🎯 Next Steps

After installation:

1. ✅ Set up menus
2. ✅ Configure homepage
3. ✅ Customize theme via Customizer
4. ✅ Upload your logo and images
5. ✅ Add footer widgets
6. ✅ Create your first blog post
7. ✅ Test on mobile devices
8. ✅ Set up SEO plugin
9. ✅ Enable caching
10. ✅ Launch your site!

---

**Thank you for choosing Cogniron Pro!** 🚀
