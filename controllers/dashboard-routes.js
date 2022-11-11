const router = require('express').Router();
const { Post, User } = require('../models/');
const useAuth = require('../utils/auth');

// GET all Dashboard posts
router.get('/', useAuth, async (req,res) => {
    try{
        const postData = await Post.findAll({
            where:{'userId': req.session.userId},
            include:[User]
        });
        const posting = postData.map((post) => post.get({ plain: true }));
        res.render('all-posts', {
            layout:'dashboard', 
            posts
        });
    } catch (err) {
        res.redirect('login')
    }
});


// GET new post 
router.get('/new', useAuth, (req, res) => {
    res.render('new-post', {
        layout: 'dashboard',
    });
});


module.exports = router;