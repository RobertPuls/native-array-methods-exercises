function multiplyBy10 (array) {
 return array.map(num => num * 10);
};
//
function shiftRight (array) {
 // your code here
 let shifted = [array[array.length-1]];

 for (var i = 0; i < (array.length-1); i++) {
   shifted.push(array[i]);
 }
 return shifted;
};

function onlyVowels (array) {
 return array.map(word => {
   let letters = "";
   for (var i = 0; i < word.length; i++) {
     if (word[i].match(/["a","e","i","o","u"]/)){
       letters+=word[i];
     }
   }
   return letters;
 });
};

function doubleMatrix (array) {
 return array.map( nums => nums.map(num => num*2));
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
