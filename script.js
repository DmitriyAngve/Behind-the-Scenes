// 'use strict';

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
