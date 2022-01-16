# 3.4 프로토 타입

자바스트립트의 모든 객체는 자신의 부모 역할을 하는 객체와 연결이 되어있다.

그리고 마치 객체지향의 상속 개념과 같이 부모 객체의 프로퍼티를
마치 자신의 것 처럼 쓸 수 있는 것 같은 특징이 존재한다.

이러한 부모 객체를 프로토 타입 (프로토타입) 이라고 부른다.

```
var foo = {
name : lawn
}
```

객체 리터럴을 하나 생성을 하고 이값을 console.dir(foo); 찍어보면
foo 객체에 _proto_ 프로퍼티가 있다는 것을 확인 할 수 있다.
즉 , Object.prototype 객체가 프로토타입 객체가 된다는 것을 기억하기

이 프로퍼티가 바로 앞서 설명한 foo 객체의 부모인 프로토타입 객체를 가리킨다.
이 객체의 다음 부분에 toString() 메서드가 정의 되어있다는 것을 알 수 있음.

ECMAScript 명세서에는 자바스크립트의 모든객체는 자신의 프로토타입을 가리키는
[[Prototype]] 이라는 숨겨진 프로퍼티를 가진다고 설명하고 있다.

즉, 자신의 프로토타입인 Object.prototype 객체에 포함된 다양한 메서드를 마치
자신의 프로퍼티인 것처럼 상속 받아 사용 할 수 있다.