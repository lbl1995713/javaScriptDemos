/**
 * Observer是一个数据监听器，其实现核心方法就是前文所说的Object.defineProperty()。
 * 如果要对所有属性都进行监听的话，那么可以通过递归方法遍历所有属性值,
 * 并对其进行Object.defineProperty()处理。如下代码，实现了一个Observer。
 */
function defineReactive(data, key, val){
	observe(val)
	var dep = new Dep()
	Object.defineProperty(data, key, {
		enumerable: true, //可枚举
		configurable: true, //可删除重新定义
		get: function() {
			if(Dep.target){ //是否需要添加订阅者
				dep.addSub(Dep.target)
			}
			return val
		},
		set: function(newVal) {
			if(val == newVal){
				return
			}
			val = newVal
			console.log('属性' + key + '已经被监听了，现在值为：“' + newVal.toString() + '”')
			dep.notify()
		}
	})
}
Dep.target = null

function Dep() {
	this.subs = []
}

Dep.prototype = {
	addSub: function(sub) {
		this.subs.push(sub)
	},
	notify: function(){
		this.subs.forEach(function(sub){
			sub.update()
		})
	}
}

function observe(data){
	if(!data || typeof data !== 'object'){
		return
	}
	Object.keys(data).forEach(function(key){
		defineReactive(data, key, data[key])
	})
}

var libary = {
	book1: {
		name: ''
	},
	book2: ''
}
observe(libary)
libary.book1.name = 'vue权威指南'
libary.book2 = '没有此书籍'