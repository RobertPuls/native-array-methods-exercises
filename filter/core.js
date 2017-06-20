function onlyEven (array) {
  return array.filter((arr) => arr%2 === 0);
};

function onlyOneWord (array) {
  // your code here
return array.filter(word => !word.match(" "));
};

function positiveRowsOnly (array) {
  // your code here
  return array.filter(nums => nums.every(num => num > 0));
};

function allSameVowels (array) {
  // your code here
  return array.filter(word => {
    let vowel = word.match(/[a,e,i,o,u]/);
    console.log(vowel[0]);
    for (var i = 0; i < word.length; i++) {
      if (word[i].match(/[a,e,i,o,u]/) && word[i] != vowel[0])
      return false;
    }
  });
};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
