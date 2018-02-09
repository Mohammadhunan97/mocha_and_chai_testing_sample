module.exports = {
	sayHello: () =>{
		return 'hello'
	},
	sayBye: () => {
		return 'bye'
	},
	addNums: (n1,n2) => {
		let num1 = n1 || 0;
		let num2 = n1 || 0;
		return num1 + num2;
	}
}