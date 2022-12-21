import { Request, Response } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const formTemplate = `
<form method="POST">
  <div>
    <label>Email</label>
    <input name="email" />
  </div>
  <div>
    <label>Password</label>
    <input name="password" type="password" />
  </div>
  <button>Submit</button>
</form>
`;

const getLoginDetails = (req: Request, res: Response) => {
  res.send(formTemplate);
};

const loginHandler = (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;
  if (
    email &&
    password &&
    email == 'admin@admin.com' &&
    password === 'test@123'
  ) {
    req.session = { loggedIn: true };
    res.redirect('/');
  } else {
    res.send(`Both email and Password are wrong`);
  }
};

export { getLoginDetails, loginHandler };
