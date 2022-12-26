import express from 'express';
import helmet from 'helmet';

const app = express();

app.use(helmet());

app.use(express.static('public')); // The Dir which we want to serve

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // This will actually parse the req.body for us.

// 1. static
// 2. json
// 3. urlencoded

app.post('/ajax', (req, res) => {
  console.log('REQ BODY', req.body);
  res.json(['Test', 1, 2, 3, 4]);
});

app.listen(3000, () => {
  console.log('Server listening on 3000');
});
