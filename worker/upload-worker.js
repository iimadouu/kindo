// Cloudflare Worker for R2 Image Upload and Settings API
// Deploy this to Cloudflare Workers and bind it to your R2 bucket and D1 database

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    // Settings API endpoints
    if (path === '/settings') {
      if (!env.DB) {
        return new Response(JSON.stringify({ error: 'D1 database not bound. Set binding = "DB" in wrangler.toml and redeploy.' }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      }

      if (request.method === 'GET') {
        try {
          const result = await env.DB.prepare('SELECT setting_key, setting_value FROM settings').all();
          const settings = {};
          result.results.forEach(row => {
            // Exclude password hash from public settings response
            if (row.setting_key !== 'admin_password_hash') {
              settings[row.setting_key] = row.setting_value;
            }
          });
          return new Response(JSON.stringify(settings), {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
        } catch (error) {
          console.error('Settings fetch error:', error);
          return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
        }
      }

      if (request.method === 'PUT') {
        try {
          const body = await request.json();
          const updates = [];

          for (const [key, value] of Object.entries(body)) {
            updates.push(
              env.DB.prepare(
                'INSERT INTO settings (setting_key, setting_value) VALUES (?, ?) ON CONFLICT(setting_key) DO UPDATE SET setting_value = ?, updated_at = CURRENT_TIMESTAMP'
              ).bind(key, String(value), String(value)).run()
            );
          }

          await Promise.all(updates);

          return new Response(JSON.stringify({ success: true }), {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
        } catch (error) {
          console.error('Settings update error:', error);
          return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
        }
      }
    }

    // Products API endpoints
    if (path === '/products') {
      if (!env.DB) {
        return new Response(JSON.stringify({ error: 'D1 database not bound' }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      }

      if (request.method === 'GET') {
        try {
          const result = await env.DB.prepare('SELECT * FROM products ORDER BY created_at DESC').all();
          return new Response(JSON.stringify(result.results), {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
        } catch (error) {
          console.error('Products fetch error:', error);
          return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
        }
      }

      if (request.method === 'POST') {
        try {
          const body = await request.json();
          const result = await env.DB.prepare(
            'INSERT INTO products (name, name_ar, name_en, category, price, description, description_ar, description_en, image_url, in_stock, featured, keywords, type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
          ).bind(
            body.name,
            body.name_ar || null,
            body.name_en || null,
            body.category,
            body.price,
            body.description,
            body.description_ar || null,
            body.description_en || null,
            body.image_url,
            body.in_stock ? 1 : 0,
            body.featured ? 1 : 0,
            body.keywords || null,
            body.type
          ).run();

          return new Response(JSON.stringify({ success: true, id: result.meta.last_row_id }), {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
        } catch (error) {
          console.error('Product create error:', error);
          return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
        }
      }

      if (request.method === 'PUT') {
        try {
          const body = await request.json();
          await env.DB.prepare(
            'UPDATE products SET name = ?, name_ar = ?, name_en = ?, category = ?, price = ?, description = ?, description_ar = ?, description_en = ?, image_url = ?, in_stock = ?, featured = ?, keywords = ?, type = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?'
          ).bind(
            body.name,
            body.name_ar || null,
            body.name_en || null,
            body.category,
            body.price,
            body.description,
            body.description_ar || null,
            body.description_en || null,
            body.image_url,
            body.in_stock ? 1 : 0,
            body.featured ? 1 : 0,
            body.keywords || null,
            body.type,
            body.id
          ).run();

          return new Response(JSON.stringify({ success: true }), {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
        } catch (error) {
          console.error('Product update error:', error);
          return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
        }
      }

      if (request.method === 'DELETE') {
        try {
          const body = await request.json();
          await env.DB.prepare('DELETE FROM products WHERE id = ?').bind(body.id).run();

          return new Response(JSON.stringify({ success: true }), {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
        } catch (error) {
          console.error('Product delete error:', error);
          return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
        }
      }
    }

    // Gallery API
    if (path === '/gallery') {
      if (request.method === 'GET') {
        try {
          const result = await env.DB.prepare('SELECT * FROM gallery ORDER BY created_at DESC').all();
          return new Response(JSON.stringify(result.results), {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
        } catch (error) {
          console.error('Gallery fetch error:', error);
          return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
        }
      }

      if (request.method === 'POST') {
        try {
          const body = await request.json();
          await env.DB.prepare(
            'INSERT INTO gallery (image_url, title, title_ar, title_en, description, description_ar, description_en, extra_images) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
          ).bind(
            body.image_url,
            body.title || null,
            body.title_ar || null,
            body.title_en || null,
            body.description || null,
            body.description_ar || null,
            body.description_en || null,
            body.extra_images ? JSON.stringify(body.extra_images) : null
          ).run();

          return new Response(JSON.stringify({ success: true }), {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
        } catch (error) {
          console.error('Gallery create error:', error);
          return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
        }
      }

      if (request.method === 'PUT') {
        try {
          const body = await request.json();
          await env.DB.prepare(
            'UPDATE gallery SET image_url = ?, title = ?, title_ar = ?, title_en = ?, description = ?, description_ar = ?, description_en = ?, extra_images = ? WHERE id = ?'
          ).bind(
            body.image_url,
            body.title || null,
            body.title_ar || null,
            body.title_en || null,
            body.description || null,
            body.description_ar || null,
            body.description_en || null,
            body.extra_images ? JSON.stringify(body.extra_images) : null,
            body.id
          ).run();

          return new Response(JSON.stringify({ success: true }), {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
        } catch (error) {
          console.error('Gallery update error:', error);
          return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
        }
      }

      if (request.method === 'DELETE') {
        try {
          const body = await request.json();
          await env.DB.prepare('DELETE FROM gallery WHERE id = ?').bind(body.id).run();

          return new Response(JSON.stringify({ success: true }), {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
        } catch (error) {
          console.error('Gallery delete error:', error);
          return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
        }
      }
    }

    // Image upload endpoint
    if (path === '/upload') {
      if (request.method !== 'POST') {
        return new Response('Method not allowed', { status: 405 });
      }

      try {
        const formData = await request.formData();
        const file = formData.get('file');
        const folder = formData.get('folder') || 'products';

        if (!file) {
          return new Response('No file provided', { status: 400 });
        }

        // Generate unique filename
        const timestamp = Date.now();
        const random = Math.random().toString(36).substring(7);
        const extension = file.name.split('.').pop();
        const filename = `${folder}/${timestamp}-${random}.${extension}`;

        // Upload to R2
        await env.BUCKET.put(filename, file);

        // Return public URL
        const publicUrl = `https://pub-943bd5d0ce6f4df9b0b9cbc05bec9e54.r2.dev/${filename}`;

        return new Response(JSON.stringify({ url: publicUrl }), {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      } catch (error) {
        console.error('Upload error:', error);
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      }
    }

    return new Response('Not found', { status: 404 });
  },
};
