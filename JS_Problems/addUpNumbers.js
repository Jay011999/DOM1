//pass and recursive

function returnSumofNum(num){
    if(num==0){
      return num;
    }
    return num+ returnSumofNum(num-1);
  }
  
  console.log(returnSumofNum(10));