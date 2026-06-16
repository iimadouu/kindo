# 🚀 Quick Start Guide - Kindom Pet Store

## How to Open the Website

### Option 1: Double-Click (Easiest)
1. Navigate to the `petstore` folder
2. Double-click on `index.html` to open the main website
3. Double-click on `admin.html` to open the admin panel

### Option 2: Using a Browser
1. Open your web browser (Chrome, Firefox, Safari, Edge)
2. Press `Ctrl+O` (Windows/Linux) or `Cmd+O` (Mac)
3. Navigate to the petstore folder
4. Select `index.html` and open it

### Option 3: Using a Local Server (Recommended for Development)
```bash
# If you have Python installed:
cd /home/iimadouu/Desktop/petstore
python3 -m http.server 8000

# Then open: http://localhost:8000
```

```bash
# If you have Node.js with live-server:
npx live-server
```

## 📋 First Steps

### 1. View the Main Website
- Open `index.html` in your browser
- Test the language switcher (EN/FR/AR buttons in top-right)
- Browse different pet categories
- Click on products to see details
- Try the contact form
- Test the WhatsApp button

### 2. Access Admin Panel
- Open `admin.html`
- Login with:
  - **Username:** `admin`
  - **Password:** `admin123`
- Explore the dashboard
- Try adding/editing products
- Manage gallery images

## ⚙️ Essential Customizations

### Change WhatsApp Number
**Files to Edit:** `index.html`, `script.js`, `admin.html`

Search for: `1234567890`
Replace with: Your WhatsApp number (with country code, no + or spaces)

Example: For +1 (555) 123-4567, use: `15551234567`

### Update Store Information
**Edit:** `index.html` (Contact section)

Find and update:
- Address
- Phone number
- Email
- Social media links

### Modify Colors
**Edit:** `styles.css` (lines 11-15)

```css
:root {
    --primary-color: #FF3B30;    /* Your primary color */
    --secondary-color: #FFD60A;  /* Your secondary color */
    --accent-color: #007AFF;     /* Your accent color */
}
```

## 🎨 Features Overview

### Main Website Features:
✅ Multi-language (English, French, Arabic)
✅ Fully responsive design
✅ Advanced animations and effects
✅ Category-based product browsing
✅ WhatsApp ordering integration
✅ Image gallery
✅ Contact form
✅ SEO optimized
✅ Smooth scrolling

### Admin Panel Features:
✅ Secure login system
✅ Product management (Add/Edit/Delete)
✅ Stock management
✅ Price updates
✅ Gallery management
✅ Statistics dashboard
✅ Order tracking
✅ Store settings

## 🌐 Test All Languages

1. Click **EN** button → Website in English
2. Click **FR** button → Website in French  
3. Click **AR** button → Website in Arabic (RTL layout)

## 📱 Test Responsiveness

### Desktop View
- Full navigation menu
- Multi-column layouts
- All animations visible

### Tablet View (resize browser to ~768px)
- Adjusted layouts
- Simplified navigation
- Optimized spacing

### Mobile View (resize browser to ~480px)
- Hamburger menu
- Single-column layouts
- Touch-friendly buttons
- Optimized images

## 🔧 Troubleshooting

### Problem: Styles not loading
**Solution:** Ensure `styles.css`, `admin-styles.css` are in the same folder as HTML files

### Problem: Products not showing
**Solution:** Open browser console (F12), check for JavaScript errors

### Problem: Images broken
**Solution:** Images use Unsplash URLs. Replace with your own images or ensure internet connection

### Problem: Admin login not working
**Solution:** Username: `admin`, Password: `admin123` (case-sensitive)

## 📦 File Checklist

Ensure you have all these files:
- ✅ index.html (Main website)
- ✅ styles.css (Main styles)
- ✅ script.js (Main functionality)
- ✅ admin.html (Admin panel)
- ✅ admin-styles.css (Admin styles)
- ✅ admin-script.js (Admin functionality)
- ✅ README.md (Full documentation)
- ✅ QUICK_START.md (This file)

## 🚀 Going Live

### For GitHub Pages:
1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select main branch
5. Your site will be at: `https://yourusername.github.io/repository-name/`

### For Hosting Service (Netlify, Vercel):
1. Drag and drop the entire `petstore` folder
2. Site will be live instantly
3. Get a free subdomain

### For Your Own Server:
1. Upload files via FTP/cPanel
2. Access via your domain
3. Ensure HTTPS is enabled

## 💡 Pro Tips

1. **Customize Products First**: Use admin panel to add your actual products
2. **Replace Sample Images**: Use your own product photos for better branding
3. **Update All Contact Info**: Make sure WhatsApp, email, and address are correct
4. **Test on Real Devices**: Check on actual phones and tablets
5. **Change Admin Password**: Update the login credentials in `admin-script.js`

## 📞 Need Help?

Check the full `README.md` file for:
- Detailed feature documentation
- Advanced customization guides
- API integration options
- Deployment instructions
- Security best practices

---

## 🎉 You're All Set!

Open `index.html` and enjoy your new modern pet store website! 

**Happy Selling! 🐾**
