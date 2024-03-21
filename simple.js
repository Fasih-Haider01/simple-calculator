#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "first_number" },
    { message: "enter second  number", type: "number", name: "second_number" },
    {
        message: "select the operator to perform the specific operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//Statements
if (answer.operator === "Addition") {
    console.log(answer.first_number + answer.second_number);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.first_number - answer.second_number);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.first_number * answer.second_number);
}
else if (answer.operator === "Division") {
    console.log(answer.first_number / answer.second_number);
}
else {
    console.log("Please select a valid operator");
}
