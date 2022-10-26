'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName} your are ${age}, born in ${birthYear}`; // firstName found in global scope
    console.log(output); // firstName still "Dmitriy" because JS dont see "Steven" in block scope

    // Block scope
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';
      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!'; // chanhge output variable. If we declare new variable (const output = ) we see output from top of code
      const str = `Oh, and your're a millenial, ${firstName}`; // JS says "Steven", because JS tries to look for the variable name in the current scope
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    //console.log(str); // str is not defined (because block scope) "str" available only in if() block
    console.log(millenial); // JS can find it (var) available because "var"
    //console.log(add(2, 3)); // add is not defined. Scope of this add  function only in if() block scope
    console.log(output); //Show "NEW OUTPUT!" because we manipulated an existing variable inside child of a scope
  }
  printAge();

  return age;
}

const firstName = 'Dmitriy';
calcAge(1988);
// console.log(age); // Error age is not define - not found in scope
// printAge(); // Error printAge is not define - not found in scope
*/

//Variables
console.log(me); // udefined because var hoisted to the value of undefined
//console.log(job); // Ref error. "job" variable is still in TDZ (TDZ for variable declare const or let start from the beginning of the current scope)
//console.log(year); // similar to the example above

var me = 'Dmitriy';
let job = 'student';
const year = 1988;

/*
//Functions
console.log(addDecl(2, 3)); // result (5). We were able to call the function declaration before it was actually defined here in the code

//console.log(addExpr(2, 3)); // The same error with let and const variables (this functions are in TDZ, because they declared with const)
//console.log(addArrow(2, 3)); // similar to the example above

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
}; // with VAR this function will become undefined (addExpr is not a function)

const addArrow = (a, b) => a + b; // similar to the example above

//Example (Pitch Fall of the Hoisting)
// This example demonstrates why you shouldn't use var. All products in shoppingCart will deleted
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1; //declared in window object and available anywhere in the code
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
*/

// This keyword
