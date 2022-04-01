const router = require("express").Router();
const { User, Topic, Item } = require("../models");

router.get("/", (req, res) => {
  Topic.findAll({
    attributes: ["name"],
    include: {
      model: User,
      attributes: ["username"],
    },
  })
    .then((dbTopicData) => {
      const topics = dbTopicData.map((topic) => topic.get({ plain: true }));
      if (!topics) {
        res.render("/");
      }
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
