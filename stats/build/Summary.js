"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var HtmlReport_1 = require("./reportsTargets/HtmlReport");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTatget) {
        this.analyzer = analyzer;
        this.outputTatget = outputTatget;
    }
    Summary.winsAnalysisWithHtmlReport = function (team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport());
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var report = this.analyzer.run(matches);
        this.outputTatget.print(report);
    };
    return Summary;
}());
exports.Summary = Summary;
