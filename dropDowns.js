describe('Dropdowns', ()=>{

    it('ng-options',()=>{
        browser.get("http://juliemr.github.io/protractor-demo/");
         var allOptions=element.all(by.options('value for (key, value) in operators'));

        allOptions.each(function(option){
            option.getText().then(function(Optiontext){
                console.log(Optiontext);
            })
        })
        //printing option that we want by its index
        var thirdOption =allOptions.get(2);
        thirdOption.getText().then(function(Optiontext){
            console.log(Optiontext);
        })
        thirdOption.click();
    })
    fit('dropdown exercise',()=>{
        browser.waitForAngularEnabled(false);
        //Getting all the element from a dropdown print it
        browser.get("https://www.skout.com/");
        element.all(by.id("birthday-month")).first()
        .all(by.tagName('option')).getText().then(function(text){
            console.log(text);
        })
        // //will give u first month starting with J which is January
        // element.all(by.id("birthday-month")).first() //finding the dropdown list
        // .element(by.cssContainingText('option','J')).click();
        // browser.sleep(4000);
        // //its getting all the option starting with J,and clicks the last one
        // element.all(by.id("birthday-month")).first() //finding the dropdown list
        // .all(by.cssContainingText('option','J')).click();
        // browser.sleep(4000);
//clicking  an element with  css value
       // element.all(by.id("birthday-month")).first() //finding the dropdown list
        //.all(by.css('option[value="2"]')).click();

        //element.all(by.id("birthday-year")).first() //finding the dropdown list
        //.all(by.cssContainingText('option','1980')).click();

        //element.all(by.id("birthday-year")).first() //finding the dropdown list
        //.all(by.css('option[value="38"]')).click();

        element.all(by.id("birthday-month")).first() //finding the dropdown list
        .all(by.xpath('option[.="April"]')).click();

        browser.sleep(4000);
    })
    
    
    
        
           
    })

