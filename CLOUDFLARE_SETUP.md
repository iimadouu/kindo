# 🚀 Configuration Cloudflare Workers + D1 Database

Guide complet pour déployer Kindom avec une base de données persistante.

---

## 📋 Prérequis

1. Compte Cloudflare (gratuit): https://dash.cloudflare.com/sign-up
2. Node.js installé: https://nodejs.org/ (version 16+)
3. Compte GitHub (déjà fait ✅)

---

## Étape 1: Installer Wrangler CLI

```bash
npm install -g wrangler

# Vérifier l'installation
wrangler --version
```

---

## Étape 2: Se Connecter à Cloudflare

```bash
wrangler login
```

Cela ouvrira votre navigateur pour autoriser Wrangler.

---

## Étape 3: Créer la Base de Données D1

```bash
cd /home/iimadouu/Desktop/petstore

# Créer la base de données
wrangler d1 create kindom-db
```

**Output attendu:**
```
✅ Successfully created DB 'kindom-db'
Created your database using D1's new storage backend.
The new storage backend is faster and supports larger databases.

binding = "DB"
database_name = "kindom-db"
database_id = "xxxxx-xxxx-xxxx-xxxx-xxxxxxxx"
```

**IMPORTANT:** Copiez le `database_id` et mettez-le dans `wrangler.toml`!

---

## Étape 4: Mettre à Jour wrangler.toml

Ouvrez `wrangler.toml` et remplacez `YOUR_DATABASE_ID_HERE` par votre vrai ID:

```toml
[[d1_databases]]
binding = "DB"
database_name = "kindom-db"
database_id = "xxxxx-xxxx-xxxx-xxxx-xxxxxxxx"  # ← VOTRE ID ICI
```

---

## Étape 5: Initialiser la Base de Données

```bash
# Exécuter le schéma SQL
wrangler d1 execute kindom-db --file=schema.sql --remote
```

Cela va créer toutes les tables (products, gallery, settings, etc.).

---

## Étape 6: Déployer le Worker

```bash
wrangler deploy
```

**Output attendu:**
```
✨ Success! Uploaded 1 file
🌎 https://kindom-api.YOUR-SUBDOMAIN.workers.dev
```

**IMPORTANT:** Notez l'URL de votre Worker API!

---

## Étape 7: Configurer l'API Client

Ouvrez `api-client.js` et remplacez l'URL:

```javascript
const API_BASE_URL = 'https://kindom-api.YOUR-SUBDOMAIN.workers.dev';
```

Par votre vraie URL Worker.

---

## Étape 8: Ajouter l'API Client au Site

Dans `index.html`, ajoutez avant `</body>`:

```html
<script src="api-client.js"></script>
```

Dans `admin.html`, ajoutez aussi:

```html
<script src="api-client.js"></script>
```

---

## Étape 9: Mettre à Jour script.js et admin-script.js

### A. Modifier `script.js`

Remplacez la fonction `loadDataFromStorage()` par:

```javascript
// Load from API instead of localStorage
async function loadDataFromStorage() {
    try {
        const { products } = await api.getProducts();
        productsData = {
            cats: products.filter(p => p.category === 'cats'),
            dogs: products.filter(p => p.category === 'dogs'),
            birds: products.filter(p => p.category === 'birds'),
            fish: products.filter(p => p.category === 'fish'),
            other: products.filter(p => p.category === 'other')
        };
        
        const { gallery } = await api.getGallery();
        galleryData = gallery;
    } catch (error) {
        console.error('Failed to load data from API:', error);
        // Fallback to sample data if API fails
    }
}
```

### B. Modifier `admin-script.js`

Remplacez les fonctions de sauvegarde:

```javascript
// Save product to API
async function saveProduct(productData) {
    try {
        if (productData.id) {
            await api.updateProduct(productData);
        } else {
            await api.createProduct(productData);
        }
        await loadProducts();
        showNotification('Produit sauvegardé!', 'success');
    } catch (error) {
        showNotification('Erreur: ' + error.message, 'error');
    }
}

// Delete product from API
async function deleteProduct(id) {
    try {
        await api.deleteProduct(id);
        await loadProducts();
        showNotification('Produit supprimé!', 'success');
    } catch (error) {
        showNotification('Erreur: ' + error.message, 'error');
    }
}
```

---

## Étape 10: Tester l'API

```bash
# Test: Récupérer tous les produits
curl https://kindom-api.YOUR-SUBDOMAIN.workers.dev/api/products

# Test: Récupérer les paramètres
curl https://kindom-api.YOUR-SUBDOMAIN.workers.dev/api/settings
```

---

## Étape 11: Push sur GitHub

```bash
git add .
git commit -m "Add Cloudflare Workers API with D1 Database"
git push origin main
```

---

## Étape 12: Déployer sur Cloudflare Pages

1. Allez sur: https://dash.cloudflare.com/
2. **Workers & Pages** → **Create application** → **Pages**
3. Connectez GitHub → Sélectionnez `iimadouu/kindo`
4. Configuration:
   - **Build command:** (vide)
   - **Build output directory:** `/`
5. **Variables d'environnement:**
   - Nom: `API_BASE_URL`
   - Valeur: `https://kindom-api.YOUR-SUBDOMAIN.workers.dev`
6. **Save and Deploy**

---

## 🎉 C'est Fini!

Votre site est maintenant connecté à une vraie base de données!

### 🌐 URLs:
- **Site Web:** `https://kindom.pages.dev`
- **API Worker:** `https://kindom-api.YOUR-SUBDOMAIN.workers.dev`
- **Admin Panel:** `https://kindom.pages.dev/admin.html`

---

## 🔐 Sécurité: Changer le Mot de Passe Admin

### Option 1: Via la Base de Données

```bash
# Générer un hash bcrypt pour votre nouveau mot de passe
# Utilisez: https://bcrypt-generator.com/

wrangler d1 execute kindom-db --remote \
  --command="UPDATE admin_users SET password_hash='VOTRE_HASH_ICI' WHERE username='admin'"
```

### Option 2: Ajouter l'Authentification JWT

Modifiez `worker.js` pour utiliser JWT tokens et bcrypt pour les mots de passe.

---

## 📊 Gérer Vos Données

### Ajouter des Produits Sample

```bash
wrangler d1 execute kindom-db --remote --command="
INSERT INTO products (name, name_ar, name_en, category, price, description, image_url, in_stock, keywords)
VALUES 
('Croquettes Premium Chien', 'طعام كلاب ممتاز', 'Premium Dog Food', 'dogs', '2500 DZD', 'Nourriture complète pour chiens adultes', 'https://example.com/dog-food.jpg', 1, 'croquettes chien algerie'),
('Nourriture Chat Royal Canin', 'طعام قطط رويال كانين', 'Royal Canin Cat Food', 'cats', '1800 DZD', 'Alimentation équilibrée pour chats', 'https://example.com/cat-food.jpg', 1, 'nourriture chat royal canin alger');
"
```

### Backup de la Base de Données

```bash
wrangler d1 backup create kindom-db
wrangler d1 backup list kindom-db
```

---

## 🚨 Dépannage

### Problème: "Database not found"
**Solution:** Vérifiez que le `database_id` dans `wrangler.toml` est correct.

### Problème: CORS errors
**Solution:** Les headers CORS sont déjà configurés dans `worker.js`.

### Problème: "Unauthorized"
**Solution:** Implémentez l'authentification JWT dans le Worker.

---

## 📈 Prochaines Améliorations

1. **Authentification JWT:** Tokens sécurisés pour l'admin
2. **Upload d'Images:** Cloudflare Images ou R2
3. **Cache:** Cloudflare KV pour performances
4. **Analytics:** Cloudflare Web Analytics
5. **Email:** Workers + SendGrid pour notifications

---

## 📞 Support

- **Cloudflare Docs:** https://developers.cloudflare.com/
- **D1 Database:** https://developers.cloudflare.com/d1/
- **Workers:** https://workers.cloudflare.com/

---

**Félicitations! Votre boutique e-commerce est maintenant professionnelle! 🎊**
