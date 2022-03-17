ternary operator

자바스크립트 삼항 연산자에서 다중 조건 사용

사용되는 메서드의 종류

​

|| 삼항 연산자

삼항 연산자는 Condition ? ExTrue : ExFalse 와 같은 형태를 유지하고 있습니다.

​

Condition은 조건을 뜻합니다.

ExTrue는 Condition이 True(진실)일때 실행됩니다.

ExFalse는 Condition이 False(거짓)일때 실행됩니다.

​

삼항 연산자는 ? 와 : 기호를 사용하여 Condition , ExTrue , ExFalse를 구분합니다.

var isThatTrue= Math.PI > 4 ? "Yes" : "No";

// Condition => Math.PI > 4
// ExTrue => "Yep"
// ExFalse => "Nope"
MDN 공식 홈페이지에서는 JavaScript의 삼항 연산자를 아래와 같이 정의해 놓았습니다.

삼항연산자의 다중 조건 사용하기

​

​

|| 단일 조건 사용

삼항 연산자의 단일 조건 사용은 ExTrue 와 ExFalse일때 실행되는 작업이 1개인 경우를 의미합니다.

​

아래의 소스코드에서

Condition은 Math.PI 입니다.

Condition이 True일 경우 실행되는 작업은 "Yes" 입니다.

Condition이 False일 경우 실행되는 작업은 "No" 입니다.

var isThatTrue= Math.PI > 4 ? "Yes" : "No";

// Condition => Math.PI > 4
// ExTrue => "Yep"
// ExFalse => "Nope"
|| 다중 조건 사용

삼항 연산자의 다중 조건 사용은 ExTrue 와 Exfalse일때 실행되는 작업이 2개 이상인 경우를 의미합니다.

즉, 삼항연산자를 통과시 실행 되는 함수가 2개 이상인 경우를 의미합니다.

​

● ( 소괄호 )를 사용하여 2개의 함수를 묶습니다.

● ( 소괄호 ) 안에서 함수를 구분하기 위해 ,콤마로 나눕니다.

var age = 23;

age > 18 ? (
alert("you can buy it."),
console.log("you can buy it")
) : (
alert("Sorry, you are much too young!"),
console.log("Sorry, you are much too young!")
);

// Condition => Math.PI > 4
// ExTrue => "Yep"
// ExFalse => "Nope"
|| 연속 조건 사용

삼항 연산자의 연속 조건 사용은 중첩 삼항 연산자와 동일 하다.

​

if else문을 사용하여 조건문을 중첩 작성하는 경우처럼,

삼항 연산자를 사용하여 조건문을 중첩 작성할 수 있다.

​

var condition1 = true
var condition2 = false

var access = condition1 ?
(condition2 ? "true true": "true false") :
(condition2 ? "false true" : "false false");

console.log(access); // logs "true false"
