"use strict";

var x = 1;
function foo(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    x = 2;
  };

  var x = 3;
  y();
  console.log(x);
}

foo();
