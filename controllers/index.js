const router = require("express").Router();

const homeRoutes = require("./home-routes.js");
// const apiRoutes = require("./api");
const dashboardRoutes = require("./dashboard-routes.js");
const calandarRoutes = require("./calandar-routes.js");

router.use("/", homeRoutes);
// router.use("/api", apiRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/calandar", calandarRoutes);

module.exports = router;
