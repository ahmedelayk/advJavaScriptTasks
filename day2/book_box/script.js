
// Book Object
function Book(title, numofChapters, author, numofPages, publisher, numofCopies){
  this.title = title
  this.numofChapters = numofChapters
  this.author = author
  this.numofPages = numofPages
  this.publisher = publisher
  this.numofCopies = numofCopies
  Book.count++;
}
Book.count = 0
Book.getBookCount = function(){
  return 'number of created books: ' +Book.count
}

// Box Object
function Box (height, width, length, material){
  this.height = height
  this.width = width
  this.length = length
  this.material = material
  this.content = [] // an array containing books
}
Box.prototype.addBook = function(book){
  var found = false
  if(this.content.length >1){
    for(var i=0;i<this.content.length;i++){
      if(this.content[i].title === book.title){
        this.content[i].numofCopies += book.numofCopies
        found = true
        break
      }
    }
    if(!found){
      this.content.push(book)
    }
  }else{
    this.content.push(book)
  }
}
// Box.prototype.addBook = function(book){
//   this.content.push(book)
// }
Box.prototype.getNumberOfBooks = function(){
  return 'number of books in box: ' +this.content.length
}
Box.prototype.deleteBook = function(booktTitle){
  for(var i=0;i<this.content.length;i++){
    if(this.content[i].title === booktTitle){
      if(this.content[i].numofCopies >1){
        this.content[i].numofCopies--
        console.log('number of copies remained: '+this.content[i].numofCopies)
        break
      }else{
        console.log(this.content[i].title+' deleted from box')
        this.content.splice(i,1)
        break
      }
    }
  }
}
Box.prototype.valueOf = function(){
  return this.content.length
}

var book1 = new Book("Book1", 9, "ahmed", 304, "Publisher1", 5)
var book2 = new Book("Book2", 11, "mohamed", 387, "Publisher2", 9)
var book3 = new Book("Book3", 10, "hassan", 213, "Publisher3", 3)
var book4 = new Book("Book4", 8, "ali", 432, "Publisher4", 6)
var book5 = new Book("Book5", 3, "ali", 186, "Publisher5", 2)
console.log(Book.getBookCount())

var box = new Box(50, 30, 15, "Cardboard")
box.addBook(book1)
box.addBook(book2)
box.addBook(book5)
console.log(box.getNumberOfBooks())
console.log(box.content)

var box2 = new Box(90, 70, 25, "wood")
box2.addBook(book3)
box2.addBook(book4)
console.log(box2.getNumberOfBooks())
box2.deleteBook("Book3")
console.log(box2.content)

console.log(box + box2)

