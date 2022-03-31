const seedUsers = require("./users");
const seedTopics = require("./topics");
const seedItems = require("./items");
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n=======DATABASE SYNCED=========\n");
  await seedUsers();
  console.log("\n========USERS SEEDED=========\n");
  await seedTopics();
  console.log("\n=======TOPICS SEEDED=========\n");
  await seedItems();
  console.log("\n========ITEMS SEEDED=========\n");

  process.exit(0);
};

seedAll();

module.exports = seedAll;
