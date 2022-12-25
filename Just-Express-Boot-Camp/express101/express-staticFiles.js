import express from 'express';
import path from 'path';
const app = express(); // Default export is app in Express

// 1. app comes with a use method
// 2. The use takes 1 arg (right now):

// serve up static files! Only 1 line... take that nodejs
app.use(express.static('public')); // To invoke the static function we ned to pass the dir which we need to make public i.e is public for now.

// app.use(express.static('node_modules')); No reasons to do it. Just for example

const __dirname = path.resolve();
console.log('__dirname', __dirname);

app.all('/', (req, res) => {
  // read in Node.html
  console.log(path.join(__dirname + '/node.html'));
  res.sendFile(path.join(__dirname + '/node.html'));
});

app.all('*', (req, res) => {
  res.send('<h1>Sorry Page not Found!</h1>');
});

app.listen(3000, () => console.log('The server is listening on port 3000...'));

// To access the files from public folder.
// No need to put public as public is already assumed.
// localhost:PORT/node.png
// localhost:PORT/styles.css
