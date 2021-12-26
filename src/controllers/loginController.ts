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
  if (email && password) {
    res.send(`Form Submitted Successfully email+pass=${email + password}`);
  } else {
    res.send(`Please Provide Both email and Password`);
  }
};

export { getLoginDetails, loginHandler };

// By creating interface we can deal with this poor type defs but this is not a good way to deal with this type issue as every time wa have to remember this RequestWithBody interface.
