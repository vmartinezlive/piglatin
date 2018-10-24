//business logic
var vowels = ['a', 'e', 'i', 'o', 'u'];
var consonants = ['b', 'c' , 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y'];

function translateToPigLatin(word){
  if (isVowel(word)) {
    return word+"way";
  } else if (isConsonant(word)){
    var letter = word.slice(0, 1);
    var remainder = word.slice(1);
    return remainder + letter + "ay";
  }
}

function isVowel(word) {
  var letter = word.slice(0, 1);
  for (var i = 0; i < vowels.length; i++) {
    if (vowels.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }
}

function isConsonant (word) {
  var letter = word.slice(0, 1);
  var remainder = word.slice(1);
  for (var i = 0; i < consonants.length; i++) {
    if (consonants.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }
}

//user interface logic
$(document).ready(function() {
 $('#pig-latin-form').submit(function(event) {
   event.preventDefault();

   var phraseToTranslate = $('input#pig-latin').val();
   var result = translateToPigLatin(phraseToTranslate);
   $('#results').text(result);

 });
});
