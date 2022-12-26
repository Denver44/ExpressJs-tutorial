import express from 'express';
import path from 'path';
import helmet from 'helmet';

const app = express();
app.use(helmet()); //MY BAD... HELMET ON... READY FOR BATTLE!

app.use(express.static('public')); // serve up static files

app.use(express.json()); // parse json and urlencoded data into req.body
app.use(express.urlencoded());

const __dirname = path.resolve();

// app.set(), takes 2 args: 1. key & 2. value

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/*
1. Express as we know it happens. This File.
2. We define a view engine. 1. EJS 2. Mustache 3. Handlebars 4. Jade/Pug
3. Inside one of our routes, we have a res.render
4. We pass that res.render 2 things: 1. The file we want to use. 2. The data we want to send to that file
5. Express uses the node module for our specified view engine and parses the file. - that means, it takes the HTML/JS/CSS and combines it with whatever "node" there is in the file
6. The final result of this process is a compiled product of the things the browser can read - HTML, JS, CSS.
*/

app.get('/', (req, res, next) => {
  res.render('index');
});

app.listen(3000);
