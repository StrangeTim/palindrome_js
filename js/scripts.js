function palindrome(user_input) {
  var norm = normalize(user_input);
  var length = norm.length;
  if ((length % 2 ) !== 0) {
    var mid = length/2;
    norm = norm.substr(0, Math.floor(mid)) + norm.substr(Math.ceil(mid));
  }
  return checkSides(norm.split(""));
}

function normalize(inputs) {
  var words = inputs.split(" ")
  words.forEach(function(element, index, array) {
    var temp_word = element.replace(/!|"|'|\.|"?"|,|:/g, "");
    array[index] = temp_word.toLowerCase();
  });
  return words.join("");
}

function checkSides(norm) {
  var word_a = norm;
  var length = word_a.length;
  if ((word_a[0] === word_a[length-1]) && length === 2 ) {
    return true;
  } else if (word_a[0] !== word_a[length-1]) {
    return false;
  } else {
    return checkSides(word_a.slice(1, (length-1) ));
  }
}
