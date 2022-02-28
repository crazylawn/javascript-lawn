조건 ? 맞을 경우 : 안맞을 경우
var val = 1 == 2 ? "true" : "false"
삼항연산자 중첩 예제
조건 ? (조건2 ? 조건2*맞을*경우 : 조건2*안맞을*경우 ) : 안맞을 경우
val = 1 == 1 ? ("true" == "true" ? "중첩true" : "중첩false") : "false";

```
변수 ?  변수 값이 참이면 true 아니면 false
isStudent ? (
  price = 8,
  alert('Please check for student ID')
) : (
  alert('Enjoy the movie')
);
```

A ? (B ? C : D) : E

2.자바스크립트 표현

JSX가 내부에서 코드 {} 감싸면 자바스크립트 표현식을 작성할 수 있다.

3.조건부 연산자

JSX 내부의 자바스크립트 표현식에서 if 문을 사용할 수는 없다.
하지만 조건에 따라 다른 내용을 렌더링해야 할 때는 JSX 밖에서 if문을
사용하여 사전에 값을 설정하거나, {} 안에 조건부 연산자를 사용하면 된다.
조건부 연산자는 삼항 연산자이다.

import React from 'react';

function App() {
const name = 'react';
return (

<div>
{name ==='react' (<h1>This is react</h1> :<h1>This isn't react</h1>)}
</div>
)
}

4.AND연산자 (&&)를 사용한 조건부 렌더링
개발하다 보면 특정 조건을 만족할 때 내용을 보여주고, 만족하지 않을 때
아예 아무것도 렌더링 하지 않아야 하는 상황이 올 수 있다.
조건부 연산자(삼항 연산자)로도 구현할 수 있지만 AND 연산자를 사용하면 더 짧은코드로 똑같은 작업을 할 수 있다.

import React from 'react';

function App() {
const name = 'react';
return (

<div>
{name ==='react' &&(<h1>This is react</h1> :<h1>This isn't react</h1>)}
</div>
)
}

&&연산자로 조건부 렌더링을 할 수 있는 이유는 리액트에서 false 를
렌더링할 때는 null 과 마찬가지로 아무것도 나타나지 않기 때문이다.
여기서 한가지 주의해야 할점은 falsy한 값인 은 예외적으로 화면에 나타난다는 점이다.

5.undefined 를 렌더링하지 않기
리액트 컴포넌트에서는 함수에서 undefined 만 반환하여 렌더링하는 상황을 만들면 안된다.예를 들어 다음과 같은 코드는 오류를 발생시킨다.
