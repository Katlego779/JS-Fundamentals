const arg = process.argv[2];

if (!arg) {
  console.log("Missing number of occurrences");
} else {
  const times = parseInt(arg, 10);
  for (let i = 0; i < times; i++) {
    console.log("C is fun");
  }
}
