// Function Currying
// We create a series of nested functions where each function returns another function. 
// This allows us to partially apply arguments and create reusable functions with varying degrees of specificity.
// Advantage -> We can store references to partially applied functions and reuse them.

const add = (a) => {
    return (b) => {
      return (c) => {
        return a * (b + c); // Returns the result of multiplying 'a' by the sum of 'b' and 'c'
      };
    };
  };
  
  const level = add(5); // Partial application of 'add' function with 'a' set to 5
  
  console.log(level(2)(2)); //20
  console.log(level(5)(6)); //55
  console.log(level(1)(3)); //20
  console.log(level(8)(5)); //65
  
  // In this example, the reference from the "level" function, which is a partially applied version of 'add' with 'a' set to 5,
  // can be used in other use cases by storing the reference and without losing it.
  