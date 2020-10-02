const express = require('express');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');
// if views folder are in different files, den u set it with
// app.set('views', 'views_name');

// middleware concept
/* app.use((req, res, next) => {
    console.log('new request made');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    // next allow the next request to go on
    next();
}); */


// listen to requests
app.listen(3000);

app.get('/', (req, res) => {
    // res.send('<p>Home page</p>');
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
});

app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});