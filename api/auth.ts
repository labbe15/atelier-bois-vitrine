import { createVercelBeginHandler } from 'netlify-cms-oauth-provider-node';

// OAuth start endpoint for Decap CMS GitHub backend
// Requires env vars on Vercel:
// - OAUTH_CLIENT_ID
// - OAUTH_CLIENT_SECRET
// - COMPLETE_URL (e.g. https://atelier-bois-vitrine.vercel.app/api/callback)
// - ORIGIN (e.g. atelier-bois-vitrine.vercel.app)
export default createVercelBeginHandler({}, { useEnv: true });
