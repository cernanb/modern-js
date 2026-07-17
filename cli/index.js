import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

function displayMenu() {
  console.log("Shopping cart CLI");
  console.log("1. View cart");
  console.log("2. Add item");
  console.log("3. Remove item");
  console.log("4. View total");
  console.log("5. Exit");
  console.log("");
}

let cart = [];

async function startProgram() {
  let isRunning = true;

  while (isRunning) {
    displayMenu();

    const rl = readline.createInterface({ input, output });

    const answer = await rl.question("What would you like to do? ");

    switch (answer) {
      case "1":
        console.log("Call view cart function");
        break;
      case "2":
        console.log("Call add item function");
        break;
      case "3":
        console.log("Call remove item function");
        break;
      case "4":
        console.log("Call view total function");
        break;
      case "5":
        isRunning = false;
        console.log("Goodbye!!");
    }

    rl.close();
  }
}

startProgram();
