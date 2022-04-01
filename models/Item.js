const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");
const { Item } = require("../../tech-blob/models");

class Item extends Model {}

Item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4],
      },
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl,
        },
    },
    comment_area: {
        type: DataTypes.STRING,
        allowNull: false,   
    },
    topic_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Topic",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "item",
  }
);

module.exports = Item;