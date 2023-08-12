const express = require("express");
const router = express.Router();
const reportController = require("../controllers/report.controller");

router.get("/", reportController.viewAll);
router.post("/upload", reportController.upload);
router.get("/:id", reportController.view);

module.exports = router;
