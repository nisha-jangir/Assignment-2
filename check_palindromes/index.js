function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const reversedStr = cleanedStr.split("").reverse().join("");

  return cleanedStr === reversedStr;
}

const testString1 = "A man, a plan, a canal, Panama";
const testString2 = "race a car";

console.log(isPalindrome(testString1));
console.log(isPalindrome(testString2));
