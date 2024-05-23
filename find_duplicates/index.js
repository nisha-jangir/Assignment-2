function findDuplicates(arr) {
  const n = arr.length;
  const seen = new Array(n).fill(false);
  const duplicates = [];

  for (let i = 0; i < n; i++) {
    if (seen[arr[i]]) {
      duplicates.push(arr[i]);
    } else {
      seen[arr[i]] = true;
    }
  }

  return duplicates;
}

const arr = [0, 3, 1, 2, 2, 3];
const duplicates = findDuplicates(arr);

console.log("Duplicates:", duplicates);
