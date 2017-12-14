


function Person(first, last) {
  console.log(this)
  this.first = first;
  this.last = last;
}

var person = new Person("James", "Patterson");
