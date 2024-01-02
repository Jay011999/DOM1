//ex: 5! = output should be 120

function factorializeNum(number){
    if (number==0||number==1){
        return 1;
    }
    for(var i= number-1;i>=1;i--){
         number=number*i;
    }
    return number;
  }
  
console.log(factorializeNum(5));


//Recursion

function factorializeNumRec(num){
 if(num<1) return 1;
 else{
    return num* factorializeNum(num-1);
 }
}

console.log(factorializeNumRec(5));


// function factorializeNums(number){
//     return number*factorializeNum(number-1);
//   }
  
//   console.log(factorializeNums(5));