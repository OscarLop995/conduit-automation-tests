module.exports = {
  default: {
    timeout: 20000,
    require: [
      "tests/step-definitions/**/*.ts", 
      "tests/utils/**/*.ts"         
    ],
    publishQuiet: true,
    requireModule: ["ts-node/register"],
    paths: ["tests/features/**/*.feature"],
    format: [
      "progress",
      "html:reports/cucumber-report.html"
    ]
  }
};