// Constructor fn is used to create  an object using function

function Human(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}

const rahul = new Human('rahul', 27, 'M');
console.log("Printing object which is created using Constructor fn ->", rahul);
