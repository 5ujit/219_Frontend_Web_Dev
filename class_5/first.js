// Arithmetic Operators
let num1 = 10;
let num2 = 5;

console.log("Arithmetic Operators:");
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);
console.log("Increment:", ++num1);
console.log("Decrement:", --num2);
console.log("---------------------------");

// Assignment Operators
let x = 10;

console.log("Assignment Operators:");
x += 5;
console.log("+=:", x);
x -= 3;
console.log("-=:", x);
x *= 2;
console.log("*=:", x);
x /= 4;
console.log("/=:", x);
x %= 3;
console.log("%=:", x);
console.log("---------------------------");

// Comparison Operators
let a = 5;
let b = "5";

console.log("Comparison Operators:");
console.log("Equal to:", a == b);
console.log("Strict equal to:", a === b);
console.log("Not equal to:", a != b);
console.log("Strict not equal to:", a !== b);
console.log("Greater than:", a > b);
console.log("Less than:", a < b);
console.log("Greater than or equal to:", a >= b);
console.log("Less than or equal to:", a <= b);
console.log("---------------------------");

// Logical Operators
let condition1 = true;
let condition2 = false;

console.log("Logical Operators:");
console.log("Logical AND:", condition1 && condition2);
console.log("Logical OR:", condition1 || condition2);
console.log("Logical NOT:", !condition1);
console.log("---------------------------");

// Bitwise Operators
let bitwiseNum1 = 5; // binary representation: 0101
let bitwiseNum2 = 3; // binary representation: 0011

console.log("Bitwise Operators:");
console.log("Bitwise AND:", bitwiseNum1 & bitwiseNum2); // 0001 (1 in decimal)
console.log("Bitwise OR:", bitwiseNum1 | bitwiseNum2); // 0111 (7 in decimal)
console.log("Bitwise XOR:", bitwiseNum1 ^ bitwiseNum2); // 0110 (6 in decimal)
console.log("Bitwise NOT:", ~bitwiseNum1); // 11111111111111111111111111111010 (-6 in decimal)
console.log("Left shift:", bitwiseNum1 << 1); // 1010 (10 in decimal)
console.log("Right shift:", bitwiseNum1 >> 1); // 0010 (2 in decimal)
console.log("Unsigned right shift:", bitwiseNum1 >>> 1); // 0010 (2 in decimal)
console.log("---------------------------");

// Unary Operators
let unaryNum = 7;

console.log("Unary Operators:");
console.log("Unary plus:", +unaryNum);
console.log("Unary minus:", -unaryNum);
console.log("Logical NOT:", !unaryNum);
console.log("Increment:", ++unaryNum);
console.log("Decrement:", --unaryNum);
console.log("Typeof:", typeof unaryNum);
console.log("---------------------------");

// Ternary (Conditional) Operator
let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";
console.log("Ternary Operator:", status);
console.log("---------------------------");

// String Operators
let str1 = "Hello";
let str2 = " World";

console.log("String Operators:");
console.log("Concatenation:", str1 + str2);
console.log("---------------------------");

// Miscellaneous Operators
let arrayExample = [1, 2, 3];
console.log("Miscellaneous Operators:");
console.log("Comma Operator:", (1, 2, 3)); // Returns 3
console.log("Instanceof Operator:", arrayExample instanceof Array);
console.log("Delete Operator:", delete arrayExample[0]);
console.log("New Operator:", new Date());
console.log("---------------------------");
