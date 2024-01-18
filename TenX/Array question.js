// arr = [1,2,3,4,5] => n=3 n kirib keladi n ga nechi kirib kelsa chapdan shunchani kesib ongdan qoshish kerak
const cutArraySection = (arr, n) => {
  if (arr.length < n - 1 && n < 0) {
    return arr;
  }
  const cutSection = [...arr.slice(n), ...arr.slice(0, n)];
  return cutSection;
};

// console.log(cutArraySection([1, 2, 3, 4, 5], 5));

// ---------------- === ---------------------->
// arr = [1,5,-3,6,-1,0,8] => sortlash
const sortingArray = (arr) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = 0; j <= i; j++) {
      if (arr[i] < arr[j]) {
        let something = arr[i];
        arr[i] = arr[j];
        arr[j] = something;
      }
    }
  }
  return arr;
};

// console.log(sortingArray([1, 5, -3, 6, -1, 0, 8]));

// ---------------- === ---------------------->
// arr = [1,2,3,4,5] => [5,1,4,2,3] => bunda bitta katta va bitta kamini qoshish

const maxMinNumber = (arr) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = 0; j <= i; j++) {
      if (arr[i] < arr[j]) {
        let something = arr[i];
        arr[i] = arr[j];
        arr[j] = something;
      }
    }
  }

  const sortedArray = [...arr];
  const result = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (i % 2 === 0) {
      result.push(sortedArray[sortedArray.length - 1]);
      sortedArray.splice(sortedArray.length - 1, 1);
    } else {
      result.push(sortedArray[0]);
      sortedArray.splice(0, 1);
    }
  }
  return result;
};

// console.log(maxMinNumber([1, 2, 3, 4, 5]));
