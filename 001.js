function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}

var result = palindrome("ibu ratna antar ubi");
console.log(result);

var result = palindrome("kasur ini rusak");
console.log(result);

var result = palindrome("A nut for a jar of tuna.");
console.log(result);

var result = palindrome("Borrow or rob?");
console.log(result);

var result = palindrome("Was it a car or a cat I saw?");
console.log(result);

var result = palindrome("Yo, banana boy!");
console.log(result);

var result = palindrome("UFO tofu?");
console.log(result);