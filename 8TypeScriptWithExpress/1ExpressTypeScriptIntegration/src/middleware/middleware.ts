import { Request, Response, NextFunction } from 'express';

const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
  if (req?.session?.loggedIn) {
    next();
    return;
  }
  res.status(403);
  res.send('Not allowed');
};

export { requireAuth };
