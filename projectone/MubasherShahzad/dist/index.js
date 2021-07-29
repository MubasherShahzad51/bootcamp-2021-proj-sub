"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoCollection_1 = require("./todoCollection");
let list1 = new todoCollection_1.TodoCollection();
let list2 = new todoCollection_1.TodoCollection();
list1.addTodo("Buy Mango");
list1.addTodo("Get Haircut");
list1.taskDone(2);
list1.printAll();
list2.addTodo("Ride Motorbike");
list2.addTodo("Eat Meal");
list2.taskDone(2);
list2.printAll();
list1.getTodoItems(true).forEach(item => item.printDetails());