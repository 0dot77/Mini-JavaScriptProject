'use strict';


// 4. Variable Types
// let : rw(read/write) const : r(read only)
// Primitive, single item : number, string, boolean, null, undefine, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// Note!
// Immutable data types : primitive types, frozen objects
// Mutable data types : all objects by default are mutable in JS
// - security
// - thread safety
// - reduce human mistakes

// number - special numeric values : infinity, -infinity, NaN

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet.)
// Chrome and Firefox에만 추가 되어있다.
const bigInt = 129349248190248912489259210491;
console.log(`value: ${bigInt}, tpye: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char ='c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true : any other value

const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const taeyang = { name: 'taeyang', age:28};
taeyang.age = 29;
console.log(taeyang.age);

// 5. Dynamic typing : dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5; // 5를 string으로 변환해줌
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2'; // number로 변환함
console.log(`value: ${text}, type: ${typeof text}`);

//console.log(text.charAt(0)); // ERROR, 위에서 number로 변환했기 때문이다.

