describe('Assignment',()=>{
    function calculateNums(num1,operator,num2){
        element(by.model("first")).sendKeys(num1);
        element(by.model("operator")).sendKeys(operator);
        element(by.model("second")).sendKeys(num2);
        element(by.id("gobutton")).click();
        if(operator === "+"){
            console.log(num1+num2);
        }else if(operator === "-"){
            console.log(num1-num2);
        }else if(operator === "*"){
            console.log(num1*num2);
        }else if(operator === "/"){
            console.log(num1/num2);
        
        }  
        
    }
    it('calculate numbers',()=>{
        browser.get("http://juliemr.github.io/protractor-demo/");
        calculateNums(3,+ 7);
})
})
    

//     fit('calculate by division',()=>{
//         browser.get("http://juliemr.github.io/protractor-demo/");
//         element(by.model("operator")).element(by.css("option:nth-of-type(1)")).click();
//         calculateNums(20,2);
        
//         element(by.model("operator")).element(by.css("option:nth-of-type(2)")).click();
//         calculateNums(30,2);
        
//         element(by.model("operator")).element(by.css("option:nth-of-type(3)")).click();
//         calculateNums(40,2);
        
//         element(by.model("operator")).element(by.css("option:nth-of-type(4)")).click();
//         calculateNums(50,2);
        
//         element(by.model("operator")).element(by.css("option:nth-of-type(5)")).click();
//         calculateNums(60,2);
        
//         element(by.model("operator")).element(by.css("option:nth-of-type(1)")).click();
//         calculateNums(70,2);
        
//         element(by.model("operator")).element(by.css("option:nth-of-type(2)")).click();
//         calculateNums(90,2);
        
//         element(by.model("operator")).element(by.css("option:nth-of-type(3)")).click();
//         calculateNums(100,2);
        
//         element(by.model("operator")).element(by.css("option:nth-of-type(4)")).click();
//         calculateNums(80,2);
        
//         element(by.model("operator")).element(by.css("option:nth-of-type(5)")).click();
//         calculateNums(60,2);
//         browser.sleep(3000);
//         element.all(by.repeater("result in memory")).each(function(nums){
//             nums.getText().then(function(text){
                
            
//                 var array=text.split(" ");
//                 var newarr=array.slice(5,6);
//                 //console.log(newarr);
//                 var numsSum=[];
//                 var total=newarr+numsSum;
//                 //console.log(total);
//                 var total1=0;
//                 for(i=0;i<total.length;i++){
//                     var total1=+total(i);
//        }
//        console.log(total1);

//     })
//     })
// })
// 