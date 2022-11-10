const router = require('express').Router();
const { Post, Comment, User } = require('../models/')
const useAuth - require('../utils/auth');

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

