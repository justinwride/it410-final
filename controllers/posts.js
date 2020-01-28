const express = require('express');

const router = express.Router();

// get posts
router.get('/posts', (req, res) => {
    res.json([]);
});

// create a post
router.post('/posts', (req, res) => {
    res.send('Success');
});

// get a single post
router.get('/posts/:postId', (req, res) => {
    res.json({});
});

// delete a post
router.delete('/posts/:postId', (req, res) => {
    res.send('success');
});

// create a comment
router.post('/comment/:postId', (req, res) => {
    res.json({});
});

// get a list of comments
router.get('/posts/:postId/comments', (req, res) => {
    res.json([]);
});

// edit the text of a comment
router.put('/comments/:commentId', (req, res) => {
    res.json({});
});

// delete a comment
router.delete('/comments/:commentId', (req, res) => {
    res.send('success');
});

// log in
router.post('/login', (req, res) => {
    res.send('success');
});

// log out
router.get('/logout', (req, res) => {
    res.send('success');
});

// create a user
router.post('/users', (req, res) => {
    res.send('success');
});

// edit a user
router.put('/users/:userId', (req, res) => {
    res.send('success');
});

// delete a user
router.post('/users/:userId', (req, res) => {
    res.send('success');
});

// favorite a user
router.put('/users/:userId/favorite', (req, res) => {
    res.send('success');
});

// unfavorite a user
router.delete('/users/:userId/favorite', (req, res) => {
    res.send('success');
});

module.exports = router;