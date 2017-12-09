import express from 'express';
import bodyparser from 'body-parser';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.static(path.join(__dirname, '/../client/public/'), bodyparser()));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/public/index.html'));
});
const port = process.env.PORT;

app.listen(port, () =>
  console.log('listening to port', port));

