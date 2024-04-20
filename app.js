#! /usr/bin/env node
import inquirer from "inquirer";
//inquirer done
//array done
//function
//operates
let todos = [];
async function createTodo(todos) {
    do {
        let answer = await inquirer.prompt({
            type: "list",
            message: "select an option",
            name: "option",
            choices: ["Add", "Update", "View", "Delete"]
        });
        if (answer.option === "Add") {
            let addmore = await inquirer.prompt({
                type: "input",
                message: "Enter your task in the list",
                name: "addmore",
            });
            todos.push(addmore.addmore);
            todos.forEach((addmore) => console.log(addmore));
        }
        if (answer.option === "Update") {
            let UpdateMore = await inquirer.prompt([{
                    type: "list",
                    message: "Update task in the list",
                    name: "todos",
                    choices: todos.map((item) => (item))
                }]);
            let addMore = await inquirer.prompt({
                type: "input",
                message: "Add items in the list",
                name: "todo",
            });
            let newtask = todos.filter((val) => val !== UpdateMore.todos);
            todos = [...newtask, addMore.todo];
        }
        if (answer.option === "View") {
            console.log("**** TO  DO LIST ****");
            console.log(todos);
            console.log("********************");
        }
        if (answer.option === "Delete") {
            let deleteTask = await inquirer.prompt({
                type: "list",
                name: "deletetask",
                message: "Delete task from the list",
                choices: todos.map((item) => (item))
            });
            let newTask = todos.filter((val) => val !== deleteTask.deletetask);
            todos = [...newTask];
        }
    } while (true);
}
createTodo(todos);
