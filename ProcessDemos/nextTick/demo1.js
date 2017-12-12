//不会有任何输出， 递归会无限的添加test方法到event loop
function test() { 
  console.log('nextTick')
  process.nextTick(() => test());
}