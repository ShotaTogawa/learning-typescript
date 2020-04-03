import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReports } from './reportsTargets/ConsoleReports';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';

// create an obj that satisfies the "Data Reader" interface
const csvFileReader = new CsvFileReader('original.csv');

// Create an instance of MatchReader and pass in something satisfying the DataReader interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const consoleSummary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReports()
);

consoleSummary.buildAndPrintReport(matchReader.matches);
const htmlSummary = Summary.winsAnalysisWithHtmlReport('Man United');
htmlSummary.buildAndPrintReport(matchReader.matches);
