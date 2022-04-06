const router = require("express").Router();
const { User, Topic, Item } = require("../../models");

router.get("/", (req, res) => {
  Topic.findAll({
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Item,
        attributes: ["id", "url", "display_url", "name", "comment_area"],
      },
    ],
  })
    .then((dbTopicData) => {
      res.json(dbTopicData);
    })
    .catch((err) => res.status(500).json(err));
});

router.get("/:id", (req, res) => {
  Topic.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["name"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Item,
        attributes: [
          "id",
          "url",
          "display_url",
          "name",
          "comment_area",
          "user_id",
        ],
      },
    ],
  })
    .then((dbTopicData) => {
      if (!dbTopicData) {
        res.status(400).json({ message: "No topic was found with this id" });
        return;
      }
      res.json(dbTopicData);
    })
    .catch((err) => res.json(err));
});

// post new topic
router.post("/", (req, res) => {
  Topic.create({
    name: req.body.name,
    user_id: req.session.user_id,
  })
    .then((dbTopicData) => res.json(dbTopicData))
    .catch((err) => res.status(500).json(err));
});

// update topic
router.put("/:id", (req, res) => {
  Topic.update(
    {
      name: req.body.name,
    },
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
      res.json(dbTopicData);
    })
    .catch((err) => res.status(500).json(err));
});

delete topic;
router.delete("/:id", (req, res) => {
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

module.exports = router;
