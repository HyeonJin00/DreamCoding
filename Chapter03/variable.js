// chapter 03 자바스크립트 3. 데이터타입, data types, let vs var, hoisting | 프론트엔드 개발자 입문편 (JavaScript ES5+)gt

// 1.Use strict
// added in ES 5
// use this for vanilla Javascript.
"use strict";

// 2. Variable
// let (added in ES6)

//global scope (블럭 밖에서도)
let globalName = "global name";

//block scope (블럭 안에서만)
{
  let name = "ellie";
  console.log(name);
  name = "hello";
  console.log(name);
}
console.log(name);
console.log(globalName);

// var (절대 쓰지 말 것!)
// 이유 1번: var hoisting (최상단으로 끌어올리는 것을 의미)
//

age = 4;
var age;

// 이유 2번: var는 block scope가 아닌 function scope이다
{
  age = 4;
  var age;
}

console.log(age);

// 3. Constants
// favor immutable(바뀌지 않는) data type always for a few reasons:
// - security (안전성)
// - thread safety (여러 곳에서 한번에 접근해서 변경하는 일을 막을 수 있음)
// - reduce human mistakes (휴먼에러 방지)
const daysInWeek = 7;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function(다른 함수에 할당할 수 있다)

// dynamic 동적

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count},type : ${typeof count}`); // ` 안에는 자바스크립트가 들어갈 수 있다
console.log(`value: ${size},type : ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''    (중요)
// true: any other value                  (중요)
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null (텅텅 비어있는 거라고 명시해주는 것)
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined (선언은 되었지만 아무것도 값이 지정되어 있지 않은 상태)
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description},type: ${typeof symbol1}`);

//object, real-life object, data structure
const ellie = { name: "ellie", age: 20 };

// 5. Dynamic typing: dynamically typed language
let text = "hello";
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));
