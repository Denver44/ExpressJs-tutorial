// express.Router()
import express from 'express';
import helmet from 'helmet';

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

app.use(helmet());

const router = require('./theRouter');
const userRouter = require('./userRouter');

app.use('/', router);
app.use('/user', userRouter);

app.listen(3000, () => console.log('Server Started on 3000.'));
