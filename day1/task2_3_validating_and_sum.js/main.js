// function accepts only two parameters
function addTwo(num1, num2){
  if(arguments.length !== 2)
    throw new Error('this function accepts only two parameters')
  if(!(isFinite(num1) && isFinite(num2))){
    throw new Error('parameters can be numbers only')
  }
  return num1+num2
}

// function adds n numbers only
function addNums(){
  var sum = 0
  if(arguments.length === 0)
    return 0
  else{
    for(var i=0;i<arguments.length;i++){
      if(!isFinite(arguments[i]))
        throw new Error('parameters can be numbers only')
      sum += arguments[i]
    }
  }
  return sum
}