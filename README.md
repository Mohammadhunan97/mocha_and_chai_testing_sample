* mocha is a testing framework
* node.js comes with its own assertion methods which allow you to test if certain functions return certain things.
* chai is an extension of this built in assertion functionality, and allows even more assertion methods as seen in test/appTest.js.


## how to write a test
  * consider the methods purpose
  * consider the expected input and the expected output
  
  
  ```javascript
  let squarer = (n1) => {
    return n1 * n1;
  }
  
  describe('square method',() => {
    it('should return the square of a number', () => {
      let input = 2;
      let output = 4;    
      let result = squarer(2);
      assert(result,output);
    })
  })
  ```
