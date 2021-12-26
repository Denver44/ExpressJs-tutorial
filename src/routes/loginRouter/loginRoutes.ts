import { Router } from 'express';
import {
  getLoginDetails,
  loginHandler,
} from '../../controllers/loginController';

const loginRouter = Router();
loginRouter.get('/', getLoginDetails);
loginRouter.post('/', loginHandler);

export default loginRouter;
