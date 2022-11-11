const router = require('express').Router();
const { Post } = require('../../models/');
const useAuth = require('../../utils/auth');

// POST to create
router.post('/', useAuth, async (req, res) => {
    const body = req.body
    try {
        const posts = await Post.create({ body, userId: req.session.userId })
        res.json(newPost);
    } catch(err) {
        res.status(500).json(err)
    }
});

//PUT to update
router.put('/:id', useAuth, async (req, res) => {
    try {
        const rows = await Post.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        if (rows > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    } catch(err) {
        res.status(500).json(err);
    }
});

//DELETE to Delete
router.delete('/:id', useAuth, async (req, res) => {
    try {
        const rows = await Post.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (rows > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;