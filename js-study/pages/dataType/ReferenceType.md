# 3.3 참조 타입의 특성

---

자바스트립트 에서는 기본타입인

숫자, 문자열, 불린값 , null , undefined 5가지를

제외한 모든 값은 객체이다.

배열이나 함수 또한 객체로 취급된다.

그리고 이런 객체는 참조타입이라고 뿌른다.

why ? 객체의 모든연산이 실제 값이 아닌 참조값으로 처리되기 때문이다!!

슬슬 cbv , cbr 이렇게 두가지 종류의 개념이 나올거 같다.

```
예제 3-9 동일한 객체를 참조하는 두변수 objA 와 objB

var objA = {
    val : 40
};

var objB = objA;

console.log(objA.val);  //출력값 40
console.log(objB.val);  //출력값 40

console.log(objA.val);  //출력값 50
console.log(objB.val);  //출력값 50
```

objA 는 생성된 객체를 가리키는 참조값을 저장하는 있단느 것을 기억하기

objA와 objB 변수가 동일한 객체를 가리키는 참조값을 가지게 되는 것이다.
때문에 a.val 와 b.val 값이 40으로 같게 된다.

변수 objA도 변수 objB 와 동일한 객체를 참조하고 있으므로 a.val 값이 50으로 변경된 것을 확인할 수 있다.

# 3.3.1 객체 비교

동등 연산자(==) 를 사용해서 두 객체를 비교할 때도 객체의 프로퍼티 값이 아닌 참조 값을 비교한다는 것을 주의 해야한다.

```
var a = 100;
var b = 100;

var objA = {value : 100};
var objB = {value : 100};
var objC = objB;

console.log(a === b); //출력값 true
console.log(objA == objB);  //출력값 false
console.log(objB == objC); //출력값 true
```

기본타입의 경우 동등 연산자(==) 를 이용해서 비교를 할때 값을 비교한다.

객체와 같은 참조타입의 경우 참조값이 같아야 true 가 된다.

그래서 objA 와 objB 를 비교했을때는 참조값이 같지 않기 때문에 fasle 가 나오고
objB 와 objC 를 비교했을때는 참조하는 값이 같은 곳을 바라보고 있기 때문에 즉 같은 객체를 참조하므로 true 가 나온다

```

```
