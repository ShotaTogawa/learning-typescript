"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var ConsoleReports_1 = require("./reportsTargets/ConsoleReports");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var Summary_1 = require("./Summary");
// create an obj that satisfies the "Data Reader" interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('original.csv');
// Create an instance of MatchReader and pass in something satisfying the DataReader interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var consoleSummary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new ConsoleReports_1.ConsoleReports());
consoleSummary.buildAndPrintReport(matchReader.matches);
var htmlSummary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
htmlSummary.buildAndPrintReport(matchReader.matches);
