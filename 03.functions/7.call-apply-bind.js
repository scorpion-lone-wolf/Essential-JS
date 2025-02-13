console.log("-------------------------------- call--------------------------------");

const person1 = {
  username: 'John',
  age: 21,
  hello: function (a, b, c) {
    console.log(a, b, c);
    console.log("hello", this.username, " ", this.age);
  }
};

const person2 = {
  username: 'Rahul',
  age: 27
};

person1.hello.call(person2, 4, 5, 6);


console.log("-------------------------------- apply--------------------------------");


person1.hello.apply(person2, [5, 6, 7]);

console.log("-------------------------------- bind--------------------------------");

const bindedFn = person1.hello.bind(person2);
bindedFn(9, 9, 9);
