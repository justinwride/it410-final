const path = require('path');
const express = require('express');
const Enforcer = require('openapi-enforcer-middleware');
const posts = require('./controllers/posts');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const parser = require('body-parser');

const url = 'mongodb://localhost:27017/social';
// const url = 'mongodb://mongo:27017/social';
mongoose.connect(url, {
    useNewUrlParser: true
}).then(() => {
    console.log('Mongoose connected!');
}).catch(err => {
    console.log('Could not connect.', err);
});

// mongo
// https://www.npmjs.com/package/mongodb
// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017';
// const url = 'mongodb://mongo:27017';
// MongoClient.connect(url, function (err, client) {
//     // assert.equal(null, err);
//     if (err) {
//         console.log('Could not connect', err);
//     } else {
//         console.log('Successfully connected to Mongo!');
//     }
//     // const db = client.db('myProject');
//     // client.close();
// });

app.use(express.json());
app.use(parser());

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

// app.use(enforcer.middleware());

// post routes
app.use(posts);

app.get('/', (req, res) => {
    // access a property
    res.send('Hello World!<br><br>NAME: ' + res.locals.name);
});

app.listen(port, () => console.log(`\nLisenting on port ${port}...\n`));