import express from 'express';

const app = express();

app.listen(4000, () => {
  console.log('HTTP backend listening on port 4000');
});