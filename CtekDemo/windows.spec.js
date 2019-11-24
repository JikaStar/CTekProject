describe('Testing with Multiple Windows', () => {
    var browserHandles=[];
    beforeAll(function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://the-internet.herokuapp.com/');
        element(by.linkText('Multiple Windows')).click();
        element(by.linkText('Click Here')).click();
    });
    it('should swich to new window', () => {
        browser.getAllWindowHandles().then(function(handles){
            browserHandles=handles;
            browser.switchTo().window(browserHandles[1]).then(function(){
                browser.sleep(3000);
                expect(browser.driver.getCurrentUrl()).toContain('windows/new');
            });
        });
 
    });
    it ('should go back to previous window',()=>{
        browser.close().then(function(){
            browser.switchTo().window(browserHandles[0]);
            browser.sleep(3000);
            expect(element(by.linkText('Click Here')).isDisplayed()).toBe(true);
        });
    });
 
 });