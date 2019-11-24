describe('Practicing Iframe', () => {
    
    beforeAll(function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://the-internet.herokuapp.com/iframe');
    });
    it('should switch to Iframe', () => {
       browser.sleep(4000);
       browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        $('#tinymce').click();
        $('#tinymce').clear();
        $('#tinymce').sendKeys('Cyberstars')
        browser.sleep(6000);  
    });
});