## 옵셔널 체이닝 '?.'

옵셔널 체이닝을 사용하면 프로퍼티가 없는 중첩 객체를 에러 없이 안전하게 접근할 수 있다.

### 옵셔널 체이닝이 필요한 이유

```
let user = {}; // 주소 정보가 없는 사용자

alert(user.address.street); // TypeError: Cannot read property 'street' of undefined
```

예전에 ?.가 추가되기 전에는 이런 문제들을 해결하기 위해서 && 연산자를 사용했다.

중첩 객체의 특정 프로퍼티에 접근하기 위해서는 거쳐야 할 구성요소들을 AND 로 연결해서 실제 해당 객체나 프로퍼티가 잇는지 확인하는 방법을 사용했었다.
그런데 이렇게 AND를 연결해서 사용하면 코드가 아주 길어진다는 단점이 있다.

?.은 ?.앞의 평가대상이 undefined나 null이면 평가를 멈추고 undefined를 반환합니다.

이렇게 user?.name 으로 이름이 읽으면 아래와 같이 user 객체가 존재하지 않더라고 에러가 발생하지 않는다.

```
let user = null;

alert( user?.name ); // undefined
alert( user?.name.street ); // undefined
```

위 예시를 통해서 우리는 ?. 은 ?.앞의 평가 대상에만 동작되고,
확장은 되지 않는다는 사실을 알 수 있다.

참고로 위 예시에서 사용된 user?.는 user 가 null이나
undefined 인 경우만 처리할 수 있다.
그렇지 않으면 user?.name.street 의 두번째 점 연산자에서 에러가 발생한다.

```
 ! 옵셔널 체이닝을 남용하지 마셈

 ?.는 존재하지 않아도 괜찮은 대상에만 사용해야한다.
 사용자 이름을 다루는 위의 예시에는
 논리상 user는 반드시 있어야하는데 필수값이 아니기 때문에
 user.name?.stree 을 사용하는 것이 바람직하다.

 만약 실수로 인해서 user에 값을 할당하지 않았다면 바로 알아낼수 있도록 해야한다.
 그렇지 않으면 에러를 조기에 발견하지 못하고 디버깅이 어려워진다.
```

```
 ! ?.앞의 변수는 꼭 선언되어 있어야한다.

 변수 user 가 선언되어 있지 않으면 user?.anything 평가시 에러가 발생한다.

 // ReferenceError: user is not defined
user?.name;

user?.anything 을 사용하려면 let 이나
const, var 를 사용해서 user를 정의해야 한다.
이렇게 옵셔널 체이닝은 선언이 완료된 변수를 대상으로만 동작한다.
```

```
?.()와 ?.[]
?.은 연산자가 아닙니다.
?.은 함수나 대괄호와 함께 동작하는 특별한 문법 구조체(syntax construct)이다.

함수 관련 예시와 함께 존재 여부가 확실치 않은 함수를 호출할 때
?.()를 어떻게 쓸 수 있는지 알아보자.


let user1  = {
    admin() {
        alert('관리자 계정입니다');
    }
}

let user2 = {};

user1.admin?.();//관리자계정입니다.
user2.admin?.();

두 상황 모두에서 user 객체는 존재하기 때문에 admin 프로퍼티는 .만 사용해서 접근했다.

그리고 나서 ?.() 를 사용해서 admin 의 존재여부를 확인했습니다.
user1에는 admin 가 정의되어 있기 때문에 메서드가 제대로 호출되었다.
반면에 admin이 정의되어 있지 않았음에도 불구하고
메서드를 호출하면 에러 없이 그냥 평가가 멈추는 것을 알수있다.


```

```


.대신 대괄호 [] 를 사용해서 객체 프로퍼티에 접근하는 경우에는 ?.[] 를 사용할 수도 있다.
?.[] 를 사용하면 객체 존재 여부가 확실치 않은 경우에도 안전하게 프로퍼티를 읽을 수 있다

let user1 = {
    firstName: "Violet"
};

let user2 = null;

let key = "firstName";

alert( user1?.[key] ); // Violet
alert( user2?.[key] ); // undefined

alert( user1?.[key]?.something?.not?.existing); // undefined

```

```
?.은 delete 와 조합해서 사용할 수도 있다.

delete user?.name; // user가 존재하면 user.name을 삭제합니다.
```

```
!  ?.은 읽기나 삭제하기에는 사용할 수 있지만 쓰기에는 사용할 수 없습니다.

?.은 할당 연산자 왼쪽에서 사용할 수 없다.

// user가 존재할 경우 user.name에 값을 쓰려는 의도로 아래와 같이 코드를 작성해 보았다.
user?.name = "Violet"; // SyntaxError: Invalid left-hand side in assignment
에러가 발생하는 이유는 undefined = "Violet"이 되기 때문임.

```

요약

```
옵셔널 체이닝 문법 ?.은 세 가지 형태로 사용할 수 있다.

obj?.prop – obj가 존재하면 obj.prop을 반환하고, 그렇지 않으면 undefined를 반환함
obj?.[prop] – obj가 존재하면 obj[prop]을 반환하고, 그렇지 않으면 undefined를 반환함
obj?.method() – obj가 존재하면 obj.method()를 호출하고, 그렇지 않으면 undefined를 반환함
여러 예시를 통해 살펴보았듯이 옵셔널 체이닝 문법은 꽤 직관적이고 사용하기도 쉽다.
?. 왼쪽 평가 대상이 null이나 undefined인지 확인하고
null이나 undefined가 아니라면 평가를 계속 진행합니다.

?.를 계속 연결해서 체인을 만들면 중첩 프로퍼티들에 안전하게 접근할 수 있다.

?.은 ?.왼쪽 평가대상이 없어도 괜찮은 경우에만 선택적으로 사용해야 한다.

꼭 있어야 하는 값인데 없는 경우에 ?.을 사용하면 프로그래밍 에러를 쉽게 찾을 수 없으므로 이런 상황을 만들지 말도록 해야함.
```
