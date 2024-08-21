function setupProxy({ tls }) {
  const serverResources = ['/api', '/services', '/management', '/v3/api-docs', '/h2-console', '/health'];
  const conf = [
    {
      context: serverResources,
      target: `http${tls ? 's' : ''}://localhost:8088`,
      secure: false,
      changeOrigin: tls,
    },
    {
      context: ['/websocket'],
      target: 'ws://127.0.0.1:8088',
      ws: true,
    },
  ];
  return conf;
}

module.exports = setupProxy;
