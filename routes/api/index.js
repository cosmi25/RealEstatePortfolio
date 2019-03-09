const router = require("express").Router();
const propertyRoutes = require("./properties");
const tenantRoutes = require("./tenants");
const ownerRoutes = require("./owners");

router.use("/properties", propertyRoutes);
router.use("/tenants", tenantRoutes);
router.use("/owners", ownerRoutes);

module.exports = router;
