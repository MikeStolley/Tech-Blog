const router = require('express').Router();
const { Post, Comment, User } = require('../models/')
const useAuth = require('../utils/auth');


// GET all posts
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [User],
        })
        const posting = postData.map((post) => postData.get({ plain: true }))
        res.render('all-posts', { posts, loggedIn: req.session.loggedIn})
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single post
router.get('/post/:id', useAuth, async(req, res) => {
    try {
        const postData = await Post.findOne({
            where: {id: req.params.id},
            include: [
                User,
                {
                    model: Comment,
                    include: [User],
                },
            ],
        });
        if (postData) {
            const posts = postData.get({ plain: true });
            res.render('single-post', { post, loggedIn: req.session.loggedIn })
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err)
    }
});

// GET the login and signup routes

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
        return;
    }

    res.render('signup')
});

module.exports = router;


