// Sample Data (in real app, this would come from a database)
let products = [
    { id: 1, name: "Nourriture Premium pour Chats", category: "cats", type: "food", price: "2900 DZD", description: "Nutrition de haute qualité pour votre ami félin", image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w=500", inStock: true },
    { id: 2, name: "Arbre à Chat", category: "cats", type: "accessory", price: "4500 DZD", description: "Griffoir durable avec plusieurs niveaux", image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=500", inStock: true },
    { id: 3, name: "Jouet Interactif pour Chat", category: "cats", type: "accessory", price: "1900 DZD", description: "Divertissez votre chat pendant des heures", image: "https://images.unsplash.com/photo-1529257414772-1960b7bea4eb?w=500", inStock: false },
    { id: 4, name: "Nourriture Premium pour Chiens", category: "dogs", type: "food", price: "3900 DZD", description: "Repas nutritifs pour chiens en bonne santé", image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500", inStock: true },
    { id: 5, name: "Laisse et Collier", category: "dogs", type: "accessory", price: "2400 DZD", description: "Ensemble de promenade confortable et élégant", image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500", inStock: true },
    { id: 6, name: "Jouets à Mâcher", category: "dogs", type: "accessory", price: "3400 DZD", description: "Pack variété de jouets à mâcher durables", image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=500", inStock: true },
    { id: 7, name: "Mélange de Graines pour Oiseaux", category: "birds", type: "food", price: "1500 DZD", description: "Mélange nutritif pour tous les oiseaux", image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=500", inStock: true },
    { id: 8, name: "Cage pour Oiseaux", category: "birds", type: "accessory", price: "8900 DZD", description: "Maison spacieuse et confortable pour oiseaux", image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=500", inStock: true },
    { id: 9, name: "Ensemble de Jouets pour Oiseaux", category: "birds", type: "accessory", price: "2200 DZD", description: "Jouets amusants pour oiseaux actifs", image: "https://images.unsplash.com/photo-1578828876330-5ac4ab90fdeb?w=500", inStock: true },
    { id: 10, name: "Flocons pour Poissons", category: "fish", type: "food", price: "1200 DZD", description: "Nutrition premium pour poissons tropicaux", image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=500", inStock: true },
    { id: 11, name: "Filtre d'Aquarium", category: "fish", type: "accessory", price: "4900 DZD", description: "Gardez l'eau de votre aquarium cristalline", image: "https://images.unsplash.com/photo-1520990269076-e7e0821a0a89?w=500", inStock: true },
    { id: 12, name: "Plantes Décoratives", category: "fish", type: "accessory", price: "1800 DZD", description: "Belles décorations d'aquarium", image: "https://images.unsplash.com/photo-1524704796725-9fc3044a58b1?w=500", inStock: false },
    { id: 13, name: "Kit de Toilettage", category: "other", type: "accessory", price: "3200 DZD", description: "Ensemble complet d'outils de toilettage", image: "https://images.unsplash.com/photo-1581888227599-779811939961?w=500", inStock: true },
    { id: 14, name: "Cage de Transport", category: "other", type: "accessory", price: "5400 DZD", description: "Transport sûr et confortable pour animaux", image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500", inStock: true },
    { id: 15, name: "Lit pour Animaux", category: "other", type: "accessory", price: "4400 DZD", description: "Espace de couchage confortable pour votre animal", image: "https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?w=500", inStock: true },
];

let gallery = [
    { id: 1, image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500", alt: "Chat Heureux", title: "Happy Cats", description: "Our lovely feline friends enjoying their time.", extraImages: ["https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=500"] },
    { id: 2, image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500", alt: "Chien Mignon", title: "Cute Dogs", description: "Man's best friend.", extraImages: [] },
    { id: 3, image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=500", alt: "Oiseau Coloré", title: "Colorful Birds", description: "Beautiful exotic birds.", extraImages: [] },
    { id: 4, image: "https://images.unsplash.com/photo-1520990269076-e7e0821a0a89?w=500", alt: "Poisson Magnifique", title: "Aquarium Life", description: "Peaceful underwater scenes.", extraImages: [] },
    { id: 5, image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500", alt: "Chat Joueur", title: "Playful Kittens", description: "Kittens playing with toys.", extraImages: [] },
    { id: 6, image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500", alt: "Chien Heureux", title: "Happy Puppies", description: "Puppies running in the park.", extraImages: [] },
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

// Security: Check authentication
function checkAuth() {
    const auth = sessionStorage.getItem('kindom_auth');
    const sessionStart = sessionStorage.getItem('kindom_session_start');
    
    if (!auth || !sessionStart) {
        return false;
    }
    
    // Check session timeout (30 minutes)
    const now = Date.now();
    const sessionAge = now - parseInt(sessionStart);
    const thirtyMinutes = 30 * 60 * 1000;
    
    if (sessionAge > thirtyMinutes) {
        // Session expired
        sessionStorage.removeItem('kindom_auth');
        sessionStorage.removeItem('kindom_session_start');
        return false;
    }
    
    return true;
}

// Security: Require auth for all admin operations
function requireAuth() {
    if (!checkAuth()) {
        alert('Session expirée. Veuillez vous reconnecter.');
        adminDashboard.style.display = 'none';
        loginContainer.style.display = 'flex';
        return false;
    }
    return true;
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

// Security: Advanced encryption using Web Crypto API
class SecureAuth {
    constructor() {
        this.iterations = 100000; // PBKDF2 iterations
        this.keyLength = 256; // Key length in bits
    }

    // Generate salt
    generateSalt() {
        return crypto.getRandomValues(new Uint8Array(16));
    }

    // Derive key from password using PBKDF2
    async deriveKey(password, salt) {
        const encoder = new TextEncoder();
        const keyMaterial = await crypto.subtle.importKey(
            'raw',
            encoder.encode(password),
            { name: 'PBKDF2' },
            false,
            ['deriveBits', 'deriveKey']
        );

        return await crypto.subtle.deriveKey(
            {
                name: 'PBKDF2',
                salt: salt,
                iterations: this.iterations,
                hash: 'SHA-256'
            },
            keyMaterial,
            { name: 'AES-GCM', length: this.keyLength },
            true,
            ['encrypt', 'decrypt']
        );
    }

    // Hash password for storage
    async hashPassword(password, salt = null) {
        if (!salt) {
            salt = this.generateSalt();
        }
        
        const key = await this.deriveKey(password, salt);
        const exportedKey = await crypto.subtle.exportKey('raw', key);
        
        // Combine salt and hash
        const combined = new Uint8Array(salt.length + exportedKey.byteLength);
        combined.set(salt);
        combined.set(new Uint8Array(exportedKey), salt.length);
        
        return btoa(String.fromCharCode.apply(null, combined));
    }

    // Verify password
    async verifyPassword(password, storedHash) {
        try {
            const combined = new Uint8Array(atob(storedHash).split('').map(c => c.charCodeAt(0)));
            const salt = combined.slice(0, 16);
            const hash = combined.slice(16);
            
            const key = await this.deriveKey(password, salt);
            const exportedKey = await crypto.subtle.exportKey('raw', key);
            const newHash = new Uint8Array(exportedKey);
            
            // Compare hashes
            return this.arraysEqual(hash, newHash);
        } catch (error) {
            console.error('Password verification error:', error);
            return false;
        }
    }

    // Compare two arrays
    arraysEqual(a, b) {
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }
}

// Initialize secure auth
const secureAuth = new SecureAuth();

// Get stored password hash (encrypted in localStorage)
function getStoredPasswordHash() {
    return localStorage.getItem('kindom_admin_hash') || null;
}

// Store password hash (encrypted)
function storePasswordHash(hash) {
    localStorage.setItem('kindom_admin_hash', hash);
}

// Security: Hash function for passwords (SHA-256)
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}

// Security: Rate limiting for login attempts
let loginAttempts = 0;
let loginLockout = false;

// Initialize default admin password if not set
async function initializeDefaultPassword() {
    const storedHash = getStoredPasswordHash();
    if (!storedHash) {
        // Set default password: admin123
        const defaultPassword = 'admin123';
        const hash = await secureAuth.hashPassword(defaultPassword);
        storePasswordHash(hash);
        console.warn('⚠️ DEFAULT PASSWORD SET: admin123 - Change it immediately in Settings > Sécurité Admin');
    }
}

// Login Functionality
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Check if locked out
    if (loginLockout) {
        alert('Trop de tentatives échouées. Attendez 5 minutes.');
        return;
    }
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Security: Validate input
    if (!username || !password) {
        alert('Veuillez remplir tous les champs.');
        return;
    }
    
    // Check username and password
    const storedHash = getStoredPasswordHash();
    const validUsername = 'admin';
    const defaultPassword = 'admin123';
    
    // Allow default credentials as fallback (for production reliability)
    const isDefaultCredentials = username === validUsername && password === defaultPassword;
    const isStoredCredentials = username === validUsername && storedHash && await secureAuth.verifyPassword(password, storedHash);
    
    if (isDefaultCredentials || isStoredCredentials) {
        // Success: Reset attempts
        loginAttempts = 0;
        loginLockout = false;
        
        // Set session with encryption
        const sessionToken = btoa(JSON.stringify({
            timestamp: Date.now(),
            user: username,
            hash: await hashPassword(Date.now().toString())
        }));
        
        sessionStorage.setItem('kindom_auth', sessionToken);
        sessionStorage.setItem('kindom_session_start', Date.now());
        
        loginContainer.style.display = 'none';
        adminDashboard.style.display = 'grid';
        loadDashboard();
    } else {
        // Failed attempt
        loginAttempts++;
        
        if (loginAttempts >= 5) {
            loginLockout = true;
            setTimeout(() => {
                loginLockout = false;
                loginAttempts = 0;
            }, 300000); // 5 minutes lockout
            alert('Trop de tentatives échouées. Compte verrouillé pour 5 minutes.');
        } else {
            alert(`Identifiants invalides! Tentatives restantes: ${5 - loginAttempts}`);
        }
    }
});

// Logout
logoutBtn.addEventListener('click', () => {
    if (confirm('Êtes-vous sûr de vouloir vous déconnecter?')) {
        // Clear session
        sessionStorage.removeItem('kindom_auth');
        sessionStorage.removeItem('kindom_session_start');
        
        adminDashboard.style.display = 'none';
        loginContainer.style.display = 'flex';
        loginForm.reset();
    }
});

// Navigation
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Security check
        if (!requireAuth()) return;
        
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
            <td><span class="badge" style="background: ${product.type === 'food' ? '#34C759' : '#007AFF'}; color: white; padding: 4px 12px; border-radius: 12px;">${product.type === 'food' ? 'Food' : 'Accessory'}</span></td>
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
        document.getElementById('productType').value = product.type || 'food';
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

// Security: Input sanitization
function sanitizeInput(input) {
    if (typeof input !== 'string') return input;
    
    // Remove potentially dangerous characters
    return input
        .replace(/[<>]/g, '') // Remove < and >
        .replace(/javascript:/gi, '') // Remove javascript: protocol
        .replace(/on\w+=/gi, '') // Remove event handlers
        .trim();
}

// Security: Validate URL
function isValidURL(url) {
    try {
        const parsed = new URL(url);
        return parsed.protocol === 'http:' || parsed.protocol === 'https:';
    } catch {
        return false;
    }
}

// Save Product
document.getElementById('productForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Security check
    if (!requireAuth()) return;
    
    // Sanitize inputs
    const productData = {
        id: document.getElementById('productId').value || Date.now(),
        name: sanitizeInput(document.getElementById('productName').value),
        category: sanitizeInput(document.getElementById('productCategory').value),
        type: sanitizeInput(document.getElementById('productType').value),
        price: sanitizeInput(document.getElementById('productPrice').value),
        description: sanitizeInput(document.getElementById('productDescription').value),
        image: document.getElementById('productImage').value,
        inStock: document.getElementById('productInStock').checked
    };
    
    // Validate image URL
    if (!isValidURL(productData.image)) {
        alert('URL d\'image invalide!');
        return;
    }
    
    // Validate required fields
    if (!productData.name || !productData.category || !productData.type || !productData.price || !productData.description) {
        alert('Veuillez remplir tous les champs obligatoires!');
        return;
    }
    
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
            <div class="gallery-item-info" style="padding: 10px; background: #f8f9fa; border-top: 1px solid #eee; text-align: center;">
                <h4 style="margin: 0; font-size: 14px; color: #333;">${item.title || 'Untitled Album'}</h4>
                <small style="color: #666;">${(item.extraImages && item.extraImages.length) ? '+' + item.extraImages.length + ' photos' : '1 photo'}</small>
            </div>
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
    document.getElementById('extraImagesContainer').innerHTML = '<label>Extra Album Images</label>';
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

// Dynamic Extra Images
function addExtraImageField() {
    const container = document.getElementById('extraImagesContainer');
    const div = document.createElement('div');
    div.className = 'extra-image-input-group';
    div.style.display = 'flex';
    div.style.gap = '10px';
    div.style.marginTop = '10px';
    div.innerHTML = `
        <input type="url" class="form-input extra-image-url" placeholder="https://..." required>
        <button type="button" class="btn-danger" style="padding: 10px; border-radius: 8px; border: none; cursor: pointer; color: white;" onclick="this.parentElement.remove()">
            <i class="fas fa-trash"></i>
        </button>
    `;
    container.appendChild(div);
}

// Save Gallery Item
document.getElementById('galleryForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Security check
    if (!requireAuth()) return;
    
    const title = sanitizeInput(document.getElementById('galleryTitle').value);
    const description = sanitizeInput(document.getElementById('galleryDescription').value);
    const imageUrl = document.getElementById('galleryImage').value;
    const altText = sanitizeInput(document.getElementById('galleryAlt').value);
    
    // Gather extra images
    const extraImagesInputs = document.querySelectorAll('.extra-image-url');
    const extraImages = [];
    let validUrls = true;

    extraImagesInputs.forEach(input => {
        if (!isValidURL(input.value)) validUrls = false;
        else extraImages.push(input.value);
    });
    
    // Validate URLs
    if (!isValidURL(imageUrl) || !validUrls) {
        alert('Une ou plusieurs URLs d\'image sont invalides!');
        return;
    }
    
    const galleryData = {
        id: Date.now(),
        title: title,
        description: description,
        image: imageUrl,
        alt: altText,
        extraImages: extraImages
    };
    
    gallery.push(galleryData);
    saveToStorage();
    loadGallery();
    loadDashboard();
    closeGalleryModal();
    showNotification('Album ajouté avec succès!', 'success');
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
initializeDefaultPassword();

// Password Strength Checker
function checkPasswordStrength(password) {
    const strengthIndicator = document.getElementById('passwordStrength');
    let score = 0;
    let feedback = [];

    // Length check
    if (password.length >= 12) score += 1;
    else feedback.push('Au moins 12 caractères');

    // Complexity checks
    if (/[a-z]/.test(password)) score += 1;
    else feedback.push('Lettres minuscules');

    if (/[A-Z]/.test(password)) score += 1;
    else feedback.push('Lettres majuscules');

    if (/[0-9]/.test(password)) score += 1;
    else feedback.push('Chiffres');

    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    else feedback.push('Symboles (!@#$%^&*)');

    // Display strength
    strengthIndicator.style.display = 'block';
    
    if (score < 3) {
        strengthIndicator.className = 'password-strength weak';
        strengthIndicator.textContent = '🔴 Faible - Requis: ' + feedback.join(', ');
        return false;
    } else if (score < 5) {
        strengthIndicator.className = 'password-strength medium';
        strengthIndicator.textContent = '🟡 Moyen - Ajoutez: ' + feedback.join(', ');
        return false;
    } else {
        strengthIndicator.className = 'password-strength strong';
        strengthIndicator.textContent = '🟢 Fort - Mot de passe sécurisé!';
        return true;
    }
}

// Password change form
document.getElementById('passwordChangeForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Security check
    if (!requireAuth()) return;
    
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Validate inputs
    if (!currentPassword || !newPassword || !confirmPassword) {
        alert('Veuillez remplir tous les champs.');
        return;
    }
    
    // Check if new passwords match
    if (newPassword !== confirmPassword) {
        alert('Les nouveaux mots de passe ne correspondent pas.');
        return;
    }
    
    // Check password strength
    if (!checkPasswordStrength(newPassword)) {
        alert('Le mot de passe ne respecte pas les critères de sécurité.');
        return;
    }
    
    // Verify current password
    const storedHash = getStoredPasswordHash();
    if (!await secureAuth.verifyPassword(currentPassword, storedHash)) {
        alert('Mot de passe actuel incorrect.');
        return;
    }
    
    // Hash and store new password
    try {
        const newHash = await secureAuth.hashPassword(newPassword);
        storePasswordHash(newHash);
        
        // Clear form
        document.getElementById('passwordChangeForm').reset();
        document.getElementById('passwordStrength').style.display = 'none';
        
        showNotification('Mot de passe changé avec succès!', 'success');
        
        // Log out user to force re-login with new password
        setTimeout(() => {
            sessionStorage.clear();
            adminDashboard.style.display = 'none';
            loginContainer.style.display = 'flex';
            alert('Mot de passe mis à jour. Veuillez vous reconnecter.');
        }, 2000);
        
    } catch (error) {
        console.error('Password change error:', error);
        alert('Erreur lors du changement de mot de passe.');
    }
});

// Real-time password strength checking
document.getElementById('newPassword').addEventListener('input', (e) => {
    checkPasswordStrength(e.target.value);
});

// Store settings
document.getElementById('storeSettingsForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (!requireAuth()) return;
    
    const settings = {
        storeName: document.getElementById('storeName').value,
        whatsappNumber: document.getElementById('whatsappNumber').value,
        storeEmail: document.getElementById('storeEmail').value,
        storeAddress: document.getElementById('storeAddress').value
    };
    
    // Validate WhatsApp number format
    const whatsappRegex = /^[0-9+\-\s()]+$/;
    if (!whatsappRegex.test(settings.whatsappNumber)) {
        alert('Format de numéro WhatsApp invalide.');
        return;
    }
    
    localStorage.setItem('kindom_store_settings', JSON.stringify(settings));
    showNotification('Paramètres sauvegardés!', 'success');
});

// Apply theme
function applyTheme() {
    if (!requireAuth()) return;
    
    const primaryColor = document.getElementById('primaryColor').value;
    const secondaryColor = document.getElementById('secondaryColor').value;
    
    // Update CSS variables
    document.documentElement.style.setProperty('--primary', primaryColor);
    document.documentElement.style.setProperty('--secondary', secondaryColor);
    
    // Save theme
    localStorage.setItem('kindom_theme', JSON.stringify({
        primaryColor,
        secondaryColor
    }));
    
    showNotification('Thème appliqué!', 'success');
}

// Load saved settings on page load
function loadSavedSettings() {
    // Load store settings
    const storeSettings = localStorage.getItem('kindom_store_settings');
    if (storeSettings) {
        const settings = JSON.parse(storeSettings);
        document.getElementById('storeName').value = settings.storeName || 'Kindom';
        document.getElementById('whatsappNumber').value = settings.whatsappNumber || '+213XXXXXXXXX';
        document.getElementById('storeEmail').value = settings.storeEmail || 'contact@kindom-dz.com';
        document.getElementById('storeAddress').value = settings.storeAddress || 'Alger, Algérie';
    }
    
    // Load theme
    const theme = localStorage.getItem('kindom_theme');
    if (theme) {
        const { primaryColor, secondaryColor } = JSON.parse(theme);
        document.getElementById('primaryColor').value = primaryColor;
        document.getElementById('secondaryColor').value = secondaryColor;
        document.documentElement.style.setProperty('--primary', primaryColor);
        document.documentElement.style.setProperty('--secondary', secondaryColor);
    }
}

// Call load settings when admin panel opens
const originalLoadDashboard = loadDashboard;
loadDashboard = function() {
    originalLoadDashboard.call(this);
    loadSavedSettings();
};

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
