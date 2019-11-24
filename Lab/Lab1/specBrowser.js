describe('Leearning different ',function(){

xit('should open a webpage',function(){
    browser.get('https://www.jetblue.com');
    browser.get('https://www.lego.com');
});
xit('should open a webpage',function(){
    browser.get('https://www.jetblue.com');
    browser.refresh();
    browser.get('https://www.lego.com');
    browser.refresh();
});
xit('should open a webpage',function(){
    browser.get('https://www.jetblue.com');
    
    browser.get('https://www.lego.com');
    browser.navigate().back();
});
xit('should open a webpage',function(){
    browser.get('https://www.jetblue.com');
    
    browser.get('https://www.lego.com');
    browser.navigate().back();
    browser.navigate().forward();
});
xit('should get the current URL',function(){
    browser.get('https://www.jetblue.com');
    browser.getCurrentUrl().then(function(url){
        console.log(url); 

    })
    it('should verify title',function(){
        browser.get('https://www.jetblue.com');
        browser.getTitle().then(function(title){
            console.log(title);
    
    
});



});