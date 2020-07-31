var censor = (function() {
    function convertToAsterisk(word) {
        var asteriskSentence = '';
        for(var asterisks=0;asterisks<word.length;asterisks++) {
            asteriskSentence+='*';
        }
        return asteriskSentence;
    }

    return function(sentence, bannedWords) {
        sentence    = sentence      || undefined;
        bannedWords = bannedWords   || undefined;

        if(sentence!==undefined && bannedWords!==undefined) {
            for(var word=0;word<bannedWords.length;word++) {
                sentence = sentence.replace(bannedWords[word], convertToAsterisk(bannedWords[word]));
            }
        }

        return sentence;
    };
})();

var sentence = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `;


var bannedWords = [
    'dolor',
    'elit',
    'quis',
    'nisi',
    'fugiat',
    'proident',
    'laborum'
];
sentence = censor(sentence, bannedWords);
console.log(sentence)