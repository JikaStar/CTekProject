describe('each Method examples', () =>{
    it('each method #1', () => {
     browser.waitForAngularEnabled(false);
     browser.get('https://www.bhtp.com/');
     $('#top-nav-down').all(by.tagName("span")).each(function(item){
         item.getText().then(function(text){
             console.log(text);
         })
     })
    })
     it('should print menubar @staples.com',() =>{
      browser.waitForAngularEnabled(false);
      browser.get('https://www.staples.com/');

      var sectionMenu=$$(".section-menu");
      sectionMenu.each(function(item){
          item.getText().then(function(text){
            console.log(text); 
          })
        
         }) 
      
      })
      it('should get menubar @bbc.com',()=>{
          browser.waitForAngularEnabled(false);
          browser.get('http://www.bbc.com/');
          
          element(by.css("#orb-nav-links")).all(by.tagName("li")) //returns all the li inside that navigation div- array
          .each(function(item,index){  //creating a loop inside the array I've just grabbed
              item.getText()    //grabbing the text of the item with promise
              .then(function(text){ //resolving promise and print
                  console.log("# " + index + ": " + text);
              })
          })
        })
          it('should do calculation ',()=>{
              browser.get("https://juliemr.github.io/protractor-demo/");
              element(by.model('first')).sendKeys('5');
              element(by.model('second')).sendKeys('5');
              element(by.id('gobutton')).click();
              element(by.binding('latest')).getText().then(function(result){
                  if(result==10){
                      console.log(result);
                      console.log("Pass");
                      browser.sleep(4000);
                  }
              })
            })
              fit('should do calculation ',()=>{
                browser.get("https://juliemr.github.io/protractor-demo/");
                element(by.model('first')).sendKeys('5');
                element(by.model('second')).sendKeys('5');
                element(by.id('gobutton')).click();

                element(by.model('first')).sendKeys('44');
                element(by.model('second')).sendKeys('5');
                element(by.id('gobutton')).click();

                element(by.model('first')).sendKeys('55');
                element(by.model('second')).sendKeys('5');
                element(by.id('gobutton')).click();
                
                browser.sleep(4000);
                element.all(by.repeater("result in memory")).each(function(item){
                    item
                    .element(by.css("td:nth-child(3)"))
                    .getText().then(function(columnData){
                        console.log(columnData);
                    })
                })

          })
        })

     
    
