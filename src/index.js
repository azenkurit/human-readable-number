module.exports = function toReadable (number) {
    
  let tensNumber = [ "twenty",  "thirty",  "forty",  "fifty",  "sixty",  "seventy",  "eighty",  "ninety",];  
  let rez = "";

  if ( number < 10 ) {
      rez = returnSinglerNumber( number )
  };
  if ( number >= 10  && number <20 ) {
      rez = returnRoundTens( number );
  }
  if ( number >= 20 ) {
    let hundreds = Math.floor( number / 100) ;
    if ( hundreds > 0 ) {
        rez += returnSinglerNumber(hundreds)+ " hundred"
    };
    number = number - hundreds*100; 
    if ( number >= 20 ) {
        let tens = number % 10;
        rez += " "+tensNumber[ tens ]
    }    
  }   
  
  return rez;
}


function returnSinglerNumber ( num ) {
    let singleNumbers = [ "zero",   "one",  "two",   "three",  "four",   "five",  "six",  "seven",  "eight",  "nine"];
    return singleNumbers[ num ];
}
function returnRoundTens ( num ) {
    let singleTens = [ "ten",  "eleven",  "twelve",  "thirteen",  "fourteen",  "fifteen",  "sixteen",  "seventeen",  "eighteen",  "nineteen"];
    return singleTens[ num - 10]
}
