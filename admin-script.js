// Sample Data (in real app, this would come from a database)
let products = [
    { id: 1, name: "Nourriture Premium pour Chats", category: "cats", price: "29.99 DH", description: "Nutrition de haute qualité pour votre ami félin", image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=500", inStock: true },
    { id: 2, name: "Arbre à Chat", category: "cats", price: "45.99 DH", description: "Griffoir durable avec plusieurs niveaux", image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=500", inStock: true },
    { id: 3, name: "Jouet Interactif pour Chat", category: "cats", price: "19.99 DH", description: "Divertissez votre chat pendant des heures", image: "https://images.unsplash.com/photo-1529257414772-1960b7bea4eb?w=500", inStock: false },
    { id: 4, name: "Nourriture Premium pour Chiens", category: "dogs", price: "39.99 DH", description: "Repas nutritifs pour chiens en bonne santé", image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500", inStock: true },
    { id: 5, name: "Laisse et Collier", category: "dogs", price: "24.99 DH", description: "Ensemble de promenade confortable et élégant", image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500", inStock: true },
    { id: 6, name: "Jouets à Mâcher", category: "dogs", price: "34.99 DH", description: "Pack variété de jouets à mâcher durables", image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=500", inStock: true },
    { id: 7, name: "Mélange de Graines pour Oiseaux", category: "birds", price: "15.99 DH", description: "Mélange nutritif pour tous les oiseaux", image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=500", inStock: true },
    { id: 8, name: "Cage pour Oiseaux", category: "birds", price: "89.99 DH", description: "Maison spacieuse et confortable pour oiseaux", image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=500", inStock: true },
    { id: 9, name: "Ensemble de Jouets pour Oiseaux", category: "birds", price: "22.99 DH", description: "Jouets amusants pour oiseaux actifs", image: "https://images.unsplash.com/photo-1578828876330-5ac4ab90fdeb?w=500", inStock: true },
    { id: 10, name: "Flocons pour Poissons", category: "fish", price: "12.99 DH", description: "Nutrition premium pour poissons tropicaux", image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=500", inStock: true },
    { id: 11, name: "Filtre d'Aquarium", category: "fish", price: "49.99 DH", description: "Gardez l'eau de votre aquarium cristalline", image: "https://images.unsplash.com/photo-1520990269076-e7e0821a0a89?w=500", inStock: true },
    { id: 12, name: "Plantes Décoratives", category: "fish", price: "18.99 DH", description: "Belles décorations d'aquarium", image: "https://images.unsplash.com/photo-1524704796725-9fc3044a58b1?w=500", inStock: false },
    { id: 13, name: "Kit de Toilettage", category: "other", price: "32.99 DH", description: "Ensemble complet d'outils de toilettage", image: "https://images.unsplash.com/photo-1581888227599-779811939961?w=500", inStock: true },
    { id: 14, name: "Cage de Transport", category: "other", price: "54.99 DH", description: "Transport sûr et confortable pour animaux", image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500", inStock: true },
    { id: 15, name: "Lit pour Animaux", category: "other", price: "44.99 DH", description: "Espace de couchage confortable pour votre animal", image: "https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?w=500", inStock: true },
];

let gallery = [
    { id: 1, image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500", alt: "Chat Heureux" },
    { id: 2, image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500", alt: "Chien Mignon" },
    { id: 3, image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=500", alt: "Oiseau Coloré" },
    { id: 4, image: "https://images.unsplash.com/photo-1520990269076-e7e0821a0a89?w=500", alt: "Poisson Magnifique" },
    { id: 5, image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500", alt: "Chat Joueur" },
    { id: 6, image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500", alt: "Chien Heureux" },
];

// Load data from localStorage or use defaults
function loadFromStorage() {
    const savedProducts = localStorage.getItem('kindom_products');
    const savedGallery = localStorage.getItem('kindom_gallery');
    
    if (savedProducts) {
        products = JSON.parse(savedProducts);
    }
    if (savedGallery) {
        gallery = JSON.parse(savedGallery);
    }
}

// Save data to localStorage
function saveToStorage() {
    localStorage.setItem('kindom_products', JSON.stringify(products));
    localStorage.setItem('kindom_gallery', JSON.stringify(gallery));
}

// Initialize data
loadFromStorage();

// DOM Elements
const loginContainer = document.getElementById('loginContainer');
const adminDashboard = document.getElementById('adminDashboard');
const loginForm = document.getElementById('loginForm');
const logoutBtn = document.getElementById('logoutBtn');
const navItems = document.querySelectorAll('.nav-item:not(.logout-btn)');
const contentSections = document.querySelectorAll('.content-section');
const sectionTitle = document.getElementById('sectionTitle');

// Login Functionality
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Demo credentials
    if (username === 'admin' && password === 'admin123') {
        loginContainer.style.display = 'none';
        adminDashboard.style.display = 'grid';
        loadDashboard();
    } else {
        alert('Invalid credentials! Use: admin / admin123');
    }
});

// Logout
logoutBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to logout?')) {
        adminDashboard.style.display = 'none';
        loginContainer.style.display = 'flex';
        loginForm.reset();
    }
});

// Navigation
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const section = item.getAttribute('data-section');
        
        // Update active nav item
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        
        // Show selected section
        contentSections.forEach(sec => sec.classList.remove('active'));
        document.getElementById(section).classList.add('active');
        
        // Update title
        sectionTitle.textContent = item.textContent.trim();
        
        // Load section data
        if (section === 'products') loadProducts();
        if (section === 'gallery') loadGallery();
    });
});

// Load Dashboard Stats
function loadDashboard() {
    const inStockCount = products.filter(p => p.inStock).length;
    document.getElementById('totalProducts').textContent = products.length;
    document.getElementById('inStock').textContent = inStockCount;
    document.getElementById('galleryCount').textContent = gallery.length;
}

// Load Products Table
function loadProducts(filter = 'all', search = '') {
    const tableBody = document.getElementById('productsTableBody');
    let filteredProducts = products;
    
    if (filter !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === filter);
    }
    
    if (search) {
        filteredProducts = filteredProducts.filter(p => 
            p.name.toLowerCase().includes(search.toLowerCase()) ||
            p.description.toLowerCase().includes(search.toLowerCase())
        );
    }
    
    tableBody.innerHTML = filteredProducts.map(product => `
        <tr>
            <td>${product.id}</td>
            <td><img src="${product.image}" alt="${product.name}" class="product-img"></td>
            <td><strong>${product.name}</strong></td>
            <td><span style="text-transform: capitalize;">${product.category}</span></td>
            <td><strong>${product.price}</strong></td>
            <td>
                <span class="stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}">
                    ${product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
            </td>
            <td>
                <div class="action-btns">
                    <button class="action-btn btn-edit" onclick="editProduct(${product.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn btn-delete" onclick="deleteProduct(${product.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Filter and Search Products
document.getElementById('categoryFilter')?.addEventListener('change', (e) => {
    const search = document.getElementById('searchProducts').value;
    loadProducts(e.target.value, search);
});

document.getElementById('searchProducts')?.addEventListener('input', (e) => {
    const filter = document.getElementById('categoryFilter').value;
    loadProducts(filter, e.target.value);
});

// Product Modal Functions
function showAddProductModal() {
    document.getElementById('productModalTitle').textContent = 'Add Product';
    document.getElementById('productForm').reset();
    document.getElementById('productId').value = '';
    document.getElementById('productModal').classList.add('active');
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
}

function editProduct(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        document.getElementById('productModalTitle').textContent = 'Edit Product';
        document.getElementById('productId').value = product.id;
        document.getElementById('productName').value = product.name;
        document.getElementById('productCategory').value = product.category;
        document.getElementById('productPrice').value = product.price;
        document.getElementById('productDescription').value = product.description;
        document.getElementById('productImage').value = product.image;
        document.getElementById('productInStock').checked = product.inStock;
        document.getElementById('productModal').classList.add('active');
    }
}

function deleteProduct(id) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce produit?')) {
        products = products.filter(p => p.id !== id);
        saveToStorage();
        loadProducts();
        loadDashboard();
        showNotification('Produit supprimé avec succès!', 'success');
    }
}

// Save Product
document.getElementById('productForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const productData = {
        id: document.getElementById('productId').value || Date.now(),
        name: document.getElementById('productName').value,
        category: document.getElementById('productCategory').value,
        price: document.getElementById('productPrice').value,
        description: document.getElementById('productDescription').value,
        image: document.getElementById('productImage').value,
        inStock: document.getElementById('productInStock').checked
    };
    
    if (document.getElementById('productId').value) {
        // Update existing product
        const index = products.findIndex(p => p.id == productData.id);
        products[index] = productData;
        showNotification('Produit mis à jour avec succès!', 'success');
    } else {
        // Add new product
        products.push(productData);
        showNotification('Produit ajouté avec succès!', 'success');
    }
    
    saveToStorage();
    loadProducts();
    loadDashboard();
    closeProductModal();
});

// Load Gallery
function loadGallery() {
    const galleryGrid = document.getElementById('galleryAdminGrid');
    galleryGrid.innerHTML = gallery.map(item => `
        <div class="gallery-admin-item">
            <img src="${item.image}" alt="${item.alt}">
            <button class="gallery-delete-btn" onclick="deleteGalleryItem(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
}

// Gallery Modal Functions
function showAddGalleryModal() {
    document.getElementById('galleryModal').classList.add('active');
}

function closeGalleryModal() {
    document.getElementById('galleryModal').classList.remove('active');
    document.getElementById('galleryForm').reset();
}

function deleteGalleryItem(id) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette image?')) {
        gallery = gallery.filter(item => item.id !== id);
        saveToStorage();
        loadGallery();
        loadDashboard();
        showNotification('Image supprimée avec succès!', 'success');
    }
}

// Save Gallery Item
document.getElementById('galleryForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const galleryData = {
        id: Date.now(),
        image: document.getElementById('galleryImage').value,
        alt: document.getElementById('galleryAlt').value
    };
    
    gallery.push(galleryData);
    saveToStorage();
    loadGallery();
    loadDashboard();
    closeGalleryModal();
    showNotification('Image ajoutée avec succès!', 'success');
});

// Notification System
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 20px 30px;
        background: ${type === 'success' ? '#34C759' : '#FF3B30'};
        color: white;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        font-weight: 600;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Export Data (for saving to localStorage or server)
function exportData() {
    return {
        products: products,
        gallery: gallery
    };
}

// Import Data (for loading from localStorage or server)
function importData(data) {
    if (data.products) products = data.products;
    if (data.gallery) gallery = data.gallery;
    loadDashboard();
}

// Initialize
loadProducts();
loadGallery();

// Clear all data function
function clearAllData() {
    if (confirm('⚠️ ATTENTION!\n\nCela supprimera TOUS les produits et images de la galerie.\nCette action est irréversible!\n\nÊtes-vous absolument sûr?')) {
        if (confirm('Dernière confirmation: Supprimer TOUTES les données?')) {
            products = [];
            gallery = [];
            saveToStorage();
            loadProducts();
            loadGallery();
            loadDashboard();
            showNotification('Toutes les données ont été supprimées!', 'success');
        }
    }
}

console.log('Admin Panel Loaded Successfully! 👑');
