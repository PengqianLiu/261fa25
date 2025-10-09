// *Why Use Functions?*
// - Instead of repeating code, we can encapsulate logic into functions for:
// Reusability – Call the same function multiple times.
// Readability – Makes the code easier to understand.
// Modularity – Each function has a clear purpose.
// So far we've mostly using functions built-in to the language, now we're going to write our own functions! like neologisms! like 'truthiness'!


// ALL THIS IN https://editor.p5js.org/

// Function with one argument/parameter
function cube(n) {
  // Returns the cube of the input number n
  return n * n * n;
}
console.log(cube(2)); // Output: 8

// Function with multiple inputs
function add(x, n) {
  // Adds two numbers and returns the result
  return x + n;
}
console.log(add(2, 3)); // Output: 5

// Function with no input
function hello() {
  // Just prints "Hello, World!" to the console
  console.log("Hello, World!");
}
hello();

// Function with default argument
function displayInstrument(name, instrument = "Guitar") {
  // If no instrument is provided, "Guitar" will be used by default
  console.log(name + " likes " + instrument);
}
displayInstrument("Jennifer"); // Uses default: Guitar
displayInstrument("Elizabeth", "Drum");
displayInstrument("Susan", "Bass");

// Function returning multiple outputs via an array
function getFood() {
  return ["bagel", "salad", "steak"];
}

let foods = getFood(); // Destructure or access via index
let breakfast = foods[0];
let lunch = foods[1];
let dinner = foods[2];

console.log("I ate a "+breakfast);

// Nested function calls
function printLyrics() {
  console.log("I'm gonna take my horse to the old town road.");
  console.log("I'm gonna ride 'til I can't no more.");
}

function repeatLyrics() {
  // Calls printLyrics twice
  printLyrics();
  printLyrics();
}
repeatLyrics();

// Function with if condition
function minimum(x, y) {
  // Returns the smaller of the two numbers
  if (x < y) {
    return x;
  }
  return y;
}
console.log(minimum(3, 4)); // Output: 3

// Function with if/else and recursion (factorial)
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    // Recursively calls itself
    return n * factorial(n - 1);
  }
}
console.log(factorial(3)); // Output: 6

// Function using for loop
function sumup(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
	  sum += i; // addition assignment operator: adds the value on right to binding on left; rebinds what is on the left to the result of the calculation
  }
  return sum; 
}
console.log(sumup(5)); // Output: 15

// local scope is like accidentals
// Functions using local scope (instrument preference)
function printFavoriteInstrument() {
  let instrument = prompt("What is your favorite instrument?");
  console.log("Your favorite instrument is: " + instrument);
}

function printLeastFavoriteInstrument() {
  let instrument = prompt("What is your least favorite instrument?");
  console.log("Your least favorite instrument is: " + instrument);
}

printFavoriteInstrument();
printLeastFavoriteInstrument();


// MIDTERM PROJECT PREP
// https://p5js.org/reference/

// Count frames (prints continuously to console)
function draw() {
  console.log(frameCount);
}

// Simple static line
function draw() {
  line(0, 50, 100, 50);
}

// Animate filling lines downward
let y = 0.0;

function draw() {
  line(0, y, 100, y);
  y = y + 0.5;
}

// Moving line that resets after reaching bottom
let y = 0.0;

function draw() {
  background(204);
  line(0, y, 100, y);
  y = y + 0.5;
  if (y >= 100) {
    y = 0;
  }
}

// Draw lines down the canvas
let y = 0;

function setup() {
  createCanvas(300, 300);
}

function draw() {
  line(0, y, 300, y);
  y += 4;
}

// Draw a single eye
function setup() {
  createCanvas(100, 100);
  noStroke();
}

function draw() {
  background(204);
  fill(255);
  ellipse(50, 50, 60, 60); // White of eye
  fill(0);
  ellipse(60, 50, 30, 30); // Pupil
  fill(255);
  ellipse(66, 45, 6, 6);   // Highlight
}

// Draw two eyes
function setup() {
  createCanvas(100, 100);
  noStroke();
}

function draw() {
  background(204);

  // Right Eye
  fill(255);
  ellipse(65, 44, 60, 60);
  fill(0);
  ellipse(75, 44, 30, 30);
  fill(255);
  ellipse(81, 39, 6, 6);

  // Left Eye
  fill(255);
  ellipse(20, 50, 60, 60);
  fill(0);
  ellipse(30, 50, 30, 30);
  fill(255);
  ellipse(36, 45, 6, 6);
}

// Modular eye drawing function
function setup() {
  createCanvas(100, 100);
  noStroke();
}

function eye(x, y) {
  fill(255);
  ellipse(x, y, 60, 60);
  fill(0);
  ellipse(x + 10, y, 30, 30);
  fill(255);
  ellipse(x + 16, y - 5, 6, 6);
}

function draw() {
  background(204);
  eye(65, 44);
  eye(20, 50);
  eye(65, 74);
  eye(20, 80);
  eye(65, 104);
  eye(20, 110);
}

// Interactive eye that follows mouse just for fun
function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(204);
  eye(mouseX, mouseY);
}

function eye(x, y) {
  fill(255);
  ellipse(x, y, 60, 60);
  fill(0);
  ellipse(x + 10, y, 30, 30);
  fill(255);
  ellipse(x + 16, y - 5, 6, 6);
}

