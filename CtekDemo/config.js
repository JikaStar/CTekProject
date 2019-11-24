let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
    framework: 'jasmine',

    directConnect: 'true',
    specs: ['JsExecutor.js'],
    
    
    onPrepare: function(){
      browser.manage().window().maximize();
      jasmine.getEnv().addReporter(new SpecReporter({
        displayFailuresSummary: true,
        displayFailuredSpec: true,
        displaySuiteNumber: true,
        displaySpecDuration: true
      }));

      // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
        baseDirectory: 'CtekDemo/screenshots',
        
        preserveDirectory: false,
         screenshotsSubfolder: 'images',
         jsonsSubfolder: 'jsons',
         docName: 'CyberTek-Report.html'
     }).getJasmine2Reporter());



    } 
  };



