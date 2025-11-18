// index.js
const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Add CORS (useful so your React app can call it)
server.use(cors());
server.use(middlewares);

// Optional: add a prefix like /api
const API_PREFIX = process.env.API_PREFIX || '/';
if (API_PREFIX !== '/') server.use(API_PREFIX, router);
else server.use(router);

// Use the PORT env that Render provides, fallback to 10000 for local dev
const port = process.env.PORT || 10000;

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
