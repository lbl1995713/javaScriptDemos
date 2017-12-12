//只输出了一次hi， 不会陷入死循环
//说明emitter.on中第二个传入的方法，只会在emitter.eimit的时候会被调用，而emitter.on时仅仅只是绑定了一个方法，而不会执行
const EventEmitter = require('events');

let emitter = new EventEmitter();

emitter.on('myEvent', function sth () {
  emitter.on('myEvent', sth);
  console.log('hi');
});

emitter.emit('myEvent');
