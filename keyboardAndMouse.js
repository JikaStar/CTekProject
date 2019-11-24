describe("Keyboard and Mouse acctions",()=>{

//first write something on input box and clear what you've written and write something new
    // it('clear function',()=>{

    //     browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
    //     element(by.id("username")).sendKeys("Cybertek");
    //     browser.sleep(3000);
    //     element(by.id("username")).clear();
    //     browser.sleep(3000);
    //     element(by.id("username")).sendKeys("angular");
    //     browser.sleep(3000);
    // })
    //sendkeys protractor.key example
// it('using keybord button',()=>{
//     browser.get("https://flow.microsoft.com/en-us/");
//  element(by.css(".c-search.homepage-search.ng-pristine.ng-valid>input")).sendKeys("dropboxb");
//  browser.sleep(3000);
//  element(by.css(".c-search.homepage-search.ng-pristine.ng-valid>input"))
//  .sendKeys(protractor.Key.BACK_SPACE)
//  .sendKeys(protractor.Key.ENTER);
//  browser.sleep(3000);

// })
//get attribute microsoft
// it('SHOULD get attribute',()=>{
//     browser.get("https://flow.microsoft.com/en-us/");  
//     $('.ms-logo').getAttribute('title').then(function(titleAtrib){
//         console.log(titleAtrib);
//     })
// })
// it('get staples.com',()=>{
//     browser.waitforAngularEnabled(false);
//     browser.get("https://www.staples.com/");
//     $("#staples-logo-hdr").getAttribute("title".then(function(title){
//    console.log(title);
    
//     })
    
// })
//extracts color value from CSS
// it('getCssValue Method usage',()=>{
//       browser.get("https://flow.microsoft.com/en-us/");  
//     element(by.id("home-video-button")).getCssValue('color').then(function(text){
//            console.log(text);
//       })
//       //exteracts font-size value from         css
// element(by.id("home-video-button")).getCssValue('font-size').then(function(text){
//     console.log(text);
// })
            
// })
// it('get cart at staples.com',()=>{
//     browser.waitForAngularEnabled(false);
//     browser.get("https://www.staples.com/");
//     $('.section-icon.cart').getCssValue('color').then(function(text){
//         console.log(text);
//     })

// })
// it('getCssValue Method usage',()=>{
//            browser.get("https://flow.microsoft.com/en-us/");  
//         element(by.id("home-video-button")).getLocation().then(function(location){
//                  var x=location.x;
//                  var y=location.y;
//                console.log(x+ '------'+y);
//           })
// })
// it('get button',()=>{
//     browser.get("https://www.bhtp.com/");
//     $(".btn-green.link-button.h7.pull-").getLocation().then(function(location){
//         var x=location.x;
//         var y=location.y;
//         console.log(x+ "-----"+y);
//     })
// })
// it('Mouse Hover over eaxample',()=>{
//     browser.waitForAngularEnabled(false);
//     browser.get("http://the-internet.herokuapp.com");
//     element(by.linkText("Hovers")).click();
//     browser.sleep(3000);
//     browser.actions().mouseMove($('.figure>img')).perform();
//     browser.sleep(3000);
//     element(by.linkText('View profile')).click();
//     browser.sleep(3000);
// })
// it('Mouse Hover over eaxample',()=>{
//     browser.waitForAngularEnabled(false);
//     browser.get("http://the-internet.herokuapp.com");
//     element(by.linkText("Hovers")).click();
//     browser.sleep(3000);
//     browser.actions().mouseMove($$('.figure>img').get(2)).perform();
//     browser.sleep(3000);
//     element(by.linkText('View profile')).click();
//     browser.sleep(3000);
// })
//3rd party drag and drop solution

// //3rd party drag and drop solution
// fit('Drag and drop', () => {
//     var dragAndDrop= require('html-dnd').code;

//     browser.waitForAngularEnabled(false);
//     browser.get("http://the-internet.herokuapp.com/drag_and_drop");
//     browser.sleep(3000);
//     browser.executeScript(dragAndDrop,element(by.id("column-a")),element(by.id("column-b")),0,0);
//     browser.sleep(5000);
    
// });
//scrollin down to an element
// it('Scroll down ',()=>{
//     browser.get("https://www.bhtp.com/");
//     browser.sleep(3000);
//     browser.executeScript("arguments[0].scrollIntoView();",element(by.linkText("START A CLAIM"))).then(function(){
//         browser.sleep(3000);
//         element(by.linkText("START A CLAIM")).click();
//     })
// })
// //Scrolling down to the end of the page
// fit('Scrool down to an element', () => {
        

//     browser.get("https://www.bhtp.com/");
//     browser.sleep(3000);
//     browser.executeScript("window.scrollTo(0,document.body.scrollHeight)")
//         .then(function(){
//             browser.sleep(3000);
//             element(by.linkText("START A CLAIM")).click();
//         })
// });
//javascript click
it('javascript click', () => {
        

    browser.get("https://www.bhtp.com/");
    browser.sleep(3000);
    browser.executeScript("arguments[0].click();",element(by.linkText("START A CLAIM")));
        
            browser.sleep(3000);
            
        })
});
