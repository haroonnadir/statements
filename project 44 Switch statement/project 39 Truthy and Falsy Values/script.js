const truthyValue = "hello";
const falsyValue = 0;

if (truthyValue) {
  console.log("Truthy value encountered!");
} else {
  console.log("Falsy value encountered!");
}

if (falsyValue) {
  console.log("Truthy value encountered!");
} else {
  console.log("Falsy value encountered!");
}
//output 
//Truthy value encountered!
//Falsy value encountered!