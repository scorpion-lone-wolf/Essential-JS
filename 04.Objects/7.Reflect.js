const obj = {
  name: "Rahul",
  age: 27
};

// Using Reflect.set to add a new property
Reflect.set(obj, "gender", "M");
console.log("Object after setting gender:", obj);

// Using Reflect.get to retrieve the gender property
console.log("Getting gender:", Reflect.get(obj, "gender"));

// Using Reflect.has to check if properties exist
console.log("Is 'address' present?", Reflect.has(obj, "address"));
console.log("Is 'age' present?", Reflect.has(obj, "age"));
