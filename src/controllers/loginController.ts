import { Request, Response } from 'express';

const loginHandler = (req: Request, res: Response) => {
  res.send(`<h1> All fine Buddy Just Smile 😃!</h1>`);
};

export { loginHandler };
