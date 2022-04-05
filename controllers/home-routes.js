const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Item, Topic } = require("../models");

router.get("/", (req, res) => {
  res.render("homepage");
});

// router.get("/", (req, res) => {
//   Topic.findAll({
//     attributes: ["name"],
//     include: {
//       model: User,
//       attributes: ["username"],
//     },
//   })
//     .then((dbTopicData) => {
//       const topics = dbTopicData.map((topic) => topic.get({ plain: true }));
//       if (!topics) {
//         // TODO add modal "You don't have any topics yet, create your first one!"
//       }
//       res.render("homepage", { topics, loggedIn: req.session.loggedIn });
//     })
//     .catch((err) => res.status(500).json(err));
// });

// router.get("/login", (req, res) => {
//   res.render("login");
// });

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});


module.exports = router;
