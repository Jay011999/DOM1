// return numbers only
let randomArray = [
    575,
    646,
    4454,
    456563,
    3535454,
    6565,
    45,
    67,
    544,
    "abc",
    "dgfdhf",
    true,
    false,
  ];
  
  function returnNum() {
    return randomArray.filter((randomArray) => typeof randomArray == "number");
  }
  
  console.log(returnNum());
  