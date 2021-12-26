import { Router } from 'express';
import { loginHandler } from '../../controllers/loginController';

const loginRouter = Router();
loginRouter.get('/', loginHandler);

export default loginRouter;
