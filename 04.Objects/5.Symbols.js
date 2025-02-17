// Creating a symbol
const symbol1 = Symbol("myDescription");
console.log("Symbol created with type:", typeof symbol1);
console.log("symbol1 description is:", symbol1.description);

console.log("\n---------------- Uniqueness of Symbols ----------------");

// Each Symbol() call generates a unique symbol, even with the same description
console.log(Symbol("foo") === Symbol("foo")); // false

console.log("\n---------------- Use Cases of Symbols ----------------");

// 1. Creating a unique key for objects
const id = Symbol("id");
const person = {
  name: "Rahul",
  [id]: 123 // Symbol as a property key
};

// Symbols are not enumerable in for...in loops or Object.entries()
console.log("\nIterating over person object properties:");
for (const key in person) {
  console.log(key); // "name" (id is not included)
}

console.log("\nUsing Object.entries():");
for (let [key, value] of Object.entries(person)) {
  console.log(`Key: ${key}, Value: ${value}`); // Only "name" appears
}

// 2. Creating or retrieving symbols from the global registry
console.log("\n---------------- Global Symbol Registry ----------------");

const globalSymbol = Symbol.for("myKey");
const sameSymbol = Symbol.for("myKey");

console.log(globalSymbol === sameSymbol); // true (retrieved from registry)
console.log(sameSymbol.description); // myKey

// 3. Symbols are ignored in JSON.stringify()
console.log("\n---------------- Symbols in JSON ----------------");

const obj = {
  name: "John",
  [Symbol("id")]: 123
};

console.log(JSON.stringify(obj)); // {"name":"John"} (symbol properties are not included)
