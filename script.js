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

/*
//Variables
console.log(me); // udefined because var hoisted to the value of undefined
//console.log(job); // Ref error. "job" variable is still in TDZ (TDZ for variable declare const or let start from the beginning of the current scope)
//console.log(year); // similar to the example above

var me = 'Dmitriy';
let job = 'student';
const year = 1988;


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

//Example (Pitfall of the Hoisting)
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

/*
// This keyword

// console.log(this); // in the global scope is simply the window object

//Function declaration
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1988); // undefined (strict mod)

//Arrow
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAgeArrow(1980); // window object (arrow function does not have its own "this")

//Function expression
const dmitriy = {
  year: 1988,
  calcAge: function () {
    console.log(this); // nevermind where "this" keyword is located, matters who points to

    // when we have a method call, this insight of the method will be the object that is calling the method ("dmitriy")
    console.log(2037 - this.year); // this.year = dmitriy.year
  },
};
dmitriy.calcAge(); //"dmitriy" basically the owner of the method

const matilda = {
  year: 2017,
};

matilda.calcAge = dmitriy.calcAge; // we copy calcAge method from dmitriy to matilda
matilda.calcAge(); // this always point the object that is calling the method (we see 2037 - 2017 = 20)

const f = dmitriy.calcAge; // copy method to const f (this is the function)

f(); // TypeError. "this" will become undefined. Can't read year of indefined (in function caclAge it looks like this: caclAge: f {cl(undefined); cl(2037 - undefined.year)}). f function call is not regular function call, no attached to any object, there is no owner of "f" function
*/

// var firstName = 'Matilda'; // in a call "dmitriy.greet()" we see "Hey Matilda", because var assigned firstName to the global object

// -----------------------SECTION--------------------------
// const dmitriy = {
//   firstName: 'Dmitriy',
//   year: 1988,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     // Solution One
//     //   const self = this; // self or that
//     //   const isMillenial = function () {
//     //     console.log(self);
//     //     console.log(self.year >= 1981 && self.year <= 1996);
//     //   };
//     //   // We'll see result (true), because "self" is defined, and it is defined as this
//     //   isMillenial();
//     // },

//     // Solution Two
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//     // It's worked because the arrow function uses the this keyword from its parent scope ( this keyword - "dmitriy")
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   }, // DON'T USE ARROW FUNCTION as a method!
//   /*
//   greet: function () {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   }, // We'll se "Hey Dmitriy"
//   */
// };

// dmitriy.greet(); // "Hey undefined". Arrow function does't get its own this keyword. Parent scope of greet method is the global scope (in global scope this.firsName - undefined)
// dmitriy.calcAge();

// // Arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments); // arguments keyword
//   return a + b;
// };

// addExpr(2, 5);
// addExpr(2, 5, 8, 12); // Let's loop through this array. Add all the number together

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b; // Arrow function does't arguments keyword
// };
// addArrow(2, 5); // Ref error
