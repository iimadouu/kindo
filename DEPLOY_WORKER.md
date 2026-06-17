# Deploy Cloudflare Worker for R2 Image Uploads

## Prerequisites
- Node.js installed
- Wrangler CLI installed: `npm install -g wrangler`
- Cloudflare account with R2 bucket created

## Step 1: Login to Cloudflare
```bash
wrangler login
```

## Step 2: Deploy the Worker
```bash
cd /home/iimadouu/Desktop/petstore
wrangler deploy
```

## Step 3: Get Worker URL
After deployment, Wrangler will output the Worker URL. It will look like:
```
https://kindom-upload-worker.YOUR_SUBDOMAIN.workers.dev
```

## Step 4: Update admin-script.js
Open `admin-script.js` and update line 182:
```javascript
const WORKER_URL = 'https://kindom-upload-worker.YOUR_SUBDOMAIN.workers.dev';
```

Replace with your actual Worker URL.

## Step 5: Test
1. Open admin.html in your browser
2. Login with admin/admin123
3. Try adding a product with an image upload
4. Check if the image uploads successfully to R2

## Cost Optimization Features Implemented
✅ **Image URL caching** - Same files aren't re-uploaded
✅ **Lazy loading** - Images load only when visible
✅ **Cloudflare CDN** - Automatic caching via R2 public URL
✅ **Folder organization** - Products in /products, Gallery in /gallery

## Notes
- The Worker is configured to use the `kindo-images` R2 bucket
- Images are stored with unique filenames (timestamp-random)
- Public URL: https://pub-943bd5d0ce6f4df9b0b9cbc05bec9e54.r2.dev
- No backend needed - Worker handles uploads securely
