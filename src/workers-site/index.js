import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  try {
    // 使用 KV Asset Handler 获取静态文件
    const response = await getAssetFromKV(event, {
      mapRequestToAsset: req => {
        // 让 Cloudflare Workers 正常路由到 index.html 或其他文件
        const url = new URL(req.url);
        if (url.pathname === '/') {
          url.pathname = '/index.html';
        }
        return new Request(url.toString(), req);
      },
    });
    return response;
  } catch (e) {
    // 如果发生错误（如找不到文件），返回 404
    return new Response('404 Not Found', { status: 404 });
  }
}
