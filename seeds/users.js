const { User } = require("../models");

const userData = [
  {
    username: "Steve",
  },
  {
    username: "Shelly",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
