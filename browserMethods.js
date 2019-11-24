describe('Browser methods Suit',function(){

     xit('Browser get method',function(){

         //for non-angular websites we use this keyword
         //browser.ignoreSynchronization=true;

         //non-angular website 2nd keyword
         //browser.waitForAngularEnabled(false);

         //openning a webpage with URL
       //browser.get('http://www.google.com');
       //browser.sleep(4000);



     });
     it('Navigate to Staples.com',function(){
         browser.get('http://www.staples.com');
     });
     it('browser refresh method',function(){
         browser.waitForAngularEnabled(false);
         browser.get('http://www.bbc.com/');
         browser.sleep(4000);
         browser.refresh();
         browser.sleep(4000);
     });
     it('Navigate and back',function(){
        browser.waitForAngularEnabled(false);
         browser.get('http://www.google.com');
         browser.sleep(4000);
         browser.get('http://www.bbc.com');
         browser.sleep(4000);
         browser.navigate().back();
         browser.sleep(4000);
     });
     it('Navigate forward method',function(){
        browser.waitForAngularEnabled(false);

         browser.get('http://www.google.com');
         browser.sleep(4000);
         browser.get('http://www.bbc.com');
         browser.sleep(4000);
         browser.navigate().back();
         browser.sleep(4000);
         browser.navigate().forward();
         browser.sleep(4000);
     });  
     it('Maximize Windows method',function(){
        browser.waitForAngularEnabled(false);

        browser.get('http://www.google.com');
        browser.sleep(4000);
        browser.manage().window().maximize();
        browser.sleep(4000);
        browser.manage().window().setSize(1080,800);
        browser.sleep(4000);
     });  

it('get current URL Method',function(){
    browser.waitForAngularEnabled(false);

    browser.get('http://www.google.com');
    browser.sleep(4000);
    browser.getCurrentUrl().then (function(siteUrl){
        console.log(siteUrl);
    });
    fit('get the title of the page',function(){
        browser.waitForAngularEnabled(false);

    browser.get('http://www.google.com');
    browser.sleep(4000);
    browser.getTitle().then(function(title){
        console.log(title);
    });

    }); 
});
}); 
