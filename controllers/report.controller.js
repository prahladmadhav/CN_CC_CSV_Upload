const Report = require("../models/report.model");
const multer = require("multer");
const fs = require("fs");
const csv = require("csv-parser");

module.exports.upload = async (req, res) => {
    Report.uploadedReport(req, res, (err) => {
        try {
            if (err instanceof multer.MulterError) {
                req.flash("error", `Error encountered`);
                console.log(`Upload Error1: ${err}`);
                return res.redirect("back");
            } else if (err) {
                console.log(`Upload Error2: ${err}`);
                req.flash("error", err.message);
                return res.redirect("back");
            }
            let reportData = {};
            reportData.name = req.file.originalname;
            reportData.columns = [];
            reportData.rows = [];
            let hasRows = false;
            fs.createReadStream(req.file.path)
                .pipe(csv())
                .on("data", (data) => {
                    reportData.rows.push(Object.values(data));
                    if (!hasRows) {
                        reportData.columns = Object.keys(data);
                        hasRows = true;
                    }
                })
                .on("end", async () => {
                    fs.unlinkSync(req.file.path);
                    let report;
                    if (hasRows && reportData.columns.length > 0) {
                        report = await Report.create(reportData);
                        return res.redirect(`/report/${report.id}`);
                    } else if (hasRows) {
                        req.flash("error", "The file has no columns!");
                    } else {
                        req.flash("error", "The file has no rows or columns!");
                    }
                    return res.redirect("/");
                });
        } catch (err) {
            req.flash("error", `Error encountered`);
            console.log(`Upload Error: ${err}`);
            return res.redirect("back");
        }
    });
};
module.exports.view = async (req, res) => {
    try {
        let report = await Report.findById(req.params.id);
        if (report) {
            // return res.status(200).json(report);
            return res.render("report", {
                title: `${report.name} Report`,
                report: report,
            });
        } else {
            req.flash("error", `Report Not Found`);
        }
    } catch (err) {
        console.log(`Report View Error: ${err}`);
    }
    return res.redirect("back");
};
module.exports.viewAll = async (req, res) => {
    try {
        let tempReports = await Report.find({}).sort("-createdAt");
        if (tempReports) {
            let reports = [];
            tempReports.forEach((report) => {
                reports.push({
                    id: report.id,
                    name: report.name,
                });
            });
            return res.render("report_desk", {
                title: `Report Desk`,
                reports: reports,
            });
        } else {
            req.flash("error", `Report Not Found`);
        }
    } catch (err) {
        console.log(`Report View Error: ${err}`);
    }
    return res.redirect("back");
};
