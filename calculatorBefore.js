describe('Validating the Calculator app', () => {

    beforeAll(function(){
        browser.sleep(3000);
        console.log('This is printing before All of the blocks started');
    });
    
    beforeEach(function(){
        browser.get('http://way2automation.com/angularjs-protractor/calc/');
    });
    
    afterEach(function(){
        browser.sleep(3000);
        console.log('This is printing after each it block');
    });
    
    afterAll(function(){
        browser.sleep(3000);
        console.log('This is printing after all of the tests blocks finished');
    });
    
        it('validate 1 + 1=2', () => {      
            element(by.model("first")).sendKeys(1);
            element(by.model('second')).sendKeys(1);
            element(by.buttonText('Go!')).click();
            element(by.binding('latest')).getText().then(function(text){
                console.log('Result is: '+text);
            });
        });
    
    
        it('validate 2 + 2 = 4', () => {
            element(by.model("first")).sendKeys(2);
            element(by.model('second')).sendKeys(2);
            element(by.buttonText('Go!')).click();
            element(by.binding('latest')).getText().then(function(text){
                console.log('Result is: '+text);
            });
        });
    
        it('validate 3 + 3 = 6', () => {
            element(by.model("first")).sendKeys(3);
            element(by.model('second')).sendKeys(3);
            element(by.buttonText('Go!')).click();
            element(by.binding('latest')).getText().then(function(text){
                console.log('Result is: '+text);
            });
        });
    });