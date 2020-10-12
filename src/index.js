const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const arrOfWords = expr.split('**********');
    arrOfWords.forEach((word, wordIndex) => {
        let encodedLetterWithDashesAndDots = '';
        let finalWord = '';
        for (let i = 0; i < word.length; i += 10) {
            let encodedLetter = word.slice(i, i + 10);
            const firstMatterSymbol = encodedLetter.indexOf('1');
            encodedLetter = encodedLetter.slice(firstMatterSymbol);
            encodedLetterWithDashesAndDots = encodedLetter.replace(/10/g, '.');
            encodedLetterWithDashesAndDots = encodedLetterWithDashesAndDots.replace(/11/gi, '-');
            finalWord = finalWord + MORSE_TABLE[encodedLetterWithDashesAndDots];
        }
        arrOfWords[wordIndex] = finalWord;
    });

    return arrOfWords.join(' ');

}

module.exports = {
    decode
}