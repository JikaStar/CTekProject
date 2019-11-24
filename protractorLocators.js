describe('Protractor Locators',() =>{
   function Add(a,b){
       element(by.model("first")).sendKeys(a);
       element(by.model("second")).sendKeys(b);
       element(by.id("gobutton")).click();
       browser.sleep(3000);
       }


    it('buttonText example @ Transferwise', () => {
    browser.get('https://transferwise.com/us/');
    element(by.buttonText("Compare price")).click();
    browser.sleep(2000);

    })
    it('should get get started button',() =>{
        browser.get('https://www.upwork.com/');
        element(by.buttonText("Get Started")).click();
        browser.sleep(2000);
    })
    it('should get locatoin of netflix',() =>{
        browser.waitForAngularEnabled(false);
        browser.get('https://www.netflix.com/');
        element(by.buttonText("JOIN FREE FOR A MONTH")).click();
        browser.sleep(3000);
    })
    it('should get css containing example',() =>{
        browser.get('https://transferwise.com/us/');
        element(by.cssContainingText('.text-inverse','bye')).getText().then(function(text){
            console.log(text);
        }) 
        browser.sleep(3000);  
    })
    it('should get cssContainingtext',() =>{
        browser.get('https://transferwise.com/us/');
        element(by.cssContainingText('.h4.m-t-1','Is')).getText().then(function(text){
            console.log(text);
        })

    })
    it('by.model example',()=>{
        browser.get("http://juliemr.github.io/protractor-demo/");
        element(by.model("first")).sendKeys("5");
        element(by.model("second")).sendKeys("6");
        element(by.id("gobutton")).click();
        browser.sleep(3000);

        element(by.model("first")).sendKeys("55");
        element(by.model("second")).sendKeys("66");
        element(by.id("gobutton")).click();
        browser.sleep(3000);

        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("9");
        element(by.id("gobutton")).sendKeys();
        browser.sleep(3000);
    })
    fit('by model with function',()=>{
        browser.get("http://juliemr.github.io/protractor-demo/");
         Add(51,6);
        //  Add(55,66);
        //  Add(3,9);
        //  Add(3,99);
        //  Add(4,7);
        //  Add(100,34);
         //element(by.model("operator")).element(by.css("option:nth-of-type(4)")).click();
         //browser.sleep(4000);
         element.all(by.repeater("result in memory")).getText().then(function(arrayText){
             console.log(arrayText);
         })
         

    })

})