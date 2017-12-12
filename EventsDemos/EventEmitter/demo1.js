
//会输出hi1 以及 hi2 
//因此emitter绑定事件不会覆盖， 只会是一个数组的形式， 依次往后执行

const EventEmitter = require('events');

let emitter = new EventEmitter();

emitter.on('myEvent', () => {
  console.log('hi 1');
});

emitter.on('myEvent', () => {
  console.log('hi 2');
});

emitter.emit('myEvent');