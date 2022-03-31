const sequelize = require('../config/connection');
const { User, Post } = require('../models');


const userdata = [
    {
      username: 'example1',
      email: 'hello2@cbc.ca',
      password: 'password123'
    },
    {
      username: 'example2',
      email: 'hello1@cnn.com',
      password: 'password123'
    }
  ];
  
  const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});
  
  module.exports = seedUsers;