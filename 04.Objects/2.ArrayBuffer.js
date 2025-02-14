'use strict';
const buffer = new ArrayBuffer(16); // create a buffer of length 16
console.log(typeof buffer); // 'object'
console.log(buffer.byteLength); //16
console.log(buffer);

//  iterating using view
const view = new Uint8Array(buffer); // treats the buffer as the sequence of 8 bits integers

console.log(view);

// lets write a value
view[0] = 255; // since we are using 8 bit view so each byte can take value from (0 to 255) only
for (let num of view) {
  console.log(num);
}

// TypedArray
console.log("-----------------------------------------TypedArray-----------------------------------------------");
//  there are 5 ways generally to create a typed array
// 1
const typeArray1 = new Uint8Array(buffer, 0, 4);
console.log(typeArray1); // Uint8Array(4) [ 255, 0, 0, 0 ]

// 2
const typeArray2 = new Uint8Array([1, 255, 5]);
console.log(typeArray2); //Uint8Array(3) [ 1, 255, 5 ]

// 3 from another typed array
const typeArray3 = new Uint8Array(new Uint16Array([1, 257, 1000]));
console.log(typeArray3); //Uint8Array(3) [ 1, 1, 232 ]

// creates a new view from old view (TypedArray)
const typeArray1Copied = typeArray1.subarray(0, 3);
console.log(typeArray1Copied);


// DataView
console.log("---------------------------------------DataView--------------------------------");

// binary array of 4 bytes, all have the maximal value 255
let buffer1 = new Uint8Array([4455, 254235, 243455, 444343]).buffer;
console.log(buffer1);
let dataView1 = new DataView(buffer1);

// get 8-bit number at offset 0
console.log(dataView1.getUint8(0));

// now get 16-bit number at offset 0, it consists of 2 bytes, together interpreted as 65535
console.log(dataView1.getUint16(0)); // 65535 (biggest 16-bit unsigned int)

// get 32-bit number at offset 0
console.log(dataView1.getUint32(0)); // 4294967295 (biggest 32-bit unsigned int)

