const { Item } = require("../models");

const itemsData = [
  {
    url: "www.google.com",
    name: "Google",
    user_id: 1,
    topic_id: 1,
  },
  {
    url: "www.yahoo.com",
    name: "Yahoo",
    user_id: 1,
    topic_id: 1,
  },
  {
    url: "www.bulma.com",
    user_id: 1,
    topic_id: 2,
  },
];

const seedItems = () => Item.bulkCreate(itemsData);

module.exports = seedItems;
