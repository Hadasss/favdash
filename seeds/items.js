const { Item } = require("../models");

const itemsData = [
  {
    url: "www.google.com",
    display_url: "Google",
    user_id: 1,
    topic_id: 1,
  },
  {
    url: "www.yahoo.com",
    display_url: "Yahoo",
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
