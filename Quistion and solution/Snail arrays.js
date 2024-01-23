/* 
The Problem
Create a function that accepts and array. Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

Examples: 
    snail( [[1,2,3], [4,5,6],[7,8,9]]) // [1,2,3,6,9,8,7,4,5] 
    snail([[1,2,3], [8,9,4], [7,6,5]]) // [1,2,3,4,5,6,7,8,9]
    snail([[1,2,3,1], [4,5,6,4], [7,8,9,7], [7,8,9,7]]) // [1,2,3,1,4,7,7,9,8,7,7,4,5,6,8,9]
The image below may help. You can also go to the Codewars page for more information and to test out your solution

https://hellodevworld.com/365-days-of-coding/snail-array-challenge-solution-javascripts
*/
const snail = (arr) => {
  var finalArray = [];
  while (arr.length) {
    finalArray.push(...arr.shift());
    arr.map((row) => finalArray.push(row.pop()));
    arr.reverse().map((row) => row.reverse());
  }
  return finalArray;
};

console.log(
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
