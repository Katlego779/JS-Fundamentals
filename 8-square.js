const sizeArg = process.argv[2];
const size = parseInt(sizeArg, 10);

if (!sizeArg || Number.isNaN(size) || size <= 0) {
  console.log("Missing size");
} else {
  for (let i = 0; i < size; i++) {
    console.log("X".repeat(size));
  }
}
