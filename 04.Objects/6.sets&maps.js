// ------------------------- Set and WeakSet ------------------------

let person = { name: "John" };

// Set can hold any data types and does not allow duplicate values
const set = new Set([1, 2, person, 3]); // Duplicates are automatically ignored
console.log("Set contents:", set);

const weakSet = new WeakSet();
weakSet.add(person); // WeakSet only accepts objects

console.log("WeakSet (cannot be displayed as it's not iterable):", weakSet);

// Removing reference to person
person = null; // Now the object inside WeakSet is eligible for garbage collection

// ------------------------- Map and WeakMap ------------------------

let person2 = { name: "Alice" };

const map = new Map();
map.set(person2, "value1"); // Strong reference prevents garbage collection
map.set("key3", "value3"); // Map keys can be any type

console.log("Map contents:", map);

const weakMap = new WeakMap();
weakMap.set(person2, "value1"); // WeakMap keys must be objects

console.log("WeakMap (cannot be displayed as it's not iterable):", weakMap);

// Removing reference to person2
person2 = null; // Now the object inside WeakMap is eligible for garbage collection
