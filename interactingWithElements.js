describe('Interacting elements suite',()=>{
    //it('isPresent method',()=>{
        //browser.get("https://www.bhtp.com");
        // element(by.id("cta-button")).isPresent().then(function(result){
        //     if(result==true){
        //         console.log("Get Quote Button Test Passed"); 
        //     }else{
        //     console.log("Get Quote Button Test Failed");
            //}
        //})
        // element(by.id("cta-button")).isDisplayed().then(function(result){
        //     if(result==true){
        //         console.log("Get Quote Button Displayed correctly"); 
        //     }else{
        //     console.log("Get Quote Button .Test failed");
        //     }
    })
    // xit('should check amazon logo displayed',()=>{
    //     browser.waitForAngularEnabled(false);
    //     browser.get("https://www.amazon.com/");
    //     element(by.id('nav-logo')).isDisplayed().then(function(display){
    //         console.log(display);
        
        it('isEnabled',()=>{
            browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
            $("#username").sendKeys("abc");
            $("#password").sendKeys("abc123");
            $("#formly_1_input_username_0").sendKeys("abc1234");
            
            $(".btn-danger").isEnabled().then(function(result){
                console.log(result);
            })
        })

    

