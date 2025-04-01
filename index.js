let message = 'the child walked to the market.';
let newMessage = message.charAt(0).toUpperCase()+ message.slice(1);
console.log({newMessage});

let p = 'Games';
let charToAdd='s'
let newp = p.slice (0,3) + charToAdd + p.slice(3);
console.log(newp);


let x = 'hello world, hello JavaScript';
let count = (x. match(/hello/g) || []).length;
console.log({count});

let lastChar = message.slice(-3);
console.log({lastChar});

let firstChar = x.slice(0,3);
console.log({firstChar});


let w = 'learn coding';
let sortedStr = w.split('').sort().join('');
console.log({sortedStr});


let noSpace = message.replace(/\s+/g, '');
console.log(noSpace);

let text="greeting";
let indexText=text.indexOf('t');
console.log(indexText);

let firstTwochar = text.slice(2);
console.log(firstTwochar);

let lastTwoChar = text.slice(0, -2);
console.log(lastTwoChar);



