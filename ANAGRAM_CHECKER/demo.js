let str1 = "anagram";
let str2 = "anagram";

let sortedStr1 = str1.split("").sort().join("");
let sortedStr2 = str2.split("").sort().join("");

if (sortedStr1 === sortedStr2) {
  console.log("Anagram");
} else {
  console.log("Not an Anagram");
}
