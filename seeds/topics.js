const { Topic } = require("../models");

const topicsData = [
  {
    name: "search engines",
    user_id: 1,
  },
  {
    name: "css frameworks",
    user_id: 1,
  },
  {
    name: "funny cat videos",
    user_id: 1,
  },
];

const seedTopics = () => Topic.bulkCreate(topicsData);

module.exports = seedTopics;
