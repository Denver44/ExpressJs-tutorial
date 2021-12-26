import express, { Request, Response } from 'express';
import { loginRouter } from './routes/index';
const PORT: Number = 3000;

const app = express();
app.use(express.json());

app.use('/login', loginRouter);

app.listen(PORT, () => {
  console.log('Listening on Port ', PORT);
});
