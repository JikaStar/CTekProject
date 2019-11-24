describe("Keyboard and Mouse acctions",()=>{

//first write something on input box and clear what you've written and write something new
    it('clear function',()=>{

        broser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
        element(by.id("username")).sendKeys("Cybertek");
        browser.sleep(4000);
        element(by.id("username")).clear()
        browser.sleep(3000);
        element(by.id("username")).sendKeys("angular");
        browser.sleep(3000);
    })




})