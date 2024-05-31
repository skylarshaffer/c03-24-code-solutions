import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log(new Date(), req.method, req.path);
  next();
});

app.get('/', (req, res) => {
  res.send('get slash');
});

app.get('/notes', (req, res) => {
  res.send('get slash notes');
});

app.post('/notes/123', (req, res) => {
  res.send('post slash notes 123');
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
