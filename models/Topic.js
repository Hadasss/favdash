const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");
<<<<<<< HEAD
const { User } = require("../models");
=======
>>>>>>> 76207e1f70b55b1c5cd9b8a674f849ff004d0718

class Topic extends Model {}

Topic.init(
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
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "topic",
  }
);

module.exports = Topic;
