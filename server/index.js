import express from 'express';
import bodyparser from 'body-parser';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.static(path.join(__dirname, '/../client/public/'), bodyparser()));
<<<<<<< HEAD
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/public/index.html'));
});
=======

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/public/index.html'));
});

>>>>>>> [add]
const port = process.env.PORT;

app.listen(port, () =>
  console.log('listening to port', port));

