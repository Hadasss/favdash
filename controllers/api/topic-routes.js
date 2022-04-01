const router = require("express").Router();
const { User, Topic, Item } = require("../../models");

router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    Topic.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Item,
          attributes: ["url", "display_url", "name", "comment_area"],
        },
      ],
    })
      .then((dbTopicData) => {
        res.json(dbTopicData);
      })
      .catch((err) => res.status(500).json(err));
  }
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
      include: {
        model: User,
        attributes: ["id"],
      },
    }
  )
    .then((dbTopicData) => {
      if (!dbTopicData) {
        res.status(404).json({ message: "No topic found with this id" });
        return;
      }
      res.json(dbTopicData);
      window.location.reload();
    })
    .catch((err) => res.status(500).json(err));
});

// delete topic
router.delete("/:id", (req, res) => {
  Topic.destroy({
    where: {
      id: req.params.id,
    },
    include: {
      model: User,
      attributes: ["id"],
    },
  })
    .then((dbTopicData) => {
      if (!dbTopicData) {
        res.status(404).json({ message: "No topic found with this id" });
        return;
      }
      res.json(dbTopicData);
      window.location.reload();
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
