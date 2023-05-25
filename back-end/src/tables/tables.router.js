const router = require("express").Router();
const controller = require("./tables.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/")
  .post(cors(), controller.create)
  .get(cors(), controller.list)
  .all(methodNotAllowed);

router
  .route("/:table_id/seat")
  .put(cors(), controller.update)
  .delete(cors(), controller.finish)
  .all(methodNotAllowed);

module.exports = router;
