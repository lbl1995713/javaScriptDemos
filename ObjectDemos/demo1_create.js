/**
 * 结论: new 创建的实例 本身Foo中包含的this属性会完全拷贝
 *           但是prototype上的属性是挂在实例的 __proto__上的， 如果访问实例的一个属性会先找这个实例本身是否包含这个属性
 *           如果没找到则再从原型链向上找，可以通过Object.hasOnwProperty来判断该属性是否在实例本身还是在原型链上 
 *
 *           如果工厂函数中this的属性为一个对象，那么new 出来的实例对这个属性的拷贝为深拷贝
 *
 *       Object.create  是将传入的参数挂载在实例的__proto__上，
 */

function Foo() {
	this.x = 1
	this.obj = {a : 'aa', b: 'bb'}
}
Foo.prototype.y = 2
Foo.prototype.objY = {c: 'cc'}

let foo1 = new Foo()
let bar = new Foo()

// console.log(foo1.y) //2
// console.log(foo1.hasOwnProperty('y')) // false
// foo1.y = 3
// console.log(foo1.y) //3
// console.log(foo1.hasOwnProperty('y'))  // true
// console.log(bar.y) //2 原型链上

// console.log(foo1.obj, bar.obj)
// foo1.obj.a = 'xx'
// console.log(foo1.obj, bar.obj)

// console.log(foo1.y)
// Foo.prototype.y = 3
// console.log(foo1.y)


let foo2 = Object.create(Foo)
console.log(foo2.__proto__)