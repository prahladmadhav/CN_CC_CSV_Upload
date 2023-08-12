const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const REPORT_PATH = path.join("/uploads");

const reportSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        columns: {
            type: Array,
            required: true,
        },
        rows: {
            type: Array,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../", REPORT_PATH));
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    },
});

const csvFileFilter = (req, file, cb) => {
    if (file.mimetype === "text/csv") {
        cb(null, true);
    } else {
        cb(new Error("Only CSV files are allowed!"), false);
    }
};

reportSchema.statics.uploadedReport = multer({ storage: storage, fileFilter: csvFileFilter }).single("report");
reportSchema.statics.reportPath = REPORT_PATH;

const Report = mongoose.model("Report", reportSchema);
module.exports = Report;
