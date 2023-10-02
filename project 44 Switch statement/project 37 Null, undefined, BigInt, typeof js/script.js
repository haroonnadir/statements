
// //Basic Boolean Usage:
// const isSunny = true;
// const isRaining = false;
// console.log(isSunny);   // Output: true
// console.log(isRaining); // Output: false

// // Boolean in Conditional Statements:
// const isLogged = true;
// if (isLogged) {
//   console.log('User is logged in.');
// } else {
//   console.log('User is not logged in.');
// }


// //Comparison with Comparison Operators:
// const a = 10;
// const b = 5;
// const isEqual = a === b;  // Is a equal to b? (false)
// const isNotEqual = a !== b;  // Is a not equal to b? (true)
// console.log(isEqual);     // Output: false
// console.log(isNotEqual);  // Output: true


// //Logical Operators with Booleans:
// const hasPermission = true;
// const isAdmin = false;
// const canEdit = hasPermission && isAdmin;  // Both conditions are true for editing
// const isLoggedIn = true;
// const hasSubscription = true;
// const canAccessContent = isLoggedIn || hasSubscription;  // Either condition is true for access
// console.log(canEdit);       // Output: false (because isAdmin is false)
// console.log(canAccessContent); // Output: true (because isLoggedIn is true)




// Comparison Operators:

// // Equal (==):
// // Checks if two values are equal. It performs type coercion if the types are different.
// const a = 10;
// const b = '10';
// console.log(a == b); // Output: true (coerced to the same value before comparison)

// // Strict Equal (===):
// // Compares if two values are equal in value and data type (no type coercion).

// const a = 10;
// const b = '10';
// console.log(a === b); // Output: false (different data types)

// // Not Equal (!=):
// // Checks if two values are not equal. It performs type coercion if the types are different.

// const a = 10;
// const b = '10';
// console.log(a != b); // Output: false (coerced to the same value before comparison)

// // Strict Not Equal (!==):
// // Checks if two values are not equal in value or data type (no type coercion).

// const a = 10;
// const b = '10';
// console.log(a !== b); // Output: true (different data types)

// // Greater Than (>):
// // Checks if one value is greater than another.

// const a = 10;
// const b = 5;
// console.log(a > b); // Output: true
   
// //Less Than (<):
// //Checks if one value is less than another.
// const a = 10;
// const b = 5;
// console.log(a < b); // Output: false

// // Greater Than or Equal To (>=):
// // Checks if one value is greater than or equal to another.

// const a = 10;
// const b = 10;
// console.log(a >= b); // Output: true

// // Less Than or Equal To (<=):
// // Checks if one value is less than or equal to another.

// const a = 10;
// const b = 5;
// console.log(a <= b); // Output: false











// // Logical AND (`&&`):
// // Returns `true` if both operands are `true`, otherwise returns `false`.
// const a = true;
// const b = false;
// console.log(a && b); // Output: false (true && false = false)

// // Logical OR (`||`):
// //  Returns `true` if at least one operand is `true`, otherwise returns `false`.
// const a = true;
// const b = false;
// console.log(a || b); // Output: true (true || false = true)

// // Logical NOT (`!`):
// // Negates the operand. If the operand is `true`, `!` makes it `false`, and vice versa.

// const x = true;
// const y = false;
// console.log(!x); // Output: false (!true = false)
// console.log(!y); // Output: true (!false = true)

// // Combining Logical Operators:
// //  Logical operators can be combined to create more complex conditions.

// const hasPermission = true;
// const isAdmin = false;
// const canEdit = hasPermission && isAdmin;  // Both conditions must be true
// const isLoggedIn = true;
// const hasSubscription = true;
// const canAccessContent = isLoggedIn || hasSubscription;  // Either condition must be true
// console.log(canEdit);        // Output: false (because isAdmin is false)
// console.log(canAccessContent);  // Output: true (because isLoggedIn is true)
