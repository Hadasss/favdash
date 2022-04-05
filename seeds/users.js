const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'morninnnng',
    password: 'password123'
  },
  {
    username: 'goodbyeee',
    password: 'password123'
  },
  {
    username: 'hellloo',
    password: 'password123'
  },
  {
    username: 'goooood',
    password: 'password123'
  },
  {
    username: 'bobbbby',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
