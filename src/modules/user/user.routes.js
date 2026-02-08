const router = require('express').Router();
const controller = require("./user.controller");

router.route("/")
  .post(controller.createUser)
  .get(controller.getUsers);

module.exports = router;