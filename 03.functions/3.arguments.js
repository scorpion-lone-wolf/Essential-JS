function add() {
  console.log(arguments);
  for (let [key, val] of Object.entries(arguments)) {
    console.log(val);
  }
}

add(1, 23, 4, 5);
