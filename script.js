// Sample Product Data (will be overridden by localStorage if available)
let productsData = {
    cats: [
        { id: 1, name: "Nourriture Premium pour Chats", category: "cats", price: "2900 DZD", description: "Nutrition de haute qualité pour votre ami félin", image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=500", inStock: true, type: "food" },
        { id: 2, name: "Arbre à Chat", category: "cats", price: "4500 DZD", description: "Griffoir durable avec plusieurs niveaux", image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=500", inStock: true, type: "accessory" },
        { id: 3, name: "Jouet Interactif pour Chat", category: "cats", price: "1900 DZD", description: "Divertissez votre chat pendant des heures", image: "https://images.unsplash.com/photo-1529257414772-1960b7bea4eb?w=500", inStock: false, type: "accessory" },
    ],
    dogs: [
        { id: 4, name: "Nourriture Premium pour Chiens", category: "dogs", price: "3900 DZD", description: "Repas nutritifs pour chiens en bonne santé", image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500", inStock: true, type: "food" },
        { id: 5, name: "Laisse et Collier", category: "dogs", price: "2400 DZD", description: "Ensemble de promenade confortable et élégant", image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500", inStock: true, type: "accessory" },
        { id: 6, name: "Jouets à Mâcher", category: "dogs", price: "3400 DZD", description: "Pack variété de jouets à mâcher durables", image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=500", inStock: true, type: "accessory" },
    ],
    birds: [
        { id: 7, name: "Mélange de Graines pour Oiseaux", category: "birds", price: "1500 DZD", description: "Mélange nutritif pour tous les oiseaux", image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=500", inStock: true, type: "food" },
        { id: 8, name: "Cage pour Oiseaux", category: "birds", price: "8900 DZD", description: "Maison spacieuse et confortable pour oiseaux", image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=500", inStock: true, type: "accessory" },
        { id: 9, name: "Ensemble de Jouets pour Oiseaux", category: "birds", price: "2200 DZD", description: "Jouets amusants pour oiseaux actifs", image: "https://images.unsplash.com/photo-1578828876330-5ac4ab90fdeb?w=500", inStock: true, type: "accessory" },
    ],
    fish: [
        { id: 10, name: "Flocons pour Poissons", category: "fish", price: "1200 DZD", description: "Nutrition premium pour poissons tropicaux", image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=500", inStock: true, type: "food" },
        { id: 11, name: "Filtre d'Aquarium", category: "fish", price: "4900 DZD", description: "Gardez l'eau de votre aquarium cristalline", image: "https://images.unsplash.com/photo-1520990269076-e7e0821a0a89?w=500", inStock: true, type: "accessory" },
        { id: 12, name: "Plantes Décoratives", category: "fish", price: "1800 DZD", description: "Belles décorations d'aquarium", image: "https://images.unsplash.com/photo-1524704796725-9fc3044a58b1?w=500", inStock: false, type: "accessory" },
    ],
    other: [
        { id: 13, name: "Kit de Toilettage", category: "other", price: "3200 DZD", description: "Ensemble complet d'outils de toilettage", image: "https://images.unsplash.com/photo-1581888227599-779811939961?w=500", inStock: true, type: "accessory" },
        { id: 14, name: "Cage de Transport", category: "other", price: "5400 DZD", description: "Transport sûr et confortable pour animaux", image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500", inStock: true, type: "accessory" },
        { id: 15, name: "Lit pour Animaux", category: "other", price: "4400 DZD", description: "Espace de couchage confortable pour votre animal", image: "https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?w=500", inStock: true, type: "accessory" },
    ]
};

// Gallery Data (will be overridden by localStorage if available)
let galleryData = [
    { id: 1, image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500", alt: "Chat Heureux", title: "Happy Cats", description: "Our lovely feline friends enjoying their time.", extraImages: ["https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=500"] },
    { id: 2, image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500", alt: "Chien Mignon", title: "Cute Dogs", description: "Man's best friend.", extraImages: [] },
    { id: 3, image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=500", alt: "Oiseau Coloré", title: "Colorful Birds", description: "Beautiful exotic birds.", extraImages: [] },
    { id: 4, image: "https://images.unsplash.com/photo-1520990269076-e7e0821a0a89?w=500", alt: "Poisson Magnifique", title: "Aquarium Life", description: "Peaceful underwater scenes.", extraImages: [] },
    { id: 5, image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500", alt: "Chat Joueur", title: "Playful Kittens", description: "Kittens playing with toys.", extraImages: [] },
    { id: 6, image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500", alt: "Chien Heureux", title: "Happy Puppies", description: "Puppies running in the park.", extraImages: [] },
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
    // Remove preloader immediately when page loads
    preloader.classList.add('hidden');
});

// Navbar Scroll Effect (throttled for performance)
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) return;
    scrollTimeout = setTimeout(() => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        scrollTimeout = null;
    }, 16); // ~60fps
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

// Search Overlay
const searchBtn = document.getElementById('searchBtn');
const searchOverlay = document.getElementById('searchOverlay');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchBtn.addEventListener('click', () => {
    searchOverlay.classList.add('active');
    searchInput.focus();
});

searchClose.addEventListener('click', () => {
    searchOverlay.classList.remove('active');
    searchInput.value = '';
    searchResults.innerHTML = '';
});

searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) {
        searchOverlay.classList.remove('active');
        searchInput.value = '';
        searchResults.innerHTML = '';
    }
});

// Real-time search with product tags
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    
    if (query.length < 2) {
        searchResults.innerHTML = '';
        return;
    }
    
    // Load products from localStorage first, then fall back to sample data
    const storedProducts = localStorage.getItem('kindom_products');
    let allProducts;
    
    if (storedProducts) {
        const products = JSON.parse(storedProducts);
        // Group products by category
        allProducts = {};
        products.forEach(p => {
            if (!allProducts[p.category]) {
                allProducts[p.category] = [];
            }
            allProducts[p.category].push(p);
        });
    } else {
        allProducts = productsData;
    }
    
    const flatProducts = Object.values(allProducts).flat();
    const filtered = flatProducts.filter(product => {
        const name = product.name.toLowerCase();
        const description = product.description.toLowerCase();
        const category = product.category.toLowerCase();
        const type = product.type.toLowerCase();
        
        return name.includes(query) || description.includes(query) || category.includes(query) || type.includes(query);
    });
    
    if (filtered.length === 0) {
        searchResults.innerHTML = '<div class="no-results">No products found</div>';
        return;
    }
    
    searchResults.innerHTML = filtered.map(product => `
        <div class="search-result-item" onclick="showProductModal(${product.id}); document.getElementById('searchOverlay').classList.remove('active');">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <div class="search-result-info">
                <div class="search-result-name">${product.name}</div>
                <div class="search-result-meta">
                    <span class="search-result-tag">${product.type === 'food' ? 'Food' : 'Accessory'}</span>
                    <span class="search-result-tag">${product.category}</span>
                    <span class="search-result-price">${product.price}</span>
                </div>
            </div>
        </div>
    `).join('');
});

// Pagination state
let currentPage = 1;
const productsPerPage = 8;

// Trending tracking
let productViews = JSON.parse(localStorage.getItem('kindom_product_views')) || {};
let productOrders = JSON.parse(localStorage.getItem('kindom_product_orders')) || {};

// Track product view
function trackProductView(productId) {
    const today = new Date().toISOString().split('T')[0];
    if (!productViews[productId]) {
        productViews[productId] = {};
    }
    if (!productViews[productId][today]) {
        productViews[productId][today] = 0;
    }
    productViews[productId][today]++;
    localStorage.setItem('kindom_product_views', JSON.stringify(productViews));
}

// Track product order (WhatsApp click)
function trackProductOrder(productId) {
    const today = new Date().toISOString().split('T')[0];
    if (!productOrders[productId]) {
        productOrders[productId] = {};
    }
    if (!productOrders[productId][today]) {
        productOrders[productId][today] = 0;
    }
    productOrders[productId][today]++;
    localStorage.setItem('kindom_product_orders', JSON.stringify(productOrders));
}

// Calculate trending score (last 30 days)
function getTrendingScore(productId) {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    let viewScore = 0;
    let orderScore = 0;
    
    // Calculate views with decay
    if (productViews[productId]) {
        Object.entries(productViews[productId]).forEach(([date, count]) => {
            const viewDate = new Date(date);
            if (viewDate >= thirtyDaysAgo) {
                const daysDiff = Math.floor((new Date() - viewDate) / (1000 * 60 * 60 * 24));
                const decay = Math.max(0.1, 1 - (daysDiff / 30));
                viewScore += count * decay;
            }
        });
    }
    
    // Calculate orders with higher weight
    if (productOrders[productId]) {
        Object.entries(productOrders[productId]).forEach(([date, count]) => {
            const orderDate = new Date(date);
            if (orderDate >= thirtyDaysAgo) {
                const daysDiff = Math.floor((new Date() - orderDate) / (1000 * 60 * 60 * 24));
                const decay = Math.max(0.1, 1 - (daysDiff / 30));
                orderScore += count * 5 * decay; // Orders weighted 5x more
            }
        });
    }
    
    return viewScore + orderScore;
}

// Get trending products
function getTrendingProducts(limit = 6) {
    const allProducts = Object.values(productsData).flat();
    const trending = allProducts.map(product => ({
        ...product,
        trendingScore: getTrendingScore(product.id)
    })).sort((a, b) => b.trendingScore - a.trendingScore);
    
    return trending.slice(0, limit);
}

// Render trending products
function renderTrendingProducts() {
    const trendingGrid = document.getElementById('trendingGrid');
    if (!trendingGrid) return;
    
    const trendingProducts = getTrendingProducts(6);
    const trans = translations[currentLang];
    
    if (trendingProducts.length === 0) {
        trendingGrid.innerHTML = '<p style="text-align: center; color: #666;">No trending products yet</p>';
        return;
    }
    
    trendingGrid.innerHTML = trendingProducts.map(product => `
        <div class="product-card" data-id="${product.id}">
            <span class="trending-badge"><i class="fas fa-fire"></i> Trending</span>
            <span class="stock-badge ${product.inStock ? 'in-stock' : 'out-of-stock'}">
                ${product.inStock ? trans.inStock : trans.outOfStock}
            </span>
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-info">
                <span class="product-category">${product.category} - ${product.type === 'food' ? 'Food' : 'Accessory'}</span>
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
    
    // Add click event to trending product cards
    document.querySelectorAll('#trendingGrid .product-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.whatsapp-order-btn')) {
                const productId = card.getAttribute('data-id');
                showProductModal(productId);
            }
        });
    });
}

// Render Products (Food only) with pagination
function renderProducts(category, page = 1) {
    const products = productsData[category].filter(p => p.type === 'food');
    const trans = translations[currentLang];
    
    // Calculate pagination
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = products.slice(startIndex, endIndex);
    const totalPages = Math.ceil(products.length / productsPerPage);
    
    // Show loading state
    productsGrid.innerHTML = '<div class="loading-spinner">Loading...</div>';
    
    // Use requestAnimationFrame for smooth rendering
    requestAnimationFrame(() => {
        let html = paginatedProducts.map(product => `
            <div class="product-card" data-id="${product.id}">
                <span class="stock-badge ${product.inStock ? 'in-stock' : 'out-of-stock'}">
                    ${product.inStock ? trans.inStock : trans.outOfStock}
                </span>
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
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
        
        // Add pagination controls if more than one page
        if (totalPages > 1) {
            html += `
                <div class="pagination-controls">
                    <button class="pagination-btn" ${page === 1 ? 'disabled' : ''} onclick="changePage('products', ${page - 1})">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <span class="pagination-info">${page} / ${totalPages}</span>
                    <button class="pagination-btn" ${page === totalPages ? 'disabled' : ''} onclick="changePage('products', ${page + 1})">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            `;
        }
        
        productsGrid.innerHTML = html;

        // Add click event to product cards
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.whatsapp-order-btn')) {
                    const productId = card.getAttribute('data-id');
                    showProductModal(productId);
                }
            });
        });
    });
}

// Change page function
function changePage(section, page) {
    currentPage = page;
    const activeTab = document.querySelector('.tab-btn.active');
    if (activeTab) {
        const category = activeTab.dataset.category;
        if (section === 'products') {
            renderProducts(category, page);
        } else if (section === 'accessories') {
            renderAccessories(category, page);
        }
    }
}

// Render Accessories with pagination
function renderAccessories(category, page = 1) {
    const accessories = productsData[category].filter(p => p.type === 'accessory');
    const trans = translations[currentLang];
    const accessoriesGrid = document.getElementById('accessoriesGrid');
    
    // Calculate pagination
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedAccessories = accessories.slice(startIndex, endIndex);
    const totalPages = Math.ceil(accessories.length / productsPerPage);
    
    // Show loading state
    accessoriesGrid.innerHTML = '<div class="loading-spinner">Loading...</div>';
    
    // Use requestAnimationFrame for smooth rendering
    requestAnimationFrame(() => {
        let html = paginatedAccessories.map(product => `
            <div class="product-card" data-id="${product.id}">
                <span class="stock-badge ${product.inStock ? 'in-stock' : 'out-of-stock'}">
                    ${product.inStock ? trans.inStock : trans.outOfStock}
                </span>
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
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
        
        // Add pagination controls if more than one page
        if (totalPages > 1) {
            html += `
                <div class="pagination-controls">
                    <button class="pagination-btn" ${page === 1 ? 'disabled' : ''} onclick="changePage('accessories', ${page - 1})">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <span class="pagination-info">${page} / ${totalPages}</span>
                    <button class="pagination-btn" ${page === totalPages ? 'disabled' : ''} onclick="changePage('accessories', ${page + 1})">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            `;
        }
        
        accessoriesGrid.innerHTML = html;

        // Add click event to accessory cards
        document.querySelectorAll('#accessoriesGrid .product-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.whatsapp-order-btn')) {
                    const productId = card.getAttribute('data-id');
                    showProductModal(productId);
                }
            });
        });
    });
}

// Show Product Modal
function showProductModal(productId) {
    const product = Object.values(productsData).flat().find(p => p.id == productId);
    const trans = translations[currentLang];
    
    // Track product view
    trackProductView(productId);
    
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

// Category Tabs for Food
categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        categoryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const category = tab.getAttribute('data-category');
        renderProducts(category);
    });
});

// Category Tabs for Accessories
const accessoryTabs = document.querySelectorAll('.tab-btn-acc');
accessoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        accessoryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const category = tab.getAttribute('data-category');
        renderAccessories(category);
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
    
    // Track product order
    const product = Object.values(productsData).flat().find(p => p.name === productName);
    if (product) {
        trackProductOrder(product.id);
    }
    
    window.open(whatsappURL, '_blank');
}

// Render Gallery
function renderGallery() {
    galleryGrid.innerHTML = galleryData.map(item => `
        <div class="gallery-item" onclick="showGalleryModal(${item.id})">
            <img src="${item.image}" alt="${item.alt}">
            <div class="gallery-text-overlay">
                ${item.title ? `<h3>${item.title}</h3>` : ''}
                ${item.description ? `<p>${item.description}</p>` : ''}
            </div>
            <div class="gallery-overlay">
                <i class="fas fa-search-plus"></i>
            </div>
        </div>
    `).join('');
}

// Gallery Modal & Carousel Logic
const galleryModal = document.getElementById('galleryModal');
const closeGalleryModalBtn = document.getElementById('closeGalleryModal');
const carouselTrack = document.getElementById('carouselTrack');
const carouselDotsContainer = document.getElementById('carouselDots');
const galleryModalTitle = document.getElementById('galleryModalTitle');
const galleryModalDescription = document.getElementById('galleryModalDescription');
const btnPrev = document.getElementById('carouselPrev');
const btnNext = document.getElementById('carouselNext');

let currentSlide = 0;
let currentAlbumImages = [];

function showGalleryModal(id) {
    const album = galleryData.find(item => item.id === id);
    if (!album) return;

    // Set text content
    galleryModalTitle.textContent = album.title || 'Untitled Album';
    galleryModalDescription.textContent = album.description || '';

    // Gather all images (cover + extras)
    currentAlbumImages = [album.image];
    if (album.extraImages && album.extraImages.length > 0) {
        currentAlbumImages = currentAlbumImages.concat(album.extraImages);
    }

    currentSlide = 0;
    renderCarousel();
    
    galleryModal.classList.add('active');
}

function renderCarousel() {
    // Render slides
    carouselTrack.innerHTML = currentAlbumImages.map(url => `
        <div class="carousel-slide">
            <img src="${url}" alt="Album Image">
        </div>
    `).join('');

    // Render dots
    if (currentAlbumImages.length > 1) {
        carouselDotsContainer.innerHTML = currentAlbumImages.map((_, index) => `
            <div class="carousel-dot ${index === currentSlide ? 'active' : ''}" onclick="goToSlide(${index})"></div>
        `).join('');
        btnPrev.style.display = 'flex';
        btnNext.style.display = 'flex';
        carouselDotsContainer.style.display = 'flex';
    } else {
        carouselDotsContainer.innerHTML = '';
        btnPrev.style.display = 'none';
        btnNext.style.display = 'none';
        carouselDotsContainer.style.display = 'none';
    }

    updateCarouselPosition();
}

function updateCarouselPosition() {
    carouselTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Update dots
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function goToSlide(index) {
    currentSlide = index;
    updateCarouselPosition();
}

btnPrev.addEventListener('click', () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : currentAlbumImages.length - 1;
    updateCarouselPosition();
});

btnNext.addEventListener('click', () => {
    currentSlide = (currentSlide < currentAlbumImages.length - 1) ? currentSlide + 1 : 0;
    updateCarouselPosition();
});

closeGalleryModalBtn.addEventListener('click', () => {
    galleryModal.classList.remove('active');
});

galleryModal.addEventListener('click', (e) => {
    if (e.target === galleryModal) {
        galleryModal.classList.remove('active');
    }
});

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

    // Re-render products and accessories with new language
    const activeProductTab = document.querySelector('.tab-btn.active');
    if (activeProductTab) {
        const category = activeProductTab.getAttribute('data-category');
        renderProducts(category);
    }
    
    const activeAccessoryTab = document.querySelector('.tab-btn-acc.active');
    if (activeAccessoryTab) {
        const category = activeAccessoryTab.getAttribute('data-category');
        renderAccessories(category);
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
renderTrendingProducts();
renderProducts('cats');
renderAccessories('cats');
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

// Search Modal Functionality
const searchModal = document.getElementById('searchModal');
const searchBtn = document.querySelector('.search-btn');
const closeSearch = document.getElementById('closeSearch');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const filterChips = document.querySelectorAll('.filter-chip');

let currentSearchFilter = 'all';

// Open search modal
searchBtn.addEventListener('click', () => {
    searchModal.classList.add('active');
    searchInput.focus();
});

// Close search modal
closeSearch.addEventListener('click', () => {
    searchModal.classList.remove('active');
    searchInput.value = '';
    searchResults.innerHTML = '';
});

// Close on outside click
searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) {
        searchModal.classList.remove('active');
        searchInput.value = '';
        searchResults.innerHTML = '';
    }
});

// Filter chips
filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
        filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        currentSearchFilter = chip.getAttribute('data-filter');
        performSearch(searchInput.value);
    });
});

// Search input handler
searchInput.addEventListener('input', (e) => {
    performSearch(e.target.value);
});

// Perform search
function performSearch(query) {
    const allProducts = Object.values(productsData).flat();
    let filteredProducts = allProducts;
    
    // Apply category filter
    if (currentSearchFilter !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === currentSearchFilter);
    }
    
    // Apply search query
    if (query.trim()) {
        const searchTerm = query.toLowerCase();
        filteredProducts = filteredProducts.filter(p => 
            p.name.toLowerCase().includes(searchTerm) ||
            p.description.toLowerCase().includes(searchTerm) ||
            p.category.toLowerCase().includes(searchTerm)
        );
    }
    
    // Display results
    if (filteredProducts.length === 0) {
        searchResults.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <p data-en="No products found" data-fr="Aucun produit trouvé" data-ar="لم يتم العثور على منتجات">Aucun produit trouvé</p>
            </div>
        `;
    } else {
        const trans = translations[currentLang];
        searchResults.innerHTML = filteredProducts.map(product => `
            <div class="search-result-item" onclick="showProductModal(${product.id}); document.getElementById('searchModal').classList.remove('active');">
                <img src="${product.image}" alt="${product.name}">
                <div class="search-result-info">
                    <h4>${product.name}</h4>
                    <p>${product.description}</p>
                    <div class="search-result-footer">
                        <span class="price">${product.price}</span>
                        <span class="category">${product.category}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Initialize accessories on page load
renderAccessories('cats');

console.log('Kindom Pet Store - Website Loaded Successfully! 🐾');
