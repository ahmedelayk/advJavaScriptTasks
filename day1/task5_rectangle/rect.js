
var rectangle = new Object()
rectangle.width = 20
rectangle.height = 10
rectangle.area = function(){
  return this.width * this.height
}
rectangle.perimeter = function(){
  return 2 * (this.width + this.height)
}
rectangle.displayInfo = function(){
  return('width = '+this.width+', height = '+this.height+', area = '+this.area()+', perimeter = '+this.perimeter())
}
var h3 = document.getElementsByTagName('h3')[0]
h3.innerHTML = rectangle.displayInfo()