// loggingMiddleware.js

function loggingMiddleware(req, res, next) {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;

    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} - ${res.statusCode} - ${duration}ms`);

    // Optional: log request body for debugging (be careful with sensitive data)
    if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
      console.log('Request Body:', req.body);
    }
  });

  next(); // Don't forget to call next(), or the request will hang
}

module.exports = loggingMiddleware;
