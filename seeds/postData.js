const { Post } = require('../models');

const postdata = 
[
    {
        "postHead": "Content",
        "postBody": "Body",
        "userId": 1
    },
    {
        "postHead": "Content",
        "postBody": "Body",
        "userId": 2
    },
    {
        "postHead": "Content",
        "postBody": "Body",
        "userId": 3
    },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;