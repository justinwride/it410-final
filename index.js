const path = require('path');
const express = require('express');
const Enforcer = require('openapi-enforcer-middleware');
const posts = require('./controllers/posts');
const app = express();
const port = 5000;

app.use(express.json());

const enforcer = Enforcer('./openapi.yaml');

enforcer.mocks(path.resolve(__dirname, 'controllers'), true)
    .catch(() => {});

// custom middleware to print the path and method
app.use((req, res, next) => {
    console.log('\nRequest path:', req.path);
    console.log('Request method:', req.method);
    next();
});
// custom middleware to add to req or res and then access
app.use((req, res, next) => {
    res.locals.name = 'Custom Name!';
    next();
});

app.use(enforcer.middleware());

// post routes
// app.use(posts);

app.get('/', (req, res) => {
    // access a property
    res.send('Hello World!<br><br>NAME: ' + res.locals.name);
});

app.listen(port, () => console.log(`\nLisenting on port ${port}...\n`));