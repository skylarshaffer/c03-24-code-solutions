import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('Hello, World!');
  console.log('The date is', new Date(), req.method, req.path);
  if (req.method === 'GET') {
    if (req.path === '/') {
      res.send('just slash');
    } else if (req.path === '/notes') {
      res.send('slash notes');
    }
  } else if (req.method === 'POST' && req.path === '/notes/123') {
    res.send('post notes 123');
  }
  next();
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
