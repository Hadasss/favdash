const router = require("express").Router();
const { stat } = require("fs");
const sequelize = require("../../config/connection");
const { User, Topic, Item } = require("../../models");
const withAuth = require("../../utils/authentication");

// get all items
router.get("/", withAuth, (req, res) => {
  Item.findAll({
    include: [
      {
        model: Topic,
        attributes: ["id", "name"],
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbItemData) => res.json(dbItemData))
    .catch((err) => res.status(500).json(err));
});

// get single item
router.get("/:id", withAuth, (req, res) => {
  Item.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "url", "name", "comment_area"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbItemData) => {
      if (!dbItemData) {
        res.status(400).json({ message: "No item was found with this id" });
        return;
      }
      res.json(dbItemData);
    })
    .catch((err) => res.status(500).json(err));
});

// post new item
router.post("/", withAuth, (req, res) => {
  Item.create({
    name: req.body.name,
    url: req.body.url,
    comment_area: req.body.comment_area,
    user_id: req.session.user_id,
    topic_id: req.body.topic_id,
  })
    .then((dbItemData) => res.json(dbItemData))
    .catch((err) => res.status(500).json(err));
});

// update item
router.put("/:id", withAuth, (req, res) => {
  Item.update(req.body, {
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Topic,
        attributes: ["id"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbItemData) => {
      if (!dbItemData) {
        res.status(400).json({ message: "No item was found with this id" });
        return;
      }
      res.json(dbItemData);
    })
    .catch((err) => res.status(500).json(err));
});

router.delete("/:id", withAuth, (req, res) => {
  Item.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbItemData) => {
      if (!dbItemData) {
        res.status(400).json({ message: "No item was found with this id" });
        return;
      }
      res.json(dbItemData);
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
