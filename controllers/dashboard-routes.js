const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Topic, Item } = require("../models");
const withAuth = require("../utils/authentication");

router.get("/", withAuth, (req, res) => {
  Topic.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "name"],
    include: [
      {
        model: Item,
        attributes: ["id", "url", "name", "comment_area"],
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
    .then((dbTopicData) => {
      const topics = dbTopicData.map((topic) => topic.get({ plain: true }));
      res.render("dashboard", { topics, loggedIn: true });
    })
    .catch((err) => res.status(500).json(err));
});

router.get("/", withAuth, (req, res) => {
  Item.findAll({
    attributes: ["id", "name", "url", "comment_area", "topic_id"],
    include: [
      {
        model: Topic,
        attributes: ["id", "name"],
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
      const items = dbItemData.map((item) => item.get({ plain: true }));
      res.render("dashboard", { items, loggedIn: true });
    })
    .catch((err) => res.status(500).json(err));
});

router.get("/add-item/:id", withAuth, (req, res) => {
  res.render("add-item");
});

router.get("/edit/:id", withAuth, (req, res) => {
  Topic.findOne(
    {
      where: {
        id: req.params.id,
      },
    },
    {
      include: {
        model: User,
        attributes: ["username"],
      },
    }
  )
    .then((dbTopicData) => {
      if (!dbTopicData) {
        res.status(400).json({ message: "No topic found with this id" });
        return;
      }
      res.render("edit-topic", dbTopicData);
    })
    .catch((err) => res.status(500).json(err));
});

router.get("/:id", withAuth, (req, res) => {
  Topic.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbTopicData) => {
      if (!dbTopicData) {
        res.status(404).json({
          message: "No topic found with this id",
        });
        return;
      }
      res.render("delete-topic", dbTopicData);
    })
    .catch((err) => res.status(500).json(err));
});

// add delete topic
router.delete("/:id", withAuth, (req, res) => {
  Topic.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbTopicData) => {
      if (!dbTopicData) {
        res.status(404).json({ message: "No topic found with this id" });
        return;
      }
      res.json(dbTopicData);
    })
    .catch((err) => res.status(500).json(err));
});

router.get("/edit-item/:id", withAuth, (req, res) => {
  Item.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbItemData) => {
      if (!dbItemData) {
        res.status(400).json({ message: "no item was found with this id" });
        return;
      }
      res.render("edit-topic", dbTopicData, { loggedIn: req.session.loggedIn });
    })
    .catch((err) => res.status(500).json(err));
});

router.get("/delete-item/:id", withAuth, (req, res) => {
  Item.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbItemData) => {
      if (!dbItemData) {
        res.status(400).json({ message: "no item was found with this id" });
        return;
      }
      res.render("delete-item", dbItemData);
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
