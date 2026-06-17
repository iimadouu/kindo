# Cloudflare D1 Database Deployment Guide

This guide explains how to set up Cloudflare D1 database for persistent settings storage.

## Prerequisites
- Wrangler CLI installed
- Logged in to Cloudflare (`wrangler login`)

## Step 1: Create D1 Database

```bash
wrangler d1 create kindom-db
```

This will output a database ID. Copy it for the next step.

## Step 2: Update wrangler.toml

The `wrangler.toml` file already has the D1 binding configured. If you need to update the database name, edit:

```toml
[[d1_databases]]
binding = "DB"
database_name = "kindom-db"
database_id = "YOUR_DATABASE_ID_HERE"  # Add this line with the ID from step 1
```

## Step 3: Initialize Database Schema

```bash
wrangler d1 execute kindom-db --file=./schema.sql
```

This will create the tables and insert default settings.

## Step 4: Deploy Worker with D1 Binding

```bash
wrangler deploy
```

The Worker will now have access to the D1 database via the `env.DB` binding.

## Step 5: Verify Settings API

Test the settings endpoints:

```bash
# Get all settings
curl https://kindom-upload-worker.imadedar98.workers.dev/settings

# Update settings (example)
curl -X PUT https://kindom-upload-worker.imadedar98.workers.dev/settings \
  -H "Content-Type: application/json" \
  -d '{"store_name":"Kindom","primary_color":"#FF6B6B"}'
```

## What This Solves

**Before:** Settings were stored in localStorage (browser-specific, lost on cache clear, not shared across devices)

**After:** Settings are stored in Cloudflare D1 database (persistent across browsers/devices, shared for all users)

## API Endpoints

- `GET /settings` - Retrieve all settings from database
- `PUT /settings` - Update settings (JSON body with key-value pairs)
- `POST /upload` - Upload images to R2 (unchanged)

## Database Schema

The `settings` table stores:
- `store_name` - Store name
- `whatsapp_number` - WhatsApp contact number
- `email` - Store email
- `address_fr` - Address in French
- `primary_color` - Theme primary color
- `secondary_color` - Theme secondary color
- And other store settings

## Fallback Behavior

The admin panel includes fallback to localStorage if the D1 database is unavailable, ensuring the settings form still works during development or outages.
