/* Business Logic

function pigLatin(word) {
    // The translator  to convert text to lowercase (Tranlator)
    word = word.toLowerCase()
    // Initialize array of vowels to know the characters that are  vowels
    const vowels = ["a", "e", "i", "o", "u"];
    const consonant = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y",];
    // Initialize vowel index to 0 to declare the pointer the reference point
    let vowelIndex = 0;

    if (vowels.includes(word[0])) {
        // If first letter is a vowel
        return word + "way";
    } else 
        // If the first letter isn't a vowel i.e is a consonant
        for (let char of word) {
            // Loop through until the first vowel is found
            if (vowels.includes(char)) {
                // Store the index at which the first vowel exists
                vowelIndex = word.indexOf(char);
                break;
            }
            return word.slice(vowelIndex) + word.slice(0, vowelIndex) + "ay";
        }
        // write out the final word

        let theWord = "";
        let vowelIndex = 0;
        word.forEach(function(element) {
            if (element.charAt(0) === consonant && element.charAt(1) === vowels.charAt(4)) {
                let theWord = theWord + 
            }
        })
        
}

let word = 'quick';
undefined
let wordArray = word.split(' ');
undefined
let wordArray = word.split('.');
undefined
let wordArray = word.split('');
undefined
wordArray;
(5) ["q", "u", "i", "c", "k"]
word.split('').length;
5
let indexOfVowel = word.split('')[0, 1];
undefined
let indexOfVowel = word.split('')[0]+[1];
undefined
let indexOfVowel = word.split('')[0]+word.split('')[1];
undefined
indexOfVowel
"qu"
if(word) {
    return word.split('')[2] + word.split('')[3] + word.split('')[4] + word.split('')[0] + word.split('')[1] + 'ay';
}
function quesDetector(word) {
    let text = word;
    let textArray = word.split('');
    let indexOfVowels = 0;
}

function treatQu(word) {
    if (word.slice(0, 2).toLowerCase() === "qu")
{
   return word.slice(2) + "qu" + "ay";
}
return "";
}

function firstVowelIndex(word) {
    let vowels = "aeiou";
    let vIndex = 0;
    let flag = false;
    let wordCharacters = word.split("");
    wordCharacters.forEach(function(element, index) {
        if (vowels.includes(element) && flag === false)
        { 
            vIndex = index;
            flag = true;
        }
    })
         return vIndex;
        }
        */