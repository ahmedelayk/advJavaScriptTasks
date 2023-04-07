
var user = {
  id: 1,
  name: 'ahmed',
  age: 24,
  address: 'aghour',
  displayInfo: function(){
    return 'id:: '+this.id+', name:: '+this.name+', age:: '+this.age+', address:: '+this.address
  },
  getSetGen: function(){
    var self = this
    // console.log('out',self)
    for(key in self){
      // console.log('inner',self);
      (function(key){
        // console.log(self);
        if(typeof self[key] !== 'function'){
          self['set'+key] = function(val){
            self[key] = val
          }
          self['get'+key] = function(){
            return self[key]
          }
        }
      })(key)
    }
  }
}
var obj = {
  id:700,
  location: "sd101",
}
user.getSetGen()
user.getSetGen.apply(obj)

// function getSetGen(obj){
//   for(key in obj){
//     (function(key){
//       if(typeof obj[key] !== 'function'){
//         obj['set'+key] = function(val){
//           this[key] = val
//         }
//         obj['get'+key] = function(){
//           return this[key]
//         }
//       }
//     })(key)
//   }
// }
// getSetGen(user)

console.log(user.displayInfo())
user.setid(7)
user.setname('mohamed')
user.setage(30)
user.setaddress('cairo')
console.log(user.displayInfo())
console.log(user.getid())
console.log(user.getname())
console.log(user.getage())
console.log(user.getaddress())
