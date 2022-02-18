## 클로저(closure) 개념

```
클로저는 자신을 포함하고 있는 외부함수보다 내부함수가 더 오래 유지되는 경우,
외부함수 밖에서 내부함수가 호출되더라도 외부함수의 지역변수에 접근할 수 있는데 이러한 함수를 클로저라고 부른다.
```

react 에서는 useState, hoc 혹은 리액트 그자체다.

```
function outerFunc() {
    var x = 10;
    var innerFunc = function () {console.log(x)};
    innerFunc();
}

outerFunc();

함수 outerFunc 내에서 내부함수 innerFunc가 선언되고 호출되었다.
이때 내부함수 innerFunc는 자신을 포함하고 있는 외부함수 outerFunc의변수 x 에 접근할 수 있다.
왜냐하면 함수 innerFunc가 함수 outerFunc의 내부의 선언되었기 때문이다.

스코프는 함수를 호출할 때가 아니라 함수를 어디에 선언하였는지에 따라 결정됨.
이를 렉시컬 스코핑(Lexical scoping)이라고 한다.

렉시컬 스코프 (전역,outerFunc , 자신의 스코프! )
```
