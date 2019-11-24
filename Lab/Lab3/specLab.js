describe('learning xpath',function(){
    // xit('should click on sign in',function(){
    //     browser.waitForAngularEnabled(false);
    //     browser.get('http://www.rediff.com/');
    //     element(by.xpath('html/body/div[2]/div[4]/span[4]/span/a[1]')).click();
    // })
    // xit('should get error message',function(){
    //     browser.waitForAngularEnabled(false);
    //     browser.get('https://login.salesforce.com/');
    //     element(by.xpath('//*[@id="username"]')).sendKeys('Mike');
    //     element(by.xpath('//*[@id="password"]')).sendKeys('Smith');
    //     element(by.xpath('//*[@id="Login"]')).click();
    //     browser.sleep(6000);
    //     element(by.xpath('//*[@id="error"]')).getText().then(function(error){
    //         console.log(error);
    //     })

    //})
    it('should get all prices',function(){
        browser.waitForAngularEnabled(false);
        browser.get('http://www.rediff.com/');
        element(by.css("div[class='divicon relative']>img")).click();
        browser.manage().window().setSize(1500,900);
        browser.sleep(1000);
        element(by.css("div[id='popular_cat']>h3:nth-of-type(4)>a")).click();
        browser.sleep(1000);
        element(by.css("div[class='div_trending_slider']>a:nth-of-type(1)")).click();
        browser.sleep(1000);
        element.all(by.css("span[itemprop='price']")).getText().then(function(price){
            for(i=0;i<price.length;i++){
                console.log(price[i]);
            }
        })

    })
})