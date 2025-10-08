import { createVercelCompleteHandler } from 'netlify-cms-oauth-provider-node';

// OAuth callback endpoint for Decap CMS GitHub backend
export default createVercelCompleteHandler({}, { useEnv: true });
