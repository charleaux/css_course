const express = require('express');
// const http = require('http');
const path = require('path');
const app = express();
const port = 3000;
const reload = require('reload');

const publicDir = path.join(__dirname, '..', 'public');

app.use(express.static(publicDir));
// const server = http.createServer(app);
reload(app);

app.listen(port, () => {
  console.log('listening on port', port);
});
