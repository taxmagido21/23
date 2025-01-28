let result = "Apple" || "Banana" || "Cherry";
console.log(result); // Output: "Apple"

let userName = null;
let userAge = 25;
let userGreeting = userName || (userAge > 18 && "Adult User");
console.log(userGreeting); // Output: "Adult User"

let result2 = "Apple" && 0 && "Banana";
console.log(result2); // Output: 0

let result3 = 42 && "Hello" && null && "World";
console.log(result3); // Output: null