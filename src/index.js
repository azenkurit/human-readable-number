module.exports = function toReadable (number) {
    
  let tensNumber = [ "", "twenty",  "thirty",  "forty",  "fifty",  "sixty",  "seventy",  "eighty",  "ninety",];  
  let qqqq = [];

  if ( number < 10 ) {     
      qqqq.push(returnSinglerNumber( number ));
  };
  if ( number >= 10  && number <20 ) {
      qqqq.push(returnRoundTens( number ))
  }
  if ( number >= 20 ) {
    let hundreds = Math.floor( number / 100) ;
    if ( hundreds > 0 ) {        
        qqqq.push(returnSinglerNumber(hundreds));
        qqqq.push("hundred");
    };
    number = number - hundreds*100; 
    let tens = Math.floor(number / 10)
    if ( number >= 20 ) {               
        qqqq.push(tensNumber[ tens - 1 ]);
        number = number - tens*10;
        if ( number > 0 ) {
            if ( number < 10 ) {                
                qqqq.push( returnSinglerNumber( number ) )
            };
            if ( number >= 10  && number <20 ) {               
                qqqq.push( returnRoundTens( number ) )
            }
        }
    }
    else {       
        if ( number > 0 ) {
            if ( number < 10 ) {                
                qqqq.push( returnSinglerNumber( number ) );
            };
            if ( number >= 10  && number <20 ) {                
                qqqq.push(returnRoundTens( number )  );
            }
        }
    }    
    
  }   
  
  return qqqq.join(" ");
}


function returnSinglerNumber ( num ) {
    let singleNumbers = [ "zero",   "one",  "two",   "three",  "four",   "five",  "six",  "seven",  "eight",  "nine"];
    return singleNumbers[ num ];
}
function returnRoundTens ( num ) {
    let singleTens = [ "ten",  "eleven",  "twelve",  "thirteen",  "fourteen",  "fifteen",  "sixteen",  "seventeen",  "eighteen",  "nineteen"];
    return singleTens[ num - 10]
}
