'use strict';

// ---------------------- ArrayBuffer Basics ----------------------
const buffer = new ArrayBuffer(16); // Create a buffer of length 16
console.log("Buffer Type:", typeof buffer); // 'object'
console.log("Buffer Byte Length:", buffer.byteLength); // 16
console.log("Buffer:", buffer);

// ---------------------- Creating a View ----------------------
const view = new Uint8Array(buffer); // Treats the buffer as a sequence of 8-bit integers
console.log("Uint8Array View:", view);

// Writing a value into the buffer
view[0] = 255; // Since we are using an 8-bit view, each byte can store values from 0 to 255

// Iterating over the view
console.log("Iterating over the Uint8Array:");
for (let num of view) {
  console.log(num);
}

// ---------------------- Typed Arrays ----------------------
console.log("\n---------------------- TypedArray ----------------------");

// 1. Creating a TypedArray from an existing buffer
const typeArray1 = new Uint8Array(buffer, 0, 4);
console.log("TypedArray from Buffer:", typeArray1); // Uint8Array(4) [ 255, 0, 0, 0 ]

// 2. Creating a TypedArray from an array
const typeArray2 = new Uint8Array([1, 255, 5]);
console.log("TypedArray from Array:", typeArray2); // Uint8Array(3) [ 1, 255, 5 ]

// 3. Creating a TypedArray from another TypedArray
const typeArray3 = new Uint8Array(new Uint16Array([1, 257, 1000]));
console.log("TypedArray from Another TypedArray:", typeArray3); // Uint8Array(3) [ 1, 1, 232 ]

// 4. Creating a subarray from an existing TypedArray
const typeArray1Copied = typeArray1.subarray(0, 3);
console.log("Subarray from TypedArray:", typeArray1Copied);

// ---------------------- DataView ----------------------
console.log("\n---------------------- DataView ----------------------");

// Creating a binary array of 4 bytes with maximum values
let buffer1 = new Uint8Array([4455, 254235, 243455, 444343]).buffer;
console.log("Buffer1:", buffer1);

let dataView1 = new DataView(buffer1);

// Reading values from DataView
console.log("8-bit Value at Offset 0:", dataView1.getUint8(0));
console.log("16-bit Value at Offset 0:", dataView1.getUint16(0)); // 65535
console.log("32-bit Value at Offset 0:", dataView1.getUint32(0)); // 4294967295

// ---------------------- Concatenating Typed Arrays ----------------------
console.log("\n---------------------- Concatenating TypedArrays ----------------------");

let chunks = [
  new Uint8Array([0, 1, 2]),
  new Uint8Array([3, 4, 5]),
  new Uint8Array([6, 7, 8])
];

/**
 * Concatenates multiple Uint8Arrays into a single Uint8Array.
 * @param {Uint8Array[]} arrays - Array of Uint8Arrays to concatenate.
 * @returns {Uint8Array} - Concatenated Uint8Array.
 */
function concat(arrays) {
  // Calculate total length
  let totalLength = arrays.reduce((sum, arr) => sum + arr.length, 0);

  // Create a new Uint8Array to hold the concatenated values
  const newConcatArray = new Uint8Array(totalLength);
  let index = 0;

  // Copy each array into the new Uint8Array
  for (const arr of arrays) {
    newConcatArray.set(arr, index);
    index += arr.length;
  }

  return newConcatArray;
}

console.log("Concatenated Uint8Array:", concat(chunks));
