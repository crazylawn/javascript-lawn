```
?? (nullish coalescing)

nullish 하다는 것은 확실하게 null 이거나, undefined 인것을 의미한다.


nullish 병합연산자는  ?? 를 사용하면 짧은 문법으로 여러 피연산자 중
그 값이  '확정되어있는' 변수를 찾을 수 있다.

a ?? b 의 평가 결과는 다음과 같다.

a 가 null도 아니고 undefined 도 아니면 a
그 외의 경우는 b

nullish 병합연산자 ?? 없이 X = a ?? b 와 동일한 동작을 하는 코드를 작성하면 다음과 같다.

x = (a !== null && !== undefined) ? a : b;

비교연산자와 논리 연산자만으로 nullish 병합연산자와 같은 기능을 하는 코드를 작성하니 코드가 길어진다

화면속에 세변수가 있는데 세 변수중에 실제 값이 있는 변수의 값을 출력하는데, 세변수 모두 값이 없다면
'익명의 사용자'가 출력되도록 해보겠다.

이럴때 nullish 병합 연산자 ?? 를 사용하면 값이 정해진 변수를 간편하게 찾을 수 있다.

let firstName = null;
let lastName = null;
let nickName ='바이올렛';

//null 이나 undefined 가 아닌 첫 번째 피 연산자
alert(firstName ?? lastName ?? nickName ?? '익명의 사용자'); //바이올렛


```

```
'??' 와  '||' 의 차이

nullish 병합연산자는 OR 연산자 || 와 상단히 유사하다.
실제로 위예시에 ?? 를  || 로 바꿔도 그 결과는 동일한다.

두 연산자 사이에는 중요한 차이점이 있다.
 || 는 첫번째 truthy 값을 반환한다.
 ?? 는 첫번째 정의된 (defined) 값을 반환한다.

 null과 undefined, 숫자 0을 구분 지어 다뤄야 할 때 이 차이점은 매우 중요한 역할을 한다.

 height = height ?? 100;

height 에 값이 정의되지 않은경우 height 에는 100이 할당된다.
이제  ?? 와  || 을 비교해보자

```
