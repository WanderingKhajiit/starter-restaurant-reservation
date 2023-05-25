/**
 * Defines the router for reservation resources.
 *
 * @type {Router}
 */

const router = require("express").Router();
const controller = require("./reservations.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router
  .route("/")
  .post(cors(), controller.create)
  .get(cors(), controller.list)
  .all(methodNotAllowed);

router
  .route("/:reservation_id")
  .get(cors(), controller.read)
  .put(cors(), controller.update)
  .all(methodNotAllowed);

router
  .route("/:reservation_id/status")
  .put(cors(), controller.updateStatus)
  .all(methodNotAllowed);

module.exports = router;
