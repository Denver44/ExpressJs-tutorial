import express from 'express';
const app = express();

/*
 Express is 2 things
1. Router
2. Middleware that comprises a WEB Framework
3. Req ---MIDDLEWARE---> Res (Middleware function is ANY function that has access to the req, res and next object)
    Use Case of MiddleWare : 
    1. Request comes in.
    2. We need to validate the user, sometimes.
    3. We need to store some things in the DB.
    4. If there is data from the user we need to parse it and store it
    5. Finally we will Response to User.
*/

// THis next make its middleware.
function validateUser(req, res, next) {
  //1. get info out of the req object
  //2. do some stuff with the DB
  res.locals.validated = true; // Response object has a property called Locals
  console.log('VALIDATED RAN!');
  next();
}

app.use(validateUser); // This will run validateUser on ALL paths, all methods!

app.use('/admin', validateUser); // This will run validateUser on /admin, all methods!

app.get('/', validateUser); // this will run validateUser on /, only on get methods! And, by the way, it looks like this...

app.get('/', (req, res, next) => {
  res.send('<h1>Main Page</h1>');
  console.log(res.locals.validated);
});

app.get('/admin', (req, res, next) => {
  res.send('<h1>Admin Page</h1>');
  console.log(res.locals.validated);
});

app.listen(3000, () => {
  console.log('Server listening on 3000');
});
