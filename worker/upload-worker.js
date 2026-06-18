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
            settings[row.setting_key] = row.setting_value;
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
