import express from 'express';
// import http  from 'http'; // http is a native module

const app = express(); // An "app" is the express function (createAppliction inside the Express module) invoked and is an Express appliction

/*
all is a method, and it takes 2 args:
  1. Route 
  2. Callback to run if the route is requested
*/

app.all('*', (req, res) => {
  //  Express handles the basic headers (status code, mime-type)! Awesome!
  res.send(`<h1>This is the home page</h1>`);
  //Express handles the end! Awesome!
});

app.listen(3000, () => console.log('The server is listening on port 3000...'));

/*
Notes:
1. NODEJS IS the language
2. Express is node, a node module
3. --save means it will automatcially add it to dependencies in package.json.
*/
