const arg = parseInt(process.argv[2], 10);

if (Number.isNaN(arg) || arg <= 0) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < arg; i++) {
    console.log("C is fun");
  }
}
