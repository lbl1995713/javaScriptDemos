/*
	创建一个进程A。
	在进程A中创建进程B，我们可以使用fork方式，或者其他方法。
	对进程B执行 setsid 方法。
	进程A退出，进程B由init进程接管。此时进程B为守护进程。
*/


//获取相关依赖
var spawn = require('child_process').spawn;
var process = require('process');

//将对b.js的执行进程设置为当父进程(node)结束也不会被杀死
var p = spawn('node',['b.js'],{
        detached : true
    });
//退出父进程
process.exit(0);

/*  b.js
var fs = require('fs');
var process = require('process');

fs.open("/Users/mebius/Desktop/log.txt",'w',function(err, fd){
	console.log(fd);
	while(true)
	{
		fs.write(fd,process.pid+"\n",function(){});
	}
});
*/