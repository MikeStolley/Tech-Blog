const router = require('express').Router();
const { Comment } = require('../../models/');
const useAuth = require('../../utils/auth')

router.get('/', useAuth, async (req, res) => {
    try {
        const commentAll = await Comment.findAll({
            include: [User],
        });
        const comments = commentData.map((comment) => comment.get ({ plain:true }));
        res.render('single-post', {comments, loggedIn: req.session.loggedIn});
    } catch(err) {
        res.status(500).json(err)
    }
});

// Router POST would go below