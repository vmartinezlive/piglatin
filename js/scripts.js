//business logic
var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
var consonants = ['b', 'B', 'c', 'C', 'd', 'D', 'f', 'F', 'g', 'G', 'h', 'H', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z '];

function phraseTranslation(phrase){
  var phraseArray = phrase.split(" ");
  var translatedPhrase = [];
  for (var i = 0; i < phraseArray.length; i ++) {
    var translatedWord = translateToPigLatin(phraseArray[i]);
    translatedPhrase.push(translatedWord);
  }
    return translatedPhrase.join(" ");
}

function translateToPigLatin(word){
  if (startsWithVowel(word)) {
    return word + "way";
  } else if (word.includes('qu') || word.includes('Qu')) {
    return exceptionQu(word);
  } else if (startsWithConsonant(word)){
    return transformConsonantWord(word);
  }
}
//make sure to return the function within the function

function startsWithVowel(word) {
  var letter = word.slice(0, 1);
  for (var i = 0; i < vowels.length; i++) {
    if (vowels.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }
}

function exceptionQu(word){
    var index = (word.indexOf('u')) + 1;
    return word.slice(index) + word.slice(0, index) + "ay";
}

function startsWithConsonant (word) {
  var letter = word.slice(0, 1);
  for (var i = 0; i < consonants.length; i++) {
    if (consonants.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }
}

function transformConsonantWord (word) {
  for (var i= 0; i < word.length; i++) {
    var character = word.charAt(i);
    if (startsWithVowel(character)) {
      return word.slice(i) + word.slice(0, i) + "ay";
    }
  }
}

//user interface logic
$(document).ready(function() {
 $('#pig-latin-form').submit(function(event) {
   event.preventDefault();

   var inputToTranslate = ($('input#pig-latin').val()).toLowerCase();
   var result = phraseTranslation(inputToTranslate);
   $('#results').text(result);

 });
});
