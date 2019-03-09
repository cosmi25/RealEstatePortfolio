const router = require("express").Router();
const propertiesController = require("../../controllers/propertiesController");

router.route("/")
  .get(propertiesController.findAll)
  .post(propertiesController.create);

router
  .route("/:id")
  .get(propertiesController.findById)
  .put(propertiesController.update)
  .delete(propertiesController.remove);

module.exports = router;
