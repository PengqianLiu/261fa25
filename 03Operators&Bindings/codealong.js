// *JavaScript Basics*

// *Why JavaScript?*
// - Makes websites dynamic by allowing interaction with users
// - Can be executed in browser console via Developer Tools
// - Install Node.js to run JavaScript outside the browser
// - We're going to use the 'sandbox' of the textbook: https://eloquentjavascript.net/code/

// *Helpful console functions*
console.log("Hello, world!"); // Prints text to the console, a "side effect"


// *Some Syntax Rules*
// - JavaScript allows automatic type conversion
// - Uses indentation for readability, semicolons are optional
// - Variables are case-sensitive e.g. ~RachelRome vs. ~rachelRome

// *Expressions vs Statements*
// - Expression: Produces a value (e.g., `5 + 3`)
// - Statement: A complete instruction (e.g., `console.log(5 + 3);`)

// *Values and Operators*
// **Numbers**
console.log(typeof 10);    // "number - integer"
console.log(typeof 10.0);  // "number - floating point"
// **Unary and Binary Operators**
console.log(-10);  // Unary minus, negates the number
console.log(5 + 3); // Addition
console.log(10 / 2); // Division
console.log(2 * 3); // Multiplication
console.log(2 ** 3); // Exponentiation (2 raised to power of 3)
console.log(10 % 3); // Modulus (remainder of division)
// **Strings (sequences of characters, indexed from 0)**
let myName = "Rachel";
console.log(myName.length); // Get the length of the string
console.log(myName[3]);     // Access character at index 3
// ***String Methods***
let favFood = "banana";
console.log(favFood.toUpperCase()); // Convert string to uppercase
console.log(favFood.toLowerCase()); // Convert string to lowercase
// ***Slicing strings (extracting parts of a string)***
let favFood = "banana";
console.log(favFood.slice(0, 3)); 
console.log(favFood.slice(2, 4));
// ***Concatenation (combining strings)***
console.log("yum" + "my"); // "yummy"
console.log("yum".repeat(3)); // "yumyumyum"
// ***Template literals (embedding expressions in strings)***
console.log(`${9/3} little pigs`);
// ***Special characters in strings***
console.log("col1\tcol2\tcol3\ncol1\tcol2\tcol3\ncol1\tcol2\tcol3"); // Uses tab and newline characters


// **Comparison Operators**
console.log(5 > 3);   // true (greater than)
console.log(5 < 3);   // false (less than)
console.log(5 === 5); // true (strict equality)
console.log(5 !== 3); // true (not equal)
// **Logical Operators**
console.log(true && false); // false (AND: both conditions must be true)
console.log(true || false); // true (OR: at least one condition must be true)
console.log(!true);         // false (NOT: negates the boolean value)


// **Ternary Operator (Conditional Expression)**
let height = 50;
const canRide = (height > 48) ? "Yes, you may ride." : "Sorry, you may not ride.";
console.log(canRide);


// **NaN and Empty Values**
console.log(typeof NaN);        // "number" (special case, but means Not-a-Number)
console.log(typeof null);       // "object" (historical JavaScript quirk)
console.log(typeof undefined);  // "undefined" (a binding that has not been assigned a value)

// *Bindings (Variables)*
// - let (modifiable), const (immutable), var (old, avoid using)
const pi = 3.14;
let radius = 11;
const area = pi * (radius ** 2);
console.log(area);

// *Typecasting (Converting Data Types)*
let num = 100;
console.log(String(num), typeof String(num)); // Convert number to string

let string = "45";
console.log(parseInt(string), typeof parseInt(string)); // Convert string to integer
console.log(parseFloat("56.83"), typeof parseFloat("56.83")); // Convert string to float

// *Floating point precision handling*
let z = 3.141592653589793;
console.log(z.toFixed(5)); // Ensures precision with 5 decimal places

// Arrays
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // Access first element
fruits.push("blueberries"); // Add new element to array
console.log(fruits);

// Array Transversal with arrow function
fruits.forEach(fruit => console.log(fruit));

// prompt
let height = prompt("What is your height in inches?");
const canRide = (height > 48) ? "Yes, you may ride." : "Sorry, you may not ride.";
console.log(canRide);