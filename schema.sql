-- Kindom Database Schema for Cloudflare D1
-- Pet store with products, gallery, and settings

-- Products Table
CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    name_ar TEXT,
    name_en TEXT,
    category TEXT NOT NULL,
    price TEXT NOT NULL,
    description TEXT NOT NULL,
    description_ar TEXT,
    description_en TEXT,
    image_url TEXT NOT NULL,
    in_stock BOOLEAN DEFAULT 1,
    featured BOOLEAN DEFAULT 0,
    keywords TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Gallery Table
CREATE TABLE IF NOT EXISTS gallery (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    image_url TEXT NOT NULL,
    title TEXT NOT NULL,
    title_ar TEXT,
    title_en TEXT,
    description TEXT,
    description_ar TEXT,
    description_en TEXT,
    alt_text TEXT NOT NULL,
    category TEXT,
    display_order INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Settings Table
CREATE TABLE IF NOT EXISTS settings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    setting_key TEXT UNIQUE NOT NULL,
    setting_value TEXT NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Admin Users Table (for authentication)
CREATE TABLE IF NOT EXISTS admin_users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    email TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    last_login DATETIME
);

-- SEO Content Table (for AI visibility)
CREATE TABLE IF NOT EXISTS seo_content (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    page_name TEXT NOT NULL,
    meta_title TEXT NOT NULL,
    meta_title_ar TEXT,
    meta_title_en TEXT,
    meta_description TEXT NOT NULL,
    meta_description_ar TEXT,
    meta_description_en TEXT,
    keywords TEXT,
    structured_data TEXT,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Insert default settings
INSERT INTO settings (setting_key, setting_value) VALUES
    ('store_name', 'Kindom'),
    ('whatsapp_number', '213XXXXXXXXX'),
    ('email', 'contact@kindom-dz.com'),
    ('address_fr', 'Alger, Algérie'),
    ('address_ar', 'الجزائر، الجزائر'),
    ('address_en', 'Algiers, Algeria'),
    ('currency', 'DZD'),
    ('business_hours', '09:00 - 18:00'),
    ('country', 'DZ'),
    ('language_default', 'fr'),
    ('primary_color', '#FF6B6B'),
    ('secondary_color', '#4ECDC4');

-- Insert default admin user (password: admin123 - CHANGE THIS!)
INSERT INTO admin_users (username, password_hash, email) VALUES
    ('admin', '$2a$10$rZ5qLvHvVjLvRxLQvFQj0.YHp9P7vZwKfCxQN9fYwKoP5vZwKfCxQ', 'admin@kindom-dz.com');

-- Insert SEO content for main pages (Algeria-focused)
INSERT INTO seo_content (page_name, meta_title, meta_title_ar, meta_title_en, meta_description, meta_description_ar, meta_description_en, keywords) VALUES
    ('home', 
     'Kindom - Nourriture et Accessoires pour Animaux en Algérie | Chiens, Chats, Oiseaux, Poissons',
     'كيندوم - طعام وإكسسوارات الحيوانات الأليفة في الجزائر | كلاب، قطط، طيور، أسماك',
     'Kindom - Pet Food and Accessories in Algeria | Dogs, Cats, Birds, Fish',
     'Découvrez Kindom, votre boutique spécialisée en nourriture et accessoires pour animaux domestiques en Algérie. Large sélection de produits premium pour chiens, chats, oiseaux et poissons. Livraison rapide à Alger et dans toute l''Algérie. Commandez via WhatsApp.',
     'اكتشف كيندوم، متجرك المتخصص في طعام وإكسسوارات الحيوانات الأليفة في الجزائر. مجموعة واسعة من المنتجات الفاخرة للكلاب والقطط والطيور والأسماك. توصيل سريع في الجزائر وجميع أنحاء الجزائر. اطلب عبر واتساب.',
     'Discover Kindom, your specialized pet food and accessories store in Algeria. Wide selection of premium products for dogs, cats, birds and fish. Fast delivery in Algiers and throughout Algeria. Order via WhatsApp.',
     'nourriture animaux algerie, accessoires animaux domestiques, animalerie alger, croquettes chien algerie, nourriture chat algerie, graines oiseaux, aquarium poisson, pet shop algeria, pet food dz, animal food store algeria, طعام الحيوانات الجزائر, متجر حيوانات أليفة');

-- Create indexes for better performance
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_in_stock ON products(in_stock);
CREATE INDEX idx_products_featured ON products(featured);
CREATE INDEX idx_gallery_category ON gallery(category);
CREATE INDEX idx_gallery_order ON gallery(display_order);
CREATE INDEX idx_seo_page ON seo_content(page_name);
