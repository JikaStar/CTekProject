describe('Lab with Ozzy', function() {

    it('should test salesForce app', function() {

      browser.waitForAngularEnabled(false);
      browser.get('https://login.salesforce.com/');
      element(by.id('username')).sendKeys('mike');
      element(by.id('password')).sendKeys('123456');
      element(by.id('Login')).click();
      browser.sleep(10000);


    })
    fit('Retrieve the title',function(){
      browser.waitForAngularEnabled(false);
      browser.get('http://newegg.com/');

      var title=browser.getTitle().then(function(title){
        var newTitle=title;
        var newTitle2=newTitle.split(",");
        var final=newTitle2.slice(0,3);

        for(let i=0;i<final.length;i++){
          browser.waitForAngularEnabled(false);
        browser.get('https://www.google.com/');
        element(by.name('q')).sendKeys(newTitle2[i]);
        browser.sleep(2000);
        element(by.xpath("//div[@class='VlcLAe']/center/input[1]")).click();
        browser.sleep(2000);
        element(by.id('resultStats')).getText().then(function(x){
          console.log(`${final[i]}    ${x}`);
          
        })
      }
      
      })
      
    })
  })