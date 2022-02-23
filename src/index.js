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

MORSE_TABLE["*"] = " "

function decode(expr) {
    let array = []
    let newArray = []
    let modifyArray = []
  
    for (let i = 0; i < expr.length; i += 10) {
      array.push(expr.slice(i, i + 10))
    }
  
    for (let elem of array) {
      newArray.push(
        elem.slice(elem.indexOf("1")).replace(/11/gi, "-").replace(/10/gi, ".")
      )
    }
  
    return (modifyArray = newArray.map((elem) => MORSE_TABLE[elem]).join(""))
  }
  
  module.exports = {
    decode,
  }