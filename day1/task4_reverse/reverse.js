
function reverse_nums(){
  if(arguments.length === 0)
    return 'please passing any parameter';
  [].reverse.apply(arguments);
  // [].reverse.call(arguments);
  // var rev = [].reverse.bind(arguments);
  // rev();
  for(var i=0;i<arguments.length;i++){
    if(!isFinite(arguments[i]))
      throw new Error('this function accepts number only')
  }
  return arguments
}

function reverse_strings(){
  if(arguments.length === 0)
    return 'please passing any parameter';
  // [].reverse.apply(arguments);
  [].reverse.call(arguments);
  // var rev = [].reverse.bind(arguments);
  // rev();
  for(var i=0;i<arguments.length;i++){
    if(!(typeof arguments[i] === 'string' || arguments[i] instanceof String))
      throw new Error('this function accepts strings only')
  }
  return arguments
}

// for test
console.log(reverse_nums(10,20,30,40,50,60))
console.log(reverse_strings('ahmed', 'mohamed', 'ali', 'hassan'))





// function reverseArgs(10,20,30,40,50,'numbers'){
//   if(arguments.length === 0)
//   return 'please passing any parameter';
//   var dataType = ([].splice.call(arguments, arguments.length-1, 1))[0];
//   [].reverse.apply(arguments)
//   // console.log('data',dataType);
//   if(dataType === 'numbers'){
//     // console.log([].splice.call(arguments, arguments.length-1, 1));
//     // console.log(arguments);
//     // console.log(arguments);
//     console.log(arguments);
//     for(var i=0;i<arguments.length;i++){
//       if(!isFinite(arguments[i]))
//         throw new Error('u choose to enter numbers only')
//       console.log(arguments[i])
//     }
//   }else if(dataType === 'strings'){

//   }
  
//   // ''.substring.call(arguments, 0, arguments.length-1)
//   // console.log([].splice.call(arguments, 0, arguments.length-1))
//   // [].reverse.apply(arguments);
//   // [].reverse.call(arguments);
//   // [].reverse.bind(arguments); // not working
//   // for(var i=0;i<arguments.length;i++){
//   //   if(!isFinite(arguments[i]))
//   //     throw new Error('this function accepts number only')
//   //   console.log(arguments[i])
//   // }
//   return arguments
// }

