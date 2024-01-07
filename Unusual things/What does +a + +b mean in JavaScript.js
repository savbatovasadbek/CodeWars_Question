// #1. There was an answer to a nested array problem on stack overflow that involved a return statement +a + +b. (no period) What is this? What does it do? It seems to add, but I'm not sure how it does that. How does it differ from a + b? The code is below, and it works:

var array = [1, 2, [3, 4], [[1, 5]], [5]];
var sum = array
  .toString()
  .split(",")
  .reduce(function (a, b) {
    return a + +b;
  });

console.log(sum);

// x = '9';          // '9'
// x = +'9';         // 9
// x = '9' + '9';    // '99'
// x = +'9' + +'9';  // 18

// ========================
