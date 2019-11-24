// element
// WebElement: input. link. image, 
//element
//function ericElement(locator){
    //search mechanism inside the function.
    // a lot of code
    
    //var foundWebElement= "Wow I've found the element with the locator: ";
    //return foundWebElement;
    
   // }
    
   // console.log(ericElement("//div[@name='something'"));
    //element function returns an object.click/sendKeys
    
    // name inputtext
    //function ericElementAll(locator){
    //code to find all the items in the page and put it in an array
    
        //var AllTheItemsIveFoundWithGivenLocator = [];
    
        //AllTheItemsIveFoundWithGivenLocator[0]="inputbox on the left";
       // AllTheItemsIveFoundWithGivenLocator[1]="inputbox on the right"
    
        //return AllTheItemsIveFoundWithGivenLocator;
    
   // }
    
    //console.log(ericElementAll("notuniqueone"));

describe('should write All Method',() =>{
    // it('element .all grab all the links in Google.com', () =>{
    //     browser.waitForAngularEnabled(false);
    //     browser.get('https://www.google.com/');
    //     element.all(by.tagName("a")).getText().then(function(textArray){
    //         console.log(textArray);
    //         for(let i=0;i<textArray.length;i++){
    //             console.log(textArray[i]);
    //         }
    //     })
    // })
    //     it('should go to bbc.com and grab all li elements', () =>{
    //     browser.waitForAngularEnabled(false);
    //     browser.get('http://www.bbc.com/');
    //     //Css shortcut version
    //     //$$("html li").getText().then(function(liText){
    //         //console.log(liText);
    //     // by tag name   
    //     element.all(by.tagName("li")).getText().then(function(liText){
    //         console.log(liText);
    //     })

    //     })
    //     it('should grab a specific list from BBC',() =>{
    //         browser.waitForAngularEnabled(false);
    //         browser.get('http://www.bbc.com/');
    //         //css parent to child version
    //         $$("#orb-nav-links>ul>li").getText().then(function(links){
    //             console.log(links);
    //         })
    //         //Chain locators
    //         //element(by.css("#orb-nav-links")).all(by.tagName("li")).getText()
    //         //.then(function(links){
    //             //console.log(links);
    //         })

    //     })
    //     it('should get all elements text',()=>{
    //         browser.get('https://hn.algolia.com/');
    //         var resultTitle =$$(".item-title-and-infos>h2>a");
    //         resultTitle.getText().then(function(elementArrayText){
    //             console.log(elementArrayText);
    //         })
    //         it('should get total count of elements' ,()=>{
    //             browser.get('https://hn.algolia.com/');
    //             //using variable version
    //             var totalResult=$$(".item-title-and-infos>h2>a").count();
    //             totalResult.then(function(totalTitles){
    //                 console.log("Total count in the apge is: "+totalTitles);

    //                 //without variable
    //                 //$$(".item-title-and-infos>h2>a").count().then(function(totalTitles){
    //                     //console.log("Total count in the apge is: "+totalTitles);  
    //                 })
    //             }) 
                it("should get total count of element",()=>{
                    browser.get('https://hn.algolia.com/');
                    //var item=$$(".item-title-and-infos>h2>a");
                    //var firstItem=item.first();
                    var firstItem=$$(".item-title-and-infos>h2>a").first();
                    var lastItem=$$(".item-title-and-infos>h2>a").last();
                    lastItem.getText().then(function(lastelement){
                        console.log(lastelement);
                    })
                    firstItem.getText().then(function(elementText){
                        console.log(elementText);
                    })

                })
                it("should find exact element",()=>{
                    browser.get('https://hn.algolia.com/');
                    var item=$$(".item-title-and-infos>h2>a");
                    var sixthItem=item.get(5); //put index number
                    var tenthItem=item.get(9);
                    sixthItem.getText().then(function(textsix){
                        console.log("6th item of the array is: "+textsix);
                    })
                    tenthItem.getText().then(function(textten){
                        console.log("10th item of array is: "+textten);
                    })

            })
            it('should get titles and texts',()=>{
                browser.get('https://hn.algolia.com/');
                var parentElem=$$(".item-title-and-infos");
                var resultTitle=parentElem.$$('h2>a');
                var resultDate=parentElem.all(by.partialLinkText("ago"));

                resultTitle.getText().then(function(title){
                    console.log(title);
                })
                resultDate.getText().then(function(text){
                    console.log(text);
                })
                
            })
            
        })
        
        



