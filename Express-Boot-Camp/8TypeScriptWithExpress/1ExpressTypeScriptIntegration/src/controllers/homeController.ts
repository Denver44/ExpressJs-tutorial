import { Request, Response } from 'express';

const getHomePage = (req: Request, res: Response) => {
  if (req?.session?.loggedIn) {
    res.send(
      `
      <div>
      <div> You are Logged In 😄</div>
      <a href="/logout">Logout</a>
      </div>
      `
    );
  } else {
    res.send(
      `
      <div>
      <div> You are not Logged In</div>
      <a href="/login">Login</a>
      </div>
      `
    );
  }
};
const getLogout = (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
};

export { getHomePage, getLogout };
