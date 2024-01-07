/* 
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"
*/
// ---------- My solution --------->
function rgb(r, g, b) {
  const arr = [r, g, b]
    .map((el) => {
      if (el > 255) el = 255;
      if (el < 0) el = 0;
      let hex = el.toString(16);
      if (hex.length === 1) hex = "0" + hex;
      const result = hex
        .split("")
        .map((el) => el.toUpperCase())
        .join("");
      return result;
    })
    .join("");
  return arr;
}

console.log(rgb(255, 255, 255));

// ---------- Best practise ------>
// #1
// function rgb(r, g, b) {
//   return toHex(r) + toHex(g) + toHex(b);
// }

// function toHex(d) {
//   if (d < 0) {
//     return "00";
//   }
//   if (d > 255) {
//     return "FF";
//   }
//   return ("0" + Number(d).toString(16)).slice(-2).toUpperCase();
// }

// #2
// const rgb = (...arg) =>
//   arg
//     .map((it) =>
//       Math.max(Math.min(it, 255), 0).toString(16).padStart(2, "0").toUpperCase()
//     )
//     .join("");

// #3
// function decToHex(n) {
//   var mods = [];
//   var num = n;
//   var mod;
//   const HEXHASH = {
//     10: "A",
//     11: "B",
//     12: "C",
//     13: "D",
//     14: "E",
//     15: "F",
//   };

//   while (num > 0) {
//     mod = num % 16;
//     mod >= 10 ? mods.push(HEXHASH[mod]) : mods.push(mod);
//     num = Math.floor(num / 16);
//   }

//   return mods
//     .reverse()
//     .map(function (n) {
//       return n.toString();
//     })
//     .join("");
// }

// //decToHex(148);

// function fillZeroes(s) {
//   if (s.length === 0) return "00";
//   if (s.length === 1) return "0" + s;
//   return s;
// }

// function rgb(r, g, b) {
//   var args = Array.prototype.slice.call(arguments).map(function (n) {
//     return n > 255 ? 255 : n;
//   });

//   var red = decToHex(args[0]);
//   var green = decToHex(args[1]);
//   var blue = decToHex(args[2]);

//   return fillZeroes(red) + fillZeroes(green) + fillZeroes(blue);
// }
