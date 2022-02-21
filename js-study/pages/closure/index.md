## 클로저(closure) 개념

```
클로저는 자신을 포함하고 있는 외부함수보다 내부함수가 더 오래 유지되는 경우,
외부함수 밖에서 내부함수가 호출되더라도 외부함수의 지역변수에 접근할 수 있는데 이러한 함수를 클로저라고 부른다.

"자신이 선언될 당시의 환경을 기억하는 함수"

함수의 실행컨텍스트를 간단히 알고 이해해야한다.
함수는 호출 될 때 함수의 실행컨텍스트가 생성됐다가 실행이 끝나면 실행컨텍스트가 종료된다. (힘수의 실행 컨텍스트가 생성될 때 함수의 lexical environment도 생성된다.)
이 실행컨텍스트의 lexical environment에는 함수의 지역변수의 정보& 이 함수의 상위 스코프의 대한 정보가 들어있다.

MDN에서 설명하는 내용으로 "클로저는 함수와 함수가 선언된 어휘적 환경의 조합이다.
클로저를 이해하려면 자바스크립트가 어떻게 변수의 유효범위를 지정하는지(Lexical scoping)를 먼저 이해해야 한다." 라고 설명하고있다.
위에서 본 것과 같이 함수 내부에서 자유 변수를 활용하여 폐쇄적인 함수를 만드는 방식을 클로저라고 생각한다.

function outer(){
  const name = 'kyle';
  console.log(name)
}
sayName() //kyle
console.log(name) //error

여기서 우리가 변수 name을 함수 밖에서 사용하고 싶다면 어떻게 사용해야할까??
변수 name은 outer이라는 함수의 실행컨텍스트가 종료 되면서 아무도 접근할 수 없게됐다.
name을 함수 밖에서도 사용하기 위해서는 클로져를 사용하면 된다.


function outer(){
  const name = 'kyle';
  console.log(name)
  return function inner(){
    const greeting = 'hello!'
    console.log(greeting,name)
  }
}
const getKyle = outer() //kyle
getKyle() //hello!kyle

outer 함수가 위와 같이 종료됐다.
우리의 예상대로라면 음~ outer함수가 종료 됐으니 name은 아무데서도 접근할 수 없다!
하지만 inner함수에서 접근 가능하다.

왜?? 왜 가능하죠??
이것이 바로 클로져다.

클로져의 특성상 inner함수가 선언될 때 그 주변의 lexical enviroment(여기서는 outer의 lexical enviroment)와 함께 번들로 묶였기 때문이다!

그렇기 때문에 inner가 실행이 되어서 lexical environment를 만든 뒤 참조 하지 않아도,
선언할 때 이미 묶여버리게 된다.


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

```


### 클로저가 필요한 이유

1.전역변수를 줄일 수 있다.

전역변수가 많으면 어디에서든 실수로라도 접근을 할 수 있기 때문에 최대한 전역변수를 줄여서 코드를 해야한다.


2.비슷한 형태의 코드를 재사용률을 높일 수 있습니다.


const newTag = function(open, close) {
    return function(content) {
        return open + content + close
    }
}

const bold = newTag('<b>', '</b>')
const italic = newTag('<i>', '</i>')

console.log(bold(italic("This is my content!")))
코드를 보면 bold,itealic 등등의 새로운 태그를 만들 수 있는 함수 newTag를 클로져를 이용해 간단하게 구현했다.

인자에 open,close,content를 한번에 다 받는다면,This is my content! 와 같은 값을 출력을 하고 싶을 때 가독성이 떨어질 수 있다.


- 클로저 라고 착각하기 쉬운 코드
function outer() {
  let name = 'kyle';
  if (true) {
    let city = 'seoul';
    return function inner() {
      console.log(city);
    };
  }
}
클로저를 정확하게 파악하지 않았을 때 위와 같은 코드를 클로저라고 착각할 수 있다.
마치 함수를 리턴하는 것 자체가 클로저라고 오해하는 경우가 생길 수 있다.


그렇다. 클로저는 내부에 선언된 함수가 외부함수의 지역변수를 사용해 줬을 때만 클로저라고 선언된다.
```

```
클로저의 원인

클로저의 가장 근본적인 원인은 자바스크립트가 함수의 스코프를 정할 때 렉시컬 스코핑을 사용하기 때문이다.
언어에 따라 다른데 자바 스크립트는 함수가 실행될 때 그 범위가 지정되는 것이 아니라 선언될 때 이미 범위가 지정되어있다.

그래서 내부 함수의 경우 이미 선언할 때부터 즉 내부함수를 부르기 위해 외부 함수를 부르기 이전부터 이미 외부 함수의 어떤 변수를 쓸지 미리 참조하고 있었다는 뜻이다.
간단히 말하면 미래에 쓰일 것을 미리 알고 변수를 가져가 빌려쓰고 있었다는 것이다.
그래서 클로저를 쓰게 되면 외부 함수의 종료에도 불구하고 내부 함수는 완전히 종료되지 않고 메모리에 남아서 언제라도 쓸 수 있게 준비하고 있다.
```

```
클로저의 남용

클로저는 위와 같이 전역 객체도 대신하고 프라이빗 변수의 역할을 대신해줄 수 있다.
프로그래밍을 할 때 편리하고 안전하게 코드 설계가 가능하다.

다만 가장 큰 단점이 있다.
바로 클로저는 메모리를 계속 잡아먹는다는 것이다.
클로저는 위에서 말한대로 종료되지 않고 대기 상태이므로 클로저가 많아지면 그만큼 메모리를 계속 잡아먹고 있는 것이다.
그래서 클로저는 너무 남용하면 리소스를 낭비할 가능성이 있다.

```
