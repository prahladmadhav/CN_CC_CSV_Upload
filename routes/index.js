const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home.controller");

router.get("/", homeController.home);
router.use("/report", require("./report.route"));
// router.post("/upload", homeController.upload);
// router.get("/report/:id", homeController.view);

module.exports = router;
