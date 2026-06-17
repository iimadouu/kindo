// Cloudflare Worker for R2 Image Upload
// Deploy this to Cloudflare Workers and bind it to your R2 bucket

export default {
  async fetch(request, env, ctx) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    // Only accept POST requests
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
  },
};
