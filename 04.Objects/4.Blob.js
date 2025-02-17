
// create a blob object with string
console.log("Creating a blob object with string");
const blob1 = new Blob(["Hello"], { type: 'text/plain' });

console.log(blob1);

// create a blob object with typed arary and string

const uint8Array = new Uint8Array([72, 101, 108, 108, 111]);

const blob2 = new Blob([uint8Array], { type: 'text/plain' });
console.log(blob2);

console.log("-------------------------Reading in the form of text------------------------");

// blob2.text().then(text => console.log(text));


console.log("-------------------------Reading as stream------------------------");

const stream = blob1.stream();
const reader = stream.getReader();

reader.read().then(function processChunk({ done, value }) {
  if (done) {
    console.log("Stream complete");
    return;
  }
  console.log(new Uint8Array(value)); // Process each chunk
  return reader.read().then(processChunk); // Read the next chunk
});
