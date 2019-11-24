xdescribe('Jasmine Framework',()=>{
    //simpleexample of beforeEach/All
    describe('A single describe',()=>{
        beforeAll(function(){
            console.log('in beforeAll');
        })

        beforeEach(function(){
            console.log('in beforeEach');
        })

        it('spec A',function(){
            console.log('in spec A');
            //expect(true).toBe(true);
        })
        it('spec B',function(){
            console.log('in spec B');
            //expect(true).toBe(true);
        })
    })
})


describe('Outer describe', function () {
    beforeAll(function () {
        console.log('in outer beforeAll');
    });

    beforeEach(function () {
        console.log('in outer beforeEach');
    });

    it('spec A', function () {
        console.log('in spec A');
       
    });

    it('spec B', function () {
        console.log('in spec B');
      
    });

    describe('inner describe', function () {
        beforeAll(function () {
            console.log('in inner beforeAll');
        });

        beforeEach(function () {
            console.log('in inner beforeEach');
        });

        it('spec C', function () {
            console.log('in spec A');
           
        });

        it('spec D', function () {
            console.log('in spec B');
          
        });
    });
});