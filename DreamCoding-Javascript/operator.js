// 1. String concatenation

console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1+2}`);

// 2. Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical Operators : || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), 처음으로 true가 나오면 멈춘다. 하나라도 true면 끝난다.
console.log(`or: ${value1 || value2 || check()}`);

// &&(and), finds the first false value
console.log(`or: ${value1 && value2 && check()}`);

const nullableObject = {};
// often used to compress long if-statement
// nullableObject && nullableObject.something
if(nullableObject != null) {
    nullableObject.something;
    console.log(`no!`);
}

function check() {
    for(let i = 0; i <10; i++) {
        //wasting time
        console.log('🤔');
    }
    return true;
}

// !(not) 값을 반대로 바꿔준다. 
console.log(!value1);

// 7. Eqaulity
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const taeyang1 = { name: 'taeyang' };
const taeyang2 = { name: 'taeyang' };
const taeyang3 = taeyang1;

console.log(taeyang1 == taeyang2); // false 각각의 레퍼런스가 다르다.
console.log(taeyang1 === taeyang2); // false
console.log(taeyang1 === taeyang3); // true

// equality - puzzler

console.log(0 == false); // true
console.log(0 === false); // true -> false
console.log('' == false); // true
console.log('' === false); // true -> false
console.log(null == undefined); // true
console.log(null === undefined); // false


// 8. Conditional Operators : if
// if, else if, else

const name = 'taeyang';
if(name === 'taeyang') {
    console.log('Welcome, taeyang!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unkwnon');
}

// 9. Ternary operator : ?
// condtion ? value1 : value2;

console.log(name === 'taeyang' ? 'yes' : 'no');

// 10. Switch Statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS

const browser = 'IE';

switch(browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
        console.log('love you!');
        break;
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is excuted.

let i = 3;
while(i>0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.

do {
    console.log(`do while : ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for(i = 3; i > 0; i--) {
    console.log(`for : ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++){
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break, continue
// q1. iterate from 0 to 10 and print only even numbers (use continue)

// 내 풀이
let q1 = 0;
while(q1 < 10) {
    q1++;
    if(q1 % 2 === 1) {
        console.log(q1);
    }
}

//쌤 풀이
for (let i = 0; i < 11; i++) {
    if(i%2 !== 0) {
        continue;
    }
    console.log(`q1. ${i}`);
}

// q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)

let q2 = 0;
while(q2 < 10) {
    q2++;
    console.log(q2);

    if(q2 === 8) break;
}