//Mulitply by length

let newArray=[10,20,30,40];

function multiplyLen(){
  let len=newArray.length;
  return newArray.map(newArray => newArray*len);
}

console.log(multiplyLen());