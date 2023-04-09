
function List(start,end,step){
  if(start>=end)
    throw new Error('start must be less than end')
  //public properties
  this.start = start
  this.end = end
  this.step = step
  //private properties and methods
  var listArr = []
  function fillArr(){
    for(var i=start;i<=end;i+=step){
      listArr.push(i)
    }
  }
  fillArr()
  //public methods
  this.append = function(val){
    if(val === this.end + this.step){
      listArr.push(val)
      this.end = val
    }else{
      throw new Error('you must follow the sequence of the list')
    }
  }
  this.prepend = function(val){
    if(val === this.start - this.step){
      listArr.unshift(val)
      this.start = val
    }else{
      throw new Error('you must follow the sequence of the list')
    }
  }
}
List.prototype.toString = function(){
  var str = ''
  for(var i=this.start;i<=this.end;i+=this.step){
    str += i + ' : '
  }
  return str.substring(0,str.length-2).trim()
}
List.prototype.pop = function(){
  this.end -= this.step
  return this.end + this.step
}
List.prototype.dequeue = function(){
  this.start += this.step
  return this.start - this.step
}
//test cases
var x = new List(0,10,2)
x.append(12)
x.append(14)
console.log(x.toString())
x.prepend(-2)
x.pop()
console.log(x.toString())
x.dequeue()
console.log(x.toString())

var l = new List(100,200,10)
l.append(210)
l.append(220)
console.log(l.toString())
l.prepend(90)
l.pop()
console.log(l.toString())
l.dequeue()
console.log(l.toString())
