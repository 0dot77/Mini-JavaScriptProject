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

// !(not)
console.log(!value1);