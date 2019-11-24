describe('Css locators',() => {

    xit('should by id locator example',() => {
        browser.waitForAngularEnabled(false);
        browser.get('https://skyid.sky.com/signup');
        $("input[id='firstname']").sendKeys('Michael');
        browser.sleep(4000);
    })
    it('should open and restart',function(){
        waitForAngularEnabled(false);
        browser.get('http://www.google.com');
        browser.restart();
        browser.get('http://www.angularjs.org');
        browser.sleep(3000);
    })
    it('should test netflix',function(){
        waitForAngularEnabled(false);
        browser.get('http://www.netfix.com');
        browser.sleep(3000);
        browser.get('http://www.amazon.com');
        browser.navigate().back();
        browser.sleep(3000);
        browser.navigate().forward();
        browser.sleep(3000);
        browser.manage().window().maximize();
        brow
    })
    it('ebay',function(){
        browser.driver.get('http://www.ebay.com');
        browser.driver.getCurrentUrl().then(function(siteUrl){
            console.log(siteUrl);
        })
        browser.driver.sleep(2000);
        browser.driver.getTitle().then(function(title){
        console.log(title);
        })
    })
})

        