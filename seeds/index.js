const seedUsers = require('./User');
const seedItems = require('./Item');
const seedTopics = require('./Topic');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedItems();
  console.log('--------------');

  await seedTopics();
  console.log('--------------');

  process.exit(0);
};

seedAll();
