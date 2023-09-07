"use strict";

// this code works the modern way
// alert('Hello'); alert('World');

//this is not recommended
// let user = 'John', age = 25, message = 'Hello';
// alert('Hello heell'); 
//but this is recommended

// let user = 'John';
// let age = 25;
// let message = 'Hello';

// let user, name; // can declare two variables at once

// name = "Aummal";

// admin = name;

// alert( admin ); // "John"

//----------------------------------------


// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

// Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment ( = assignment operator)

let firstName = "Simba"; //strings
let age = 5; //number
let student = true; //booleans

console.log("Hello", firstName);
console.log("You are", age, "years old");
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;


/* 
   arithmetic expression is a combination of...
   operands (values, variables, etc.)
   operators (+ - * / %)
   that can be evaluated to a value
   ex. y = x + 5;
*/

let students = 20;

students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//let extraStudents = students % 2;
//students = students ** 2;

console.log(students);

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;

/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division
    4. addition & subtraction
*/

let result = (1 + 25) * (3 + 4);

console.log(result);