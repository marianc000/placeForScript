const express = require('express');
const http = require('http');
const app = express();
const port = 8888;
const staticRoot = '.';

app.use(express.static(staticRoot, {
  etag: true,
  lastModified: true,
  setHeaders(res, path) {
    // res.setHeader('Cache-Control', 'no-store, max-age=0')
    //  res.setHeader('Cache-Control', 'no-cache')
     res.setHeader('Cache-Control', 'public, max-age=604800, immutable')
   // res.setHeader('Cache-Control', 'stale-while-revalidate=3600')
  }
}));

const server = http.createServer(app).listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});