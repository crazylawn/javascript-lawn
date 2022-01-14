### 숫자

```
var intNum = 10;
var floatNum = 0.1;
```

### 문자열

```
var str = 'test';
console.log(str[0], str[1], str[2], str[3]); // 출력값은 test

만약 여기서 문자열의 첫글자를 대문자로 변경하면?

 str[0] ='T'
console.log(str); //출력값은 test 가 나온다.
```

## 3-1.자바스트립트 기본 타입

### 3.1.1숫자

---

    ```
      자바스크립트는 하나의 숫자형만 존재한다.
      자바스크립트에서는 모든 숫자를 64비트 부동 소수점 형태로 저장하기 때문이다.
      그래서 var 키워드로 선언된 자바스트크림트 변수에는
      정수나 실수 구분없이 그값을 바로 저장할수 있으므로,
      intNum 이나 floatNum 변수 모두 typeof 연산자의 결과값이
      number 타입임을 바로 알수 있다.

      자바 스크립트에서는 정수형이 따로 없고,
      모든 숫자를 실수로 처리하므로 나눗셈 연산을 할때는 주의!!
      자바스트립트에서는 5와 2가 둘다 정수가 아닌 실수로 취급 되므로
      소수 부분까지 출력된 2.5 결과값이 된다.

      C 언어에 익숙한 개발자의 경우는 특히 조심해야함.
      만약에 나눗셈 연산 결과와 같이 소수부분을 버린 정수 부분만을 구하고 싶으면
      Math.floor() 함수를 이용하면 된다.
      ```

### 3.1.2문자열

---

      ```
      문자열은 작은 따옴표 '' or 큰 따옴표 "" 를 사용한다. 여기서 주의해야한
      점은 한번 정의된 문자열은 변하지 않는다는것 즉, 자스에서는 한번 생성된
      문자열을 읽기만 가능하지 수정은 불가능함.
      ```

### 3.1.3불린값

---

    ```
      자스에서는 true 와 false 값을 나타내는 불린타입을 가진다.
      ```

### 3.1.4null 과 undefined

---

````
      자스에서는 값이 비어있음을 나타내는데
      자스환경 내에서 기본적으로 값이 할당되지 않는 변수는 undefined 이며
      undefined 타입의 변수는 변수 자체의 값 또한 undefined 이다.

      이것처럼 undefined은 타입이자, 값을 나타낸다.
      emptyVar 변수는 아무런 값이 할당되지 않았으니
      undefinded 타입이 출력이 된것이고

      이에 반해서 nullVar 변수와 같이 null 타입변수의 경우는
      개발자가 명시적으로 값이 비어있음을 나타내는데
      사용 여기서 주의할점 null 타입변수인 nullVar 의 typeof 결과가
      null이 아니라 object 라는것인데!!

      그렇게 때문에  자스에서는 null 타입변수인지를 확인할때는 typeof 연산자를 사용하면 안되고
      (=====)일치 연산자를 사용하여 변수의 값을 직접 확인해야한다.
      ```

````

### 3.2.1 객체생성

---

자바스트립트의 객체 개념은 생성 방법이나 상속방식등에서 c++이나 자바와 같은 기존 객체지항언어에서의 객체 개념과는 약간 다르다.
자바스트립트에서는 클래스라는 개념이 없고 객체 리터럴이나 생성자 함수 등 별도의 생성방식이 존재한다.

자바스크립트에서 객체를 생성하는 방법은 크게 3가지가 있는데 1.기본제공 Object() 객체 생성자 함수를 이용하는 방법 2.객체 리터럴을 이용하는 방법 3.생성자 함수를 이용하는 방법

1.Object() 생성자 함수 이용
자바스크립트에서는 객체를 생성할때 내장 Object() 생성자 함수를 제공
아래 예시를 만들어 보자.

```
Object() 를 이용해서 foo 빈 객체 생성
var foo = new Object();

//foo 객체 프로퍼티 생성
foo.name = 'foo';
foo.age = 30;
foo.gender ='lawn';

console.log(typeof foo); // 출력값은 object
console.log(foo); //출력값 {name :'foo' , age : 30 ,gender : 'lawn'}
```

2.객체 리터럴 방식 이용
리터럴이란 용어의 의미는 표기법이다.
객체 리터럴이란 뜻은 객체를 생성하는 표기법을 의미
객체 리터럴방식은 간단한 표기법으로도 객체를 생성할 수 있는 자스의 강력한 문법이다.

객체 리터럴은 중괄호 ({}) 를 이용해서 객체를 생성
{} 안에 아무것도 적지 않은 경우는 빈 객체가 생성되며, 중괄호안에 "프로퍼티이름" :"프로퍼티 값" 형태로 표기하면,
해당 프로퍼티가 추가된 객체를 생성 할 수 있다.

여기서 프로퍼티 이름은 문자열이나 숫자가 올수 있다.
그리고 프로퍼티 값으로는 자바 스트립트의 값을 나타내는 어떤 표현식도 올 수 있고
이값이 함수일 경우에는 이런 프로퍼티를 메서드라고 부른다.
아래 예제를 보자

```
//객체를 리터럴 방식으로 foo 객체 생성

var foo = {
      name : 'foo',
      age : 30 ,
      gender : 'lawn'
}

console.log(typeof foo); //출력값 object
console.log(foo);  //출력값 {name :'foo' , age : 30 ,gender : 'lawn'}
```

3.2.1.3 생성자 함수 이용

자바스크립트의 경우는 함수를 통해서도 객체를 생성할 수 있다.
이렇게 객체를 생성하는 함수를 생성자 함수라고 부른다.

3.2.2 객체 프로퍼티 읽기/쓰기/갱신

객체는 새로운 값을 가진 프로퍼티를 생성하고,
생성된 프로퍼티에 접근해서 해당 값을 읽거나 또는
원하는 값으로 프로퍼티의 값을 갱신할 수 있다.

객체의 프로퍼티에 접근하려면 다음과 같이 두가지 방법을 사용한다.

- 대괄호([]) 표기법
- 마침표(.) 표기법

```
//객체 리터럴 방식을 통한 foo 객체생성

var foo = {
      name :'foo',
      major : 'computer science'

      //객체 프로퍼티 읽기
      console.log(foo.name) //foo
      console.log(foo['name']) //foo
      console.log(foo.nickname) //undefined

      //객체 프로퍼티 갱신

      foo.major = 'Biology'
      console.log(foo.major) //Biology
      console.log(foo['major'])

      //객체 프로퍼티 동적 생성
      foo.age = 30;
      console.log(foo.age); //출력값 30

      //대괄호 표기법만 사용해야 할 경우
      foo['full-name'] ='foo bar';
      console.log(foo['full-name']);  //출력값 foo bar
      console.log(foo.full-name); //출력값 NaN
      console.log(foo.full); //출력값  undefined
      console.log(name);  //출력값  undefined


}
```

1.프로퍼티 읽기

```
객체의 프로퍼티 접근은 대괄호 표기법, 마침표 표기법 으로 가능!
마침표표기법은 객체 다음에 마침표를 찍고 원하는 속성값을 적으면 된다.

대괄호 표기법은 예제에서 볼수 있듯이 접근하려는 객체의 프로퍼티를 문자열 형태로 만든 다음 대괄호를 둘러싸면 된다.

여기서 주의할 점!!
대괄호 표기법에서는 접근하려는 프로퍼티 이름은 문자열 형태로 만들어야한다.
만약 앞 예제에서 foo['name'] 대신에 foo[name] 이라고 접근하면 'foo' 가 아닌 undefined 값이 출력된다.
참고로 여기서 foo[name] 이 undefined 값으로 설정되는 이유를 간단히 알아보면
자바스크립트에서는 대괄호 표기법에서 접근하려는 프로퍼티이름을 문자열 형태로 만들지 않으면
모든 자바스크립트 객체에서 호출 가능한 toString() 이라는 메서드를 자동으로 호출해서 이를 문자열로 바꾸려는 시도를 한다.

만약 객체에 없는 프로퍼티에 접근하려는 경우 undefined 값이 출력된다.
```

2.프로퍼티 갱신

```
프로퍼티에 접근해서 객체의 기존 프로퍼티값을 갱신할 수도 있다.
앞예제에서는 foo 객체의 major 프로퍼티를 마침표 표기법을 이용해서 Biology로 바꾼다.
대괄호 표긱법을 이용하면 다음과 같이 하면된다.

foo['major'] = '전공전공'

```

3.프로퍼티 동적 생성

4.대괄호 표기법만을 사용해야 하는 경우