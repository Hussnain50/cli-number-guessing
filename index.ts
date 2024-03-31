#! /usr/bin/env node
import inquirer from "inquirer";

// 1) Computer will generate a random number

// 2)User input for guessing number

// 3)Compare user input with computer generated number and show result


const randomnumber = Math.floor(Math.random() * 6 + 1 );
console.log("Welcome to number guessing game");
const answers = await inquirer.prompt([
    {
      name: "userguessednumber",
      type: "number",
      message: "Please guess a number between 1-10: ",
    },
    
]);
if(answers.userguessednumber === randomnumber)

{ console.log("Congrats to you guessed right number,");
}
else {
    console.log("you gessed wrong number,")
}