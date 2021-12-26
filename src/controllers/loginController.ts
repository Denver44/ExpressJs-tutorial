import { Request, Response } from 'express';

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

const loginHandler = (req: Request, res: Response) => {
  const { email, password } = req.body;
  res.send(`Form Submitted Successfully email+pass=${email + password}`);
};

export { getLoginDetails, loginHandler };
