describe('Selenium locators',function(){

xit('should by id locator example',function(){
    browser.waitForAngularEnabled(false);

    browser.get('https://skyid.sky.com/signup');
    element(by.id('firstname')).sendKeys('Michael');
    browser.sleep(4000);



})

xit('should Facebook login',function(){
    browser.waitForAngularEnabled(false);
    browser.get('https://www.facebook.com/');
    element(by.id('email')).sendKeys('jika');
    browser.sleep(4000);
    element(by.id('pass')).sendKeys('adf');
    browser.sleep(4000);
    element(by.id('u_0_2')).click();
    browser.sleep(4000);

})
    xit('should by name locator',function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://skyid.sky.com/signup');
        browser.sleep(4000);
        element(by.name('lastname')).sendKeys('Stone');
        browser.sleep(4000);
    })
    xit('should by name locator in facebook',function(){
    browser.waitForAngularEnabled(false);
    browser.get('https://www.facebook.com/');
    browser.sleep(4000);
    element(by.name('firstname')).sendKeys('Zhibek');
    browser.sleep(2000);
    element(by.name('lastname')).sendKeys('Kenzo');
    browser.sleep(2000);
    })
    xit('should by className locator example',function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://skyid.sky.com/signup');
        element(by.class('page-header-two')).getText()
        .then(function(text){
            if(text=="Create your Sky iD"){
                console.log("test passed");
            }else{
                console.log("test failed");
            }
            //console.log("Here is your taext: "+text);
        })
        browser.sleep(4000);
    })
    xit('should by tag name locator',function(){
        browser.waitForAngularEnabled(false);

        browser.get('https://skyid.sky.com/signup');
        element(by.tagName('button')).click();
        browser.sleep(3000);
    })
    xit('should by linkText locator example',function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://skyid.sky.com/signup');
        browser.sleep(4000);
        element(by.linkText('Privacy & Cookies Notice')).click();
        browser.sleep(4000);
    })
    
   xit('should linkText locator facebook',function(){
       browser.waitForAngularEnabled(false);
       browser.get('https://www.facebook.com/');
       browser.sleep(4000);
       element(by.linkText('Forgot account?')).click();
       browser.sleep(4000);
   })
    fit('should get login information instagram',function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://www.instagram.com/');
        browser.sleep(4000);
        element(by.linkText('Log in')).click();
        browser.sleep(4000);
        element(by.id('f1019254ac5e88')).sendKeys('');
        browser.sleep(4000);
        element(by.id('f2a8eb252ebc1')).sendKeys('');
        browser.sleep(4000);
        element(by.linkText('Log in')).click();
        browser.sleep(10000);

    })








})