# Kindom - Premium Pet Food & Accessories Store 🐾

A modern, responsive, and feature-rich website for selling pet food and accessories with multi-language support (English, French, Arabic).

## 🌟 Features

### Customer-Facing Website (index.html)
- **Modern Design**: Extremely advanced layout with white, red, yellow, and blue color scheme
- **Advanced Animations**: 
  - Smooth scroll animations
  - Floating shapes with parallax effects
  - Hover effects and transitions
  - Loading animations
  - Icon animations
  - Modal animations
- **Multi-Language Support**: Switch between English, French, and Arabic
- **Responsive Design**: Fully responsive on all devices (desktop, tablet, mobile)
- **Product Categories**:
  - Cats (food & accessories)
  - Dogs (food & accessories)
  - Birds (food & accessories)
  - Fish (food & accessories)
  - Other (general pet items)
- **WhatsApp Integration**: Order directly via WhatsApp instead of online payment
- **Sections**:
  - Hero section with animated pet icons
  - Products showcase with category tabs
  - Gallery section
  - Contact form
  - Social media links
- **SEO Optimized**: 
  - Meta tags for search engines
  - Semantic HTML structure
  - Open Graph tags
  - Descriptive alt texts
  - Clean URL structure

### Admin Panel (admin.html)
Access at `/admin.html` or through direct link

**Login Credentials:**
- Username: `admin`
- Password: `admin123`

**Admin Features:**
- **Dashboard**: Overview with statistics
  - Total products count
  - In-stock items count
  - Total orders
  - Gallery items count
  - Recent activity feed
  
- **Products Management**:
  - Add new products
  - Edit existing products
  - Delete products
  - Update prices
  - Update descriptions
  - Manage stock status
  - Filter by category
  - Search products
  
- **Gallery Management**:
  - Add images
  - Delete images
  - Image grid view
  
- **Orders View**:
  - View orders received via WhatsApp
  - Order status management
  
- **Settings**:
  - Store information
  - WhatsApp number configuration
  - Email and address settings
  - Theme color customization

## 📁 File Structure

```
petstore/
├── index.html              # Main customer website
├── styles.css              # Main website styles
├── script.js               # Main website functionality
├── admin.html              # Admin panel
├── admin-styles.css        # Admin panel styles
├── admin-script.js         # Admin panel functionality
└── README.md              # This file
```

## 🚀 Getting Started

### Installation

1. **Download all files** to your web server or local directory

2. **Open index.html** in your web browser to view the main website

3. **Access admin panel** by opening `admin.html` or adding `/admin` to your URL

### Customization

#### Change WhatsApp Number
1. Open `index.html` and search for `1234567890`
2. Replace with your WhatsApp number (include country code)
3. Open `script.js` and replace the same number
4. Open `admin.html` and update the settings form

#### Change Colors
- Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #FF3B30;    /* Red */
    --secondary-color: #FFD60A;  /* Yellow */
    --accent-color: #007AFF;     /* Blue */
}
```

#### Change Store Information
1. Open `index.html`
2. Update contact information in the contact section
3. Update footer content

#### Add/Remove Products
- Use the admin panel to manage products dynamically
- Or edit the `productsData` object in `script.js`

## 🌐 Multi-Language Support

The website supports three languages:
- **English (EN)** - Default
- **French (FR)**
- **Arabic (AR)** - Includes RTL (right-to-left) support

### How to Add More Languages

1. Open `script.js`
2. Add translations to the `translations` object:
```javascript
const translations = {
    en: { ... },
    fr: { ... },
    ar: { ... },
    es: { /* your Spanish translations */ }
};
```

3. Add language button in `index.html`:
```html
<button class="lang-btn" data-lang="es">ES</button>
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🎨 Advanced Features

### Animations Include:
- Preloader with bouncing paw
- Floating background shapes
- Smooth scroll indicators
- Product card hover effects
- Gallery overlay animations
- Modal slide-in effects
- Button ripple effects
- Icon rotation and float
- Parallax scrolling

### SEO Features:
- Meta descriptions
- Open Graph tags
- Semantic HTML5
- Alt text for images
- Structured heading hierarchy
- Clean, readable URLs
- Mobile-friendly design

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Customization Tips

### Adding New Products
Use the admin panel for easiest management, or edit `script.js`:

```javascript
{
    id: 16,
    name: "Product Name",
    category: "cats", // cats, dogs, birds, fish, other
    price: "$XX.XX",
    description: "Product description",
    image: "https://image-url.com",
    inStock: true
}
```

### Changing Admin Credentials
Edit `admin-script.js`:

```javascript
if (username === 'YOUR_USERNAME' && password === 'YOUR_PASSWORD') {
    // Login successful
}
```

## 🌟 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Poppins font family
- **Unsplash**: Sample images (replace with your own)

## 📞 WhatsApp Integration

All "Order" buttons open WhatsApp with pre-filled messages. Users can:
- Order products directly
- Send contact form inquiries
- Get instant support

## 🔒 Security Notes

- Change default admin credentials immediately
- Implement proper backend authentication for production
- Use HTTPS for secure connections
- Validate all user inputs
- Store sensitive data securely

## 🚀 Deployment

### For Static Hosting (GitHub Pages, Netlify, Vercel):
1. Upload all files to your repository
2. Deploy through your hosting platform
3. Update WhatsApp numbers and contact info

### For Web Server:
1. Upload files via FTP/SFTP
2. Ensure proper file permissions
3. Configure domain and SSL certificate

## 📈 Future Enhancements (Optional)

- Backend database integration
- User accounts and authentication
- Real payment gateway integration
- Email notifications
- Advanced analytics
- Product reviews and ratings
- Wishlist functionality
- Live chat support

## 🐛 Troubleshooting

**Issue**: Images not loading
- **Solution**: Check image URLs, use your own images or valid URLs

**Issue**: Admin panel not working
- **Solution**: Ensure all JavaScript files are loaded correctly

**Issue**: Language switcher not working
- **Solution**: Check browser console for errors, ensure script.js is loaded

**Issue**: Mobile menu not appearing
- **Solution**: Clear browser cache and reload

## 📄 License

This project is open source and available for personal and commercial use.

## 👨‍💻 Support

For questions or issues:
- Email: info@kindom.com
- WhatsApp: +1234567890

---

**Built with ❤️ for pet lovers around the world!** 🐕 🐈 🐦 🐠
