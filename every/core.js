// Check to see if all elements in an array
// are even numbers.

function allEven (input) {
  return input.every(x => x%2 === 0);
};

// Check to see if all elements in an array
// are of the same type.

function allSameType (input) {
  let type = typeof input[0];
  return input.every(function (x) {
    return typeof x === type;
  });
};

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix (input) {
  return input.every(function (x){
    return (Array.isArray(x) && x.every(function(y){
      return y > 0;
    }));
  });
};

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels (input) {
  let check;
  for (var i = 0; i < input.length; i++) {
    let vowels = [];
    for (var j = 0; j < input[i].length; j++) {
      if (input[i][j].match(/["a","e","i","o","u"]/)) {
        vowels.push(input[i][j]);
      }
    }
    check = vowels.every(vowel => vowel === vowels[0]);
  }
  return check;
};

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
