import express from 'express';

const app = express();

/*
App object has a few methods:
1. HTTP/REST verbs!
    1. get - READ - DEFAULT for all browsers is get.
    2. post - CREATE
    3. delete - DELETE
    4. put - UPDATE
    5. all - I will accept any method

2. CRUD app cooresponence! Takes 2 args:
    1. path
    2. callback to run if an HTTP request that matchs THIS verb made to the path in #1
*/

app.get('/', (req, res) => {
  console.log(req);
  res.send(`<h1>Welcome to the home GET page!`);
});

app.post('/', (req, res) => {
  res.send(`<h1>Welcome to the home POST page!`);
});

app.delete('/', (req, res) => {});

app.put('/', (req, res) => {});

app.all('/', (req, res) => {
  res.send(`<h1>Welcome to the home page!`);
});

app.listen(3000, () => console.log('The server is listening on port 3000...'));
