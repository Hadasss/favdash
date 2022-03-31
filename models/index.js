const User = require("./User");
const Topic = require("./Topic");
const Item = require("./Item");

User.hasMany(Topic, {
  foreignKey: "user_id",
});

Topic.belongsTo(User, {
  foreignKey: "user_id",
});

Topic.hasMany(Item, {
  foreignKey: "topic_id",
});

Item.belongsTo(Topic, {
  foreignKey: "topic_id",
});

module.exports = { User, Topic, Item };
