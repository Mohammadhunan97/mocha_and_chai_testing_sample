const assert = require('chai').assert,
	app 	 = require('../app');

// App is just the name of your app, for instance: ExploreNews
describe('App', () => {
	describe('sayHello method', () => {
		it('sayHello method should return hello', () => {
			let result = app.sayHello();
			assert.equal(result,'hello'); //test if the function app.sayHello() equals = 'hello';
		});
		it('sayHello method should return type string', () => {
			let result = app.sayHello();
			assert.typeOf(result,'string');
		});
	});

	describe('sayBye method', () => {
		it('sayBye method should return bye', () => {
			let result = app.sayBye();
			assert.equal(result,'bye'); 
		});
	});
	
	describe('addNums method', () => {
		it('addNumbers should be above 5', () => {
			let result = app.addNums(5,1);
			assert.isAbove(result,5);
		});
	});
});


// alternative way of writing it (not nested describes).
// describe('App', () => {
// 	it('sayHello method should return hello', () => {
// 		let result = app.sayHello();
// 		assert.equal(result,'hello'); //test if the function app.sayHello() equals = 'hello';
// 	})
// 	it('sayBye method should return bye', () => {
// 		let result = app.sayBye();
// 		assert.equal(result,'bye'); 
// 	})
// 	it('sayHello method should return type string', () => {
// 		let result = app.sayHello();
// 		assert.typeOf(result,'string');
// 	})
// 	it('addNumbers should be above 5', () => {
// 		let result = app.addNums(5,1);
// 		assert.isAbove(result,5);
// 	})
// })
