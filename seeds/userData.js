const { User } = require('../models');

const userdata = 
[
    {
        "username": "xXUsernameXx",
        "password": "donttellanyone"
    },
    {
        "username": "xXUsernameXx2",
        "password": "donttellanyone2"
    },
    {
        "username": "xXUsernameXx3",
        "password": "donttellanyone3"
    },
];

const seedUser = () => User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUser;