describe("Task1 ,Learning repeater and dropdown",()=>{

    it('should work with webtables on',()=>{
        browser.get("http://www.way2automation.com/angularjs-protractor/webtables/");
        element.all(by.repeater("dataRow in displayedCollection")).each(function(item){
            item.getText().then(function(columnData){
            console.log(columnData);
        })
    })
    it("should ")
})
})