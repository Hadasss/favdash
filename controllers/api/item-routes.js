const router = require("express").Router();
const { stat } = require("fs");
const sequelize = require("../../config/connection");
const { User, Topic, Item } = require("../../models");

// get all items
router.get("/", (req, res) => {
  Item.findAll()
    .then((dbItemData) => res.json(dbItemData))
    .catch((err) => res.status(500).json(err));
});

// get single item
router.get("/:id", (req, res) => {
  Item.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "url", "display_url", "name", "comment_area"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      //   {
      //     model: Topic,
      //     attributes: ["id", "name"],
      //   },
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
router.post("/", (req, res) => {
  Item.create({
    url: req.body.url,
    display_url: req.body.display_url,
    name: req.body.name,
    comment_area: req.body.comment_area,
  })
    .then((dbItemData) => res.json(dbItemData))
    .catch((err) => res.status(500).json(err));
});

// TODO update item
router.put("/:id", (req, res) => {
  //   if (req.session) {
  Item.update(req.body, {
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
  //   }
});

// TODO delete item
router.delete("/:id", (req, res) => {
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
      //   window.location.reload();
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
