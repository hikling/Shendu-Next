export function createRequest(onUnauthorized) {
  return async function request(path, options = {}) {
    const opts = {
      credentials: 'same-origin',
      ...options,
      headers: {
        ...(options.body && !(options.body instanceof Blob) && !(options.body instanceof ArrayBuffer) ? { 'Content-Type': 'application/json' } : {}),
        ...(options.headers || {})
      }
    };
    if (opts.body && opts.headers['Content-Type'] === 'application/json' && typeof opts.body !== 'string') opts.body = JSON.stringify(opts.body);
    const response = await fetch(path, opts);
    const contentType = response.headers.get('content-type') || '';
    const data = contentType.includes('json') ? await response.json() : await response.blob();
    if (!response.ok) {
      if (response.status === 401) onUnauthorized?.(path);
      const error = new Error(data.message || '请求失败');
      error.code = data.error;
      error.status = response.status;
      throw error;
    }
    return data;
  };
}
