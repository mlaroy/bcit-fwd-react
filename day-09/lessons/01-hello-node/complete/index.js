// Node runs JavaScript outside the browser.
// Run with: npm run start

import readline from "readline";

// readline lets Node read user input from the terminal
const rl = readline.createInterface({
  input: process.stdin, // stdin means.
  output: process.stdout
});


console.log("Hello from Node!");

// This pauses the program until the user types something and presses Enter
rl.question("What is your name? ", (name) => {
  console.log(`Nice to meet you, ${name}!`);

  // Important: close the interface so Node can exit
  rl.close();
});

// const name = "Student";
// console.log(`Welcome, ${name}!`);

console.log("Node version:", process.version);
