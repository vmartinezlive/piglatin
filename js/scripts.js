//business logic
var vowels = ['a', 'e', 'i', 'o', 'u'];
var consonants = ['b', 'c' , 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y'];

function isVowel(letter) {
  vowels.forEach(function(vowel){
    if (letter === vowel) {
      return true;
    } else {
      return false;
    }
  });
  // for (var i = 0; i < vowels.length; i++) {
  //   console.log(vowels[i]);
  //   if (letter === vowels[i]) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}
//
// // function isConsonant (letter) {
// //   for (var i=0; i < consonants.length; i++) {
// //     if (letter === consonants[i]) {
// //       return true;
// //     } else {
// //       return false;
// //     }
// //   }
// // }
function translateToPitLatin(word){
  if (word === "a" || word === "e" || word === "i") {
    return word+"way";
  }
}

//user interface logic
$(document).ready(function() {
 $('#pig-latin-form').submit(function(event) {
   event.preventDefault();

   var phraseToTranslate = $('input#pig-latin').val();
   var result = isVowel(phraseToTranslate);
   $('#results').text(result);

 });
});
