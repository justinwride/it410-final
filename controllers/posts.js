const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');

const router = express.Router();

// read, write, update, delete

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

// get users
router.get('/users', (req, res) => {
    User.find((err, users) => {
        console.log(users, typeof (users));
        res.send(JSON.stringify(users));
    });
});

// create a user
router.post('/users', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const avatar = req.body.avatar;
    const user = new User({
        name: name,
        email: email,
        avatar: avatar
    });
    user.save();
    res.send('User added');
});

// edit a user
router.put('/users/:userId', (req, res) => {
    const id = req.params.userId;
    const update = {
        name: req.body.name,
        email: req.body.email,
        avatar: req.body.avatar
    }
    User.findByIdAndUpdate(id, update);
    res.send('User updated');
});

// delete a user
router.delete('/users/:userId', (req, res) => {
    const id = req.params.userId;
    User.findByIdAndDelete(id).catch(err => {
        console.log(err);
    });
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