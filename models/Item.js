const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");
const { User, Topic } = require("../../tech-blob/models");

class Item extends Model {}

Item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
    display_url: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    name: {
      type: DataTypes.STRING,
    },
    comment_area: {
        type: DataTypes.STRING, 
    },
    topic_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "topic",
        key: "id",
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "item",
  }
);

module.exports = Item;
