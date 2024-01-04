//pass and recursive

function returnSumofNum(num) {
  if (num == 0) {
    return num;
  } else {
    return num + returnSumofNum(num - 1);
  }
}

console.log(returnSumofNum(10));
