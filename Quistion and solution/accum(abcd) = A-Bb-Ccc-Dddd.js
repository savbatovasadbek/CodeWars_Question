/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/
// ------ My solution ------->
function accum(s) {
  const arr = s.split("").map((el, idx) => {
    let signLarge = el.toUpperCase();
    let signSmall = el.toLowerCase();
    for (let i = 0; i < idx; i++) {
      signLarge += signSmall;
    }
    return signLarge;
  });
  const result = arr.join("-");
  return result;
}

const { log } = console;
log(accum("AbCd"));

// --------- Best practise ------->
// #1
// function accum(s) {
//   return s
//     .split("")
//     .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
//     .join("-");
// }

// #2
// function accum(s) {
//   return s
//     .split("")
//     .map(function (c, i) {
//       return c.toUpperCase() + Array(i + 1).join(c.toLowerCase());
//     })
//     .join("-");
// }

// #3
// function accum(s) {
//   return s
//     .split("")
//     .map((el, i) => {
//       return (
//         el.toLocaleUpperCase() + Array(i).fill(el.toLocaleLowerCase()).join("")
//       );
//     })
//     .join("-");
// }
