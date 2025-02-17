
console.log("--------------------------------TextDecoder--------------------------------");
const buffer = new Uint8Array([72, 101, 108, 108, 111]);

const decoder = new TextDecoder();
let str = decoder.decode(buffer);
console.log(str); // Hello


console.log("--------------------------------TextEncoder--------------------------------");

const givenString = "Hello";
const encoder = new TextEncoder();
const uint8Array = encoder.encode(givenString);
console.log(uint8Array); // Uint8Array(5) [ 72, 101, 108, 108, 111 ]
