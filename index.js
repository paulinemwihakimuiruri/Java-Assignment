// to convert first letter of string to uppercase
let message = 'the child walked to the market.';
let newMessage = message.charAt(0).toUpperCase()+ message.slice(1);
console.log({newMessage});

//to add character at the third index
let p = 'Games';
let charToAdd='s'
let newp = p.slice (0,3) + charToAdd + p.slice(3);
console.log(newp);

//to count occurence of hello
let x = 'hello world, hello JavaScript';
let count = (x. match(/hello/g) || []).length;
console.log({count});

//to get the last three characters in a string
let lastChar = message.slice(-3);
console.log({lastChar});

//to get the first three characters in a string
let firstChar = x.slice(0,3);
console.log({firstChar});

//to sort string characters in ascending order
let w = 'learn coding';
let sortedStr = w.split('').sort().join('');
console.log({sortedStr});

//to remove all spaces in a string
let noSpace = message.replace(/\s+/g, '');
console.log(noSpace);

//to find the index of t in the string
let text="greeting";
let indexText=text.indexOf('t');
console.log(indexText);

//to delete first two characters in the string
let firstTwochar = text.slice(2);
console.log(firstTwochar);

//to delete last two characters in the string
let lastTwoChar = text.slice(0, -2);
console.log(lastTwoChar);



