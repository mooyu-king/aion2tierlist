import { onRequestGet } from './region.mjs';
const worker = {
    async fetch(request, env) {
        const path = new URL(request.url).pathname;
        if (path === '/api/region' || path === '/api/region/') {
            if (request.method !== 'GET' && request.method !== 'HEAD') {
                return new Response(JSON.stringify({ error: 'Method not allowed' }), {
                    status: 405,
                    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'private, no-store', Allow: 'GET, HEAD' },
                });
            }
            const response = await onRequestGet({ request });
            return request.method === 'HEAD' ? new Response(null, { headers: response.headers }) : response;
        }
        if (path === '/api' || path.startsWith('/api/')) {
            return new Response(JSON.stringify({ error: 'Not found' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'private, no-store' },
            });
        }
        return env.ASSETS.fetch(request);
    },
};
export default worker;
