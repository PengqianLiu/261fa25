// homework!!!

// Control Flow
// - Determines the order in which statements in a program are executed
// - JavaScript executes code line-by-line from top to bottom unless control structures (like conditionals or loops) alter that flow.

// MIDI protocol 101:
// 0-127 with 0 as lowest value and 127 as highest

// *if* 
// - Executes a block of code only if a specified condition is true.
let midi = 64;
if (midi >= 0 && midi <= 127) {
  console.log("VALID", midi);
}


// *if-else* 
let otherMIDI = 150;
if (otherMIDI >= 0 && otherMIDI <= 127) {
  console.log("VALID");
} else {
  console.log("INVALID");
}


// *else-if* for Multiple Conditions
let manyMIDI = 64;
if (manyMIDI < 64) {
  console.log("MIDI is smaller than 64.");
} else if (manyMIDI > 64) {
  console.log("MIDI is greater than 64.");
} else {
  console.log("MIDI is exactly 64.");
}

// *else-if* for More Multiple Conditions
let mmMIDI = 64;
if (mmMIDI == 12) {
  console.log("MIDI is 12.");
} else if (mmMIDI == 13) {
  console.log("MIDI is 13.");
} else if (mmMIDI > 64) {
  console.log("MIDI is greater than 64.");
} else {
  console.log("MIDI is less than 64 but not 12 or 13.");
}

// Loops 
// - allow us to repeat code multiple times.

// *while* Loop
let count = 0;
while (count < 3) {
  console.log("Happy");
  count++; // shorthand for add one integer!!!
}

// *while-if* Loop
let count = 0;
while (count < 3) {
  console.log("Happy");
  count++;
}
if (count >= 3) {
  console.log("Sad");
}

// *for* Loop
for (let i = 0; i < 128; i++) { //standard structure for 'for' accumulators
	console.log(`The next MIDI value is ${i}`); //template literal!
}

// incrementing by 2
for (let i = 0; i < 128; i += 2) {
  console.log(`The next MIDI value is ${i}`);
}

// finding numbers divisible by 7 and 5 between 1500 and 2700
for (let i = 1500; i <= 2700; i++) {
  if (i % 7 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

// Nested for-loop
for (let i = 0; i < 10; i++) {
  let row = '';
  for (let j = 0; j < 10; j++) {
    if (j >= i) {
      row += j.toString();
    }
  }
  console.log(row);
}

// Recursion
// - a computational problem with solutions to smaller instances of the same problem
// - functions that call themselves. 

// Infinite recursion
function func() {
  console.log("Lovely!");
  func();
}

// func();

// Recursion with a stop condition
function recursiveFunc(count) {
  if (count < 0) {
    return;
  }
  console.log(`${count} Lovely!`);
  recursiveFunc(count - 1);
}
recursiveFunc(5);