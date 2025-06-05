/* 
--- React ES6 Variables
-- Variables
- Before ES6 there was only one way of defining your variables: with the var keyword.
  If you did not define them, they would be assigned to the global object.
  Unless you were in strict mode, then you would get error if your variables were undefined
- Now, with ES6, there are three ways of defining your variables: var, let, and const

--- var
- if you use var outside of a function, it belongs to the global scope
- if you use var inside a function, it belongs to that function
- if you use var inside of a block, i.e for loop, the variables is still available
- var has a function scope, not a block scope

--- let
- let is the block scoped version of var, and is limited to the block(or expression) where it is defined. 
- If you use let inside of a block, i.e a for loop, the varibale is only availabe inside of that loop
- let has a block scope

--- const
- const is a variable that once it has been created, its value can never change
- const has a block scope
- The keyword const is a bit misleading
- It does not define a constant value. It defines a constant reference to a value
- Because of this you can NOT:
      - Reassign a constant value
      - Reassign a constant array
      - Reassign a constant object
- But you CAN:
      - Change the elements of constant array
      - Change the properties of constant object
*/ 

var x = 5.6; // var
let x = 5.6  // let
const x = 5.6; // const
