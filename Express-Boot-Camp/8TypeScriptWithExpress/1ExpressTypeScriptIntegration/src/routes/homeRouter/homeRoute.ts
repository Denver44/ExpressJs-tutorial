import { Router } from 'express';
import { getHomePage, getLogout } from '../../controllers/homeController';
import { requireAuth } from '../../middleware/middleware';

const homeRouter = Router();
homeRouter.route('/').get(requireAuth, getHomePage);
homeRouter.route('/logout').get(getLogout);

export default homeRouter;
