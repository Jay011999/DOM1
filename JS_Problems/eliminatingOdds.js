// elimninationg odds
let randomArray=[575,646,4454,456563,3535454,6565,45,67,544];
var randomArray1=[575,646,4454,456563,3535454,6565,45,67,544];

//Imp1
function evenedArray(){
  let newArr=[];
  for(let element of randomArray){
    if(element % 2==0){
      newArr.push(element);
    }
  }
  return newArr;
}
console.log(evenedArray());

//Imp2

function filtrArray(){
  return randomArray1.filter(randomArray1=>randomArray1 %2==0 )
}
console.log(filtrArray());