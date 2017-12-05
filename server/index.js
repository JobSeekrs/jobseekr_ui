const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/public/')), bodyparser());

const port = 3000;

app.listen(port, function() {
  console.log('listening to port', port);
});
