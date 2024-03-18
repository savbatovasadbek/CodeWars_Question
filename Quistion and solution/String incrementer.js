/* 
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/
console.log(incrementString("fo99obar99"));

function incrementString(strng) {
  function mixUp(strng, len, num) {
    let text = strng.substring(0, len - num);
    let currentNum = (Number(strng.substring(len - num)) + 1).toString();
    let mix = text + Array(num - currentNum.length + 1).join("0") + currentNum;
    return mix;
  }

  let len = strng.length;
  let num = 0;
  let res = "";

  for (let i = len - 1; i >= 0; --i) {
    if (!isNaN(strng[i])) {
      num++;
    } else {
      if (num == 0) {
        res = strng + 1;
        return res;
      } else {
        res = mixUp(strng, len, num);
        return res;
      }
    }
  }

  if (!isNaN(strng)) {
    return mixUp(strng, len, num);
  }
}

// best Solutions
// #1
// const incrementString = (s) => s.replace(/[0-8]?9*$/, (m) => String(++m));

// #2
// const incrementString = s => s.replace(/[0-8]?9*$/, m => ++m);
