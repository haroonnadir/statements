//Example using break in a for loop:
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;  // Exit the loop when i equals 5
  }
  console.log(i);
}

//Example using continue in a for loop:
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;  // Skip even numbers, move to the next iteration
  }
  console.log(i);
}
