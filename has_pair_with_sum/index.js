function hasPairWithSum(arr, x) {
  const seenNumbers = {};

  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
    const neededNumber = x - currentNumber;

    if (seenNumbers[neededNumber]) {
      return true;
    }

    seenNumbers[currentNumber] = true;
  }

  return false;
}

const A = [1, 4, 45, 6, 10, -8];
const x = 16;

if (hasPairWithSum(A, x)) {
  console.log("Array has two elements with the given sum.");
} else {
  console.log("Array does not have two elements with the given sum.");
}
