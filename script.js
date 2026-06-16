// Sample Product Data (will be overridden by localStorage if available)
let productsData = {
    cats: [
        { id: 1, name: "Nourriture Premium pour Chats", category: "cats", price: "29.99 DH", description: "Nutrition de haute qualité pour votre ami félin", image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=500", inStock: true },
        { id: 2, name: "Arbre à Chat", category: "cats", price: "45.99 DH", description: "Griffoir durable avec plusieurs niveaux", image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=500", inStock: true },
        { id: 3, name: "Jouet Interactif pour Chat", category: "cats", price: "19.99 DH", description: "Divertissez votre chat pendant des heures", image: "https://images.unsplash.com/photo-1529257414772-1960b7bea4eb?w=500", inStock: false },
    ],
    dogs: [
        { id: 4, name: "Nourriture Premium pour Chiens", category: "dogs", price: "39.99 DH", description: "Repas nutritifs pour chiens en bonne santé", image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500", inStock: true },
        { id: 5, name: "Laisse et Collier", category: "dogs", price: "24.99 DH", description: "Ensemble de promenade confortable et élégant", image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500", inStock: true },
        { id: 6, name: "Jouets à Mâcher", category: "dogs", price: "34.99 DH", description: "Pack variété de jouets à mâcher durables", image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=500", inStock: true },
    ],
    birds: [
        { id: 7, name: "Mélange de Graines pour Oiseaux", category: "birds", price: "15.99 DH", description: "Mélange nutritif pour tous les oiseaux", image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=500", inStock: true },
        { id: 8, name: "Cage pour Oiseaux", category: "birds", price: "89.99 DH", description: "Maison spacieuse et confortable pour oiseaux", image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=500", inStock: true },
        { id: 9, name: "Ensemble de Jouets pour Oiseaux", category: "birds", price: "22.99 DH", description: "Jouets amusants pour oiseaux actifs", image: "https://images.unsplash.com/photo-1578828876330-5ac4ab90fdeb?w=500", inStock: true },
    ],
    fish: [
        { id: 10, name: "Flocons pour Poissons", category: "fish", price: "12.99 DH", description: "Nutrition premium pour poissons tropicaux", image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=500", inStock: true },
        { id: 11, name: "Filtre d'Aquarium", category: "fish", price: "49.99 DH", description: "Gardez l'eau de votre aquarium cristalline", image: "https://images.unsplash.com/photo-1520990269076-e7e0821a0a89?w=500", inStock: true },
        { id: 12, name: "Plantes Décoratives", category: "fish", price: "18.99 DH", description: "Belles décorations d'aquarium", image: "https://images.unsplash.com/photo-1524704796725-9fc3044a58b1?w=500", inStock: false },
    ],
    other: [
        { id: 13, name: "Kit de Toilettage", category: "other", price: "32.99 DH", description: "Ensemble complet d'outils de toilettage", image: "https://images.unsplash.com/photo-1581888227599-779811939961?w=500", inStock: true },
        { id: 14, name: "Cage de Transport", category: "other", price: "54.99 DH", description: "Transport sûr et confortable pour animaux", image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500", inStock: true },
        { id: 15, name: "Lit pour Animaux", category: "other", price: "44.99 DH", description: "Espace de couchage confortable pour votre animal", image: "https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?w=500", inStock: true },
    ]
};

// Gallery Data (will be overridden by localStorage if available)
let galleryData = [
    { id: 1, image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500", alt: "Chat Heureux" },
    { id: 2, image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500", alt: "Chien Mignon" },
    { id: 3, image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=500", alt: "Oiseau Coloré" },
    { id: 4, image: "https://images.unsplash.com/photo-1520990269076-e7e0821a0a89?w=500", alt: "Poisson Magnifique" },
    { id: 5, image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500", alt: "Chat Joueur" },
    { id: 6, image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500", alt: "Chien Heureux" },
];

// Load from localStorage if available
function loadDataFromStorage() {
    const savedProducts = localStorage.getItem('kindom_products');
    const savedGallery = localStorage.getItem('kindom_gallery');
    
    if (savedProducts) {
        const allProducts = JSON.parse(savedProducts);
        // Reorganize products by category
        productsData = {
            cats: allProducts.filter(p => p.category === 'cats'),
            dogs: allProducts.filter(p => p.category === 'dogs'),
            birds: allProducts.filter(p => p.category === 'birds'),
            fish: allProducts.filter(p => p.category === 'fish'),
            other: allProducts.filter(p => p.category === 'other')
        };
    }
    
    if (savedGallery) {
        galleryData = JSON.parse(savedGallery);
    }
}

// Load data on page load
loadDataFromStorage();

// Translations
const translations = {
    fr: {
        inStock: "En Stock",
        outOfStock: "Rupture de Stock",
        orderWhatsApp: "Commander via WhatsApp"
    },
    ar: {
        inStock: "متوفر",
        outOfStock: "غير متوفر",
        orderWhatsApp: "اطلب عبر واتساب"
    },
    en: {
        inStock: "In Stock",
        outOfStock: "Out of Stock",
        orderWhatsApp: "Order via WhatsApp"
    }
};

let currentLang = 'fr';

// DOM Elements
const preloader = document.getElementById('preloader');
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const productsGrid = document.getElementById('productsGrid');
const galleryGrid = document.getElementById('galleryGrid');
const categoryTabs = document.querySelectorAll('.tab-btn');
const langBtns = document.querySelectorAll('.lang-btn');
const productModal = document.getElementById('productModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close-modal');

// Preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1500);
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Render Products
function renderProducts(category) {
    const products = productsData[category];
    const trans = translations[currentLang];
    
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card" data-id="${product.id}">
            <span class="stock-badge ${product.inStock ? 'in-stock' : 'out-of-stock'}">
                ${product.inStock ? trans.inStock : trans.outOfStock}
            </span>
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <span class="product-category">${category}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">${product.price}</span>
                    <button class="whatsapp-order-btn" onclick="orderViaWhatsApp('${product.name}', '${product.price}')">
                        <i class="fab fa-whatsapp"></i> ${trans.orderWhatsApp}
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Add click event to product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.whatsapp-order-btn')) {
                const productId = card.getAttribute('data-id');
                showProductModal(productId);
            }
        });
    });
}

// Show Product Modal
function showProductModal(productId) {
    const product = Object.values(productsData).flat().find(p => p.id == productId);
    const trans = translations[currentLang];
    
    if (product) {
        modalBody.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 400px; object-fit: cover; border-radius: 20px 20px 0 0;">
            <div style="padding: 40px;">
                <span class="product-category">${product.category}</span>
                <h2 style="font-size: 32px; margin: 15px 0;">${product.name}</h2>
                <p style="font-size: 18px; color: #666; margin-bottom: 20px;">${product.description}</p>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 30px;">
                    <span style="font-size: 36px; font-weight: 800; color: var(--primary-color);">${product.price}</span>
                    <button class="whatsapp-order-btn" style="font-size: 18px; padding: 15px 30px;" onclick="orderViaWhatsApp('${product.name}', '${product.price}')">
                        <i class="fab fa-whatsapp"></i> ${trans.orderWhatsApp}
                    </button>
                </div>
            </div>
        `;
        productModal.classList.add('active');
    }
}

// Close Modal
closeModal.addEventListener('click', () => {
    productModal.classList.remove('active');
});

productModal.addEventListener('click', (e) => {
    if (e.target === productModal) {
        productModal.classList.remove('active');
    }
});

// Category Tabs
categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        categoryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const category = tab.getAttribute('data-category');
        renderProducts(category);
    });
});

// WhatsApp Order Function
function orderViaWhatsApp(productName, price) {
    const messages = {
        fr: `Bonjour! Je suis intéressé(e) par la commande de: ${productName} - ${price}`,
        ar: `مرحباً! أنا مهتم بطلب: ${productName} - ${price}`,
        en: `Hello! I'm interested in ordering: ${productName} - ${price}`
    };
    const message = messages[currentLang] || messages.fr;
    const whatsappURL = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// Render Gallery
function renderGallery() {
    galleryGrid.innerHTML = galleryData.map(item => `
        <div class="gallery-item">
            <img src="${item.image}" alt="${item.alt}">
            <div class="gallery-overlay">
                <i class="fas fa-search-plus"></i>
            </div>
        </div>
    `).join('');
}

// Language Switcher
langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        langBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const lang = btn.getAttribute('data-lang');
        currentLang = lang;
        changeLanguage(lang);
    });
});

function changeLanguage(lang) {
    // Change text content
    document.querySelectorAll('[data-' + lang + ']').forEach(element => {
        element.textContent = element.getAttribute('data-' + lang);
    });

    // Change placeholders
    document.querySelectorAll('[data-placeholder-' + lang + ']').forEach(element => {
        element.placeholder = element.getAttribute('data-placeholder-' + lang);
    });

    // Change body direction for Arabic
    if (lang === 'ar') {
        document.body.classList.add('rtl');
        document.documentElement.setAttribute('lang', 'ar');
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.body.classList.remove('rtl');
        document.documentElement.setAttribute('dir', 'ltr');
        if (lang === 'fr') {
            document.documentElement.setAttribute('lang', 'fr');
        } else {
            document.documentElement.setAttribute('lang', 'en');
        }
    }

    // Re-render products with new language
    const activeTab = document.querySelector('.tab-btn.active');
    if (activeTab) {
        const category = activeTab.getAttribute('data-category');
        renderProducts(category);
    }
}

// Security: Rate limiting for contact form
let contactFormSubmissions = 0;
let contactFormLocked = false;

// Contact Form
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Check rate limit
    if (contactFormLocked) {
        alert('Veuillez attendre avant de soumettre un autre message.');
        return;
    }
    
    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
    const message = contactForm.querySelector('textarea').value;
    
    // Basic validation
    if (!name || !email || !subject || !message) {
        alert('Veuillez remplir tous les champs.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Adresse email invalide.');
        return;
    }
    
    // Rate limiting
    contactFormSubmissions++;
    if (contactFormSubmissions >= 3) {
        contactFormLocked = true;
        setTimeout(() => {
            contactFormLocked = false;
            contactFormSubmissions = 0;
        }, 300000); // 5 minutes
    }
    
    // Send to WhatsApp
    const whatsappMessage = `Nouveau formulaire de contact:\n\nNom: ${name}\nEmail: ${email}\nSujet: ${subject}\nMessage: ${message}`;
    const whatsappURL = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappURL, '_blank');
    contactForm.reset();
    
    alert('Merci! Votre message a été envoyé via WhatsApp.');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.product-card, .gallery-item, .info-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Initialize
renderProducts('cats');
renderGallery();

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-shape');
    
    parallaxElements.forEach((el, index) => {
        const speed = (index + 1) * 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add to cart animation (placeholder)
let cartCount = 0;
document.addEventListener('click', (e) => {
    if (e.target.closest('.whatsapp-order-btn')) {
        const cartBtn = document.querySelector('.cart-count');
        cartCount++;
        cartBtn.textContent = cartCount;
        cartBtn.style.animation = 'none';
        setTimeout(() => {
            cartBtn.style.animation = 'bounce 0.5s ease';
        }, 10);
    }
});

// Search functionality placeholder
document.querySelector('.search-btn').addEventListener('click', () => {
    const searchTerm = prompt('Rechercher des produits:');
    if (searchTerm) {
        alert(`Recherche de: ${searchTerm}\n\nLa fonctionnalité de recherche sera implémentée dans le panneau d'administration.`);
    }
});

console.log('Kindom Pet Store - Website Loaded Successfully! 🐾');
