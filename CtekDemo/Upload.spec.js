describe('Name of the group',()=>{
    var path=require('path');



    xit('should upload file',()=>{
        browser.get('http://nervgh.github.io/pages/angular-file-upload/examples/simple/');
        $$("input[type='file']").get(0).
        sendKeys('/Users/jibek/Desktop/CtekProject/CtekDemo/Docs/TestDoc.txt');
        $('.btn-success').click();
    
    })
    it('upload temp', () => {
        browser.waitForAngularEnabled(false);
        browser.get('https://fineuploader.com/demos.html');
        $$('input[type="file"]').get(0).sendKeys(__dirname+'/Docs/images-png.png');
        
        expect($('.qq-thumbnail-selector').isDisplayed()).toBe(true);
    });



});
