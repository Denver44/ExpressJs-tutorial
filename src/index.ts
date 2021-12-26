import express from 'express';
import { homeRouter, loginRouter } from './routes/index';
import cookieSession from 'cookie-session';
const PORT: Number = 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded()); // This actually helps us to get the body from request
app.use(cookieSession({keys : ['secretSession']}); // This helps us to get session from request

app.use('/login', loginRouter);
app.use('/', homeRouter);

app.listen(PORT, () => {
  console.log('Listening on Port ', PORT);
});
