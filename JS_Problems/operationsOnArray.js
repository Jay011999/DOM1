// return numbers only
let randomArray=[575,646,4454,456563,3535454,6565,45,67,544];

function operationsOnArray(){
  var newArray=[];
  const minimum=Math.min(...randomArray);
  const maximum=Math.max(...randomArray);
  const len=randomArray.length;
  const average=randomArray.reduce((acc,currentValue)=>acc+currentValue,0)/len;
  newArray.push(maximum,minimum,len,average);

  return newArray;
}

console.log(operationsOnArray());



