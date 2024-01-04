//compare last 2 values of string 

function compareEndString(string1,string2){
    let newstr1=String(string1);
    let newstr2=String(string2);
    return newstr1.endsWith(newstr2);
  }
  
  console.log(compareEndString('prem','em'));

//find index of array
  let arr=['dgdd',566,'4545']
  function findIndex(arr, element) {
    return arr.indexOf(element);
  }

  console.log(findIndex(arr,566));


  //create a fnction that repeats each letter twice

  function repeatDouble(string3){
    let newStr3=String(string3);
    return newStr3.split('').map(newStr3=>newStr3.repeat(2));
  }

  console.log(repeatDouble('abcdefghijk'));

  //function to repeat letters check
function checkRepeatingLetters(array) {
    let result = [];
    array.forEach(string => {
        let counts = {};
        for (let i = 0; i < string.length; i++) {
            let char = string.charAt(i);
            counts[char] = (counts[char] || 0) + 1;
        }
        let repeats = Object.keys(counts).filter(key => counts[key] > 1);
        if (repeats.length > 0) {
            result.push({[string]: repeats});
        }
    });
    return result;
  }
  let arrayNew=['asfdfd','gurvah','ppp']
  console.log(checkRepeatingLetters(arrayNew));

  


