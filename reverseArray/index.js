function reverseArray(arr) {
  const reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

const arr2 = [1, 2, 3, 4, 5];
console.log(reverseArray(arr2));
