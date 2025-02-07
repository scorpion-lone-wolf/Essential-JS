console.log("-------------------------------- Cloning and merging, Object.assign() ---------------------------------------------------------------->");

const realObj = {
  name: 'john',
  age: 35
};

const shalloCopy = realObj;
console.log("Is realObj and shalloCopy are same or not : ", shalloCopy === realObj);

// 1.let's do deep copy by copying each element into new object
const deepCopy1 = {};

for (const [key, value] of Object.entries(realObj)) {
  deepCopy1[key] = value;
}
console.log("The values of deepCopy1 is ", deepCopy1);
console.log("Is realObj and deepCopy1 are same or not : ", deepCopy1 === realObj);

// 2. deep copy using Object.assign()
const deepCopy2 = Object.assign({}, realObj);
console.log("is deepCopy2 and realObj same ", deepCopy2 === realObj); // false

console.log("-------------------------------- nested cloning using structuredClone ---------------------------------------------------------------->");

// Deepcopy of nested objects
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  },
  city: [

    {
      name: "San Francisco",
    },
    {
      name: "toronto",
    }
  ]
};
const deepCopy3 = structuredClone(user);
console.log("are sizes of user and deepCopy3 same ", deepCopy3.sizes === user.sizes); // false

console.log("-------------------------------- nested cloning without built-in library ---------------------------------------------------------------->");

// deep copy of nested objects without using any built-in methods (handles arrays, objects and dates)
function deepCopy(obj) {

  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj);
  }

  if (Array.isArray(obj)) {
    const copy = [];
    obj.forEach(value => {
      copy.push(deepCopy(value));
    });
    return copy;
  }

  if (obj instanceof Map) {
    const copy = new Map();
    obj.forEach((value, key) => {
      copy.set(key, deepCopy(value));
    });
    return copy;
  }

  if (obj instanceof Set) {
    const copy = new Set();
    obj.forEach((value) => {
      copy.add(deepCopy(value));
    });
    return copy;
  }

  const temp = {};
  for (const [key, value] of Object.entries(obj)) {
    temp[key] = deepCopy(value);
  }
  return temp;
}
const deepCopy4 = deepCopy(user);
console.log("This is the deepcopy without using any buitin fn : ", deepCopy4);
console.log(deepCopy4 === user);
console.log(deepCopy4.sizes === user.sizes);
console.log(deepCopy4.city === user.city);
console.log(deepCopy4.city[0] === user.city[0]);



