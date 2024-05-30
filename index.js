#! /usr/bin/env node
import inquirer from "inquirer";
const randomNum = Math.floor(Math.random() * 10 + 1);
const UserInput = await inquirer.prompt([
    {
        name: "guessedNumber",
        type: "number",
        message: "Guess a number b/w 1-10",
    },
]);
if (UserInput.guessedNumber === randomNum) {
    console.log("You win!");
}
else {
    console.log("Better luck next time!");
}
