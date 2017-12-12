/**
 * date: 2017-12-12
 * author: lbl
 * description: null
 */

/**
 *   先输出hello, 10s 后输出over
 *   所以是直接执行Promise对象，然后找then方法，找到之后发现是在setTimeout 10s后再执行，因为10s后再执行.then
 */
let doSth = new Promise((resolve, reject)=>{
	console.log('hello')
	resolve()
})

setTimeout(()=>{
	doSth.then(()=>{
		console.log('over')
	})
}, 10000)