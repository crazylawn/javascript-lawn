# 3.5배열

배열리터럴은 자스에서 새로운 배열을 만드는데 사용하는 표기법이다.
배열 리터럴을 대괄호 ([]) 를 사용함!

배열은 자스에서 배열의 크기를 현재배열의 인덱스 중 가장 큰 값을 기준으로 배열의 요소를 정하기 때문이다.

배열 리터럴에서는 각 요소의 값만을 포함한다.
객체가 프로퍼티의 이름으로 대괄호나 마침효 표기법을 이용해 해당 프로퍼티에 접근했다면,
배열의 경우는 앞 예제처럼 대괄호 내에 접근하고자 하는 원소에 배열내 위치 인덱스값을 넣어서 접근한다.

# 3.5.2 배열의 요소 생성

자바스크립트 배열의 경우는 값을 순차적으로 넣을 필요없이 아무 인데스 위치에나 값을 동적으로 추가할 수 있다.

```
배열 요소의 동적 생성

//빈배열
var emptyArr  = [];
console.log(emptyArr[0]); //출력값 undefined

//배열 요소 동적 생성
emptyArr[0] = 100;
emptyArr[3] = 'eight';
emptyArr[7] = true;

console.log(emptyArr);

console.log(emptyArr.length); //출력값 8

```

특이점은 배열을 3개의 값만 할당했지만 , 8개의 배열요소 값이 출력된다는 것이다.
이것은 자바스크립트가 배열의 크기를 현재 배열의 인덱스중 가장 큰 값을 기준으로 정한다.

# 3.5.3 배열의 length 프로퍼티

모든 배열은 lenth 프로퍼티가 있다.
emptyArr.length 값은 8 이라는것을 확인 할수 있는데
이 length 프로퍼티는 배열내에 가장 큰 인덱스에 1을 더한 값이다.

# 3.5.3.1 배열 표준 메서드와 length 프로퍼티

배열의 다양한 표준 메서드들은 length 프로퍼티를 기반으로 동작을 하고 있다.
예글 들어 push() 메서드는 인수로 넘어온 항목을 배열의끝에 추가하는 자바스크립트 표준 배열 메서드다.
이메서드는 배여르이 현재 lenght 값의 위치에 새로운 원소값을 추가한다.
배열의 length 프로퍼티는 현재 배열의 맨 마지막 원소의 인덱스 +1 을 의미하므로
결국 length 프로퍼티가 가리키는 인덱스에 값을 저장하는것은 배열의 끝에 값을 추가하는것과 같은 결과가 되기 때문이다.

```
push() 메서드와 length 프로퍼티

//arr 배열생성
var arr = ['zero' , 'one' , 'two'];

//push() 메서드 호출
arr.push('three');
console.log(arr);

//length 값 변경후 , push() 메서드 호출
arr.lenth = 5;
arr.push('four');
console.log(arr); // ['zero','one','two','three',undefined, 'four']


arr.length 프로퍼티값을 임의로 5로 바꾸게 되면 push() 메서드의 동작은
현재 변경된 arr.length 가 가리키는 배열의 5번째 인덱스 , arr[5]에  'four' 문자열을 추가하게 된다.

이렇듯 length 프로퍼티는 배열 메서드에 동작에 영향을 줄 수 있을 만큼 배열에서는 중요한 프로퍼티이므로 기억하기



```

# 3.5.4 배열과 객체

자바스크립트에서는 배열 역시 객체이다.
객체와 배열을 모둔 object 이다.

# 3.5.5 배열의 프로퍼티 동적 생성

배열에 동적 프로퍼티가 추가된다고 해서 배열 length 의 값이 3으로는 바뀌지 않는다는 것!
그런다음 다시 arr[3] 에 배열 원소를 추가했을 때 length 값이 4로 바꿨음을 확인할 수 있다.
즉 , 배열의 length 프로퍼티는 배열원소의 가장 큰 인덱스가 변했을 경우만 변경된다.

# 3.5.6 배열의 프로퍼티 열거

# 3.5.7 배열 요소 삭제

splice() 배열 메서드

splice(start, deleteCount , item...)

### start - 배열에서 시작 위치

### deleteCount - start 에서 지정한 시작 위치부터 삭제할 요소의 수

### item - 삭제할 위치에 추가할 요소

```
splice() 메서드를 이용한 배열 프로퍼티 삭제

var arr  =['zero', 'one','two','three'];

arr.splice(2,1);// 2번째 요소를 시작점으로 1개의 원소를 삭제한다.
console.log(arr); //출력값 ['zero','one', 'three']
console.log(arr.length); // 출력값 3

```

# 3.5.8 Array() 생성자 함수

- 호출할때 인자가 1개이고 , 숫자일 경우 : 호출된 인자를 length로 갖는 빈 배열 생성
- 그외의 경우 : 호출된 인자를 요소로 갖는 배열 생성

3-24 Array() 생성자 함수를 통한 배열 생성

```
var foo = new Array(3);
console.log(foo); // [undefined,undefined,undefined]
console.log(foo.length); //3

var bar = new Array(1,2,3);
console.log(bar); // 출력값 [1,2,3]
console.log(bar.length); //출력값 3


foo 배열의 경우는 Array() 생성자 함수를 호출할 때 3이라는 숫자 인자 1개만 넘겼으므로,
앞서 설명한 것 처럼 3개의 요소가 빈 배열을 생성
but, bar 배열의 경우는 Array(1,2,3) 와 같이 호출했으므로 1,2,3 세개의 숫자가 요소인 배열이 생성
```

# 3.5.9 유사 배열 객체

- 3.5.3 배열의 length 프로퍼티에서 봤지만 배열의 length 프로퍼티는 배열의 동작에 있어서 중요한 프로퍼티이다.

- 만약 일반객체에 length 프로퍼티를 가진 객체를 유사 배열 객체

# 3-25 유사배열 객체의 배열 메서드 호출

var arr = ['bar'];
var obj = {name :'foo' , length :1}

arr.push('baz');
console.log(arr); 출력값 ['bar' ,'baz']

obj.push('baz'); //error

4장에서 배울 apply() 메서드를 사용해서 객체지향표준 배열 메서드를 활용해보자!

이 다음 코드는 apply() 메서드 과 4.4.2.4 apply 메서드를 이요한 명시적인 this 바인딩 부분이다

# 예제 3-26 유사 배열 객체에서 apply()를 활용한 배열 메서드 호출

var arr =['bar'];
var obj = {name :'foo' , length :1};

arr.push('baz');
console.log(arr); //출력값 ['bar' ,'baz'];

Array.prototype.push.apply(obj , ['baz']);
console.log(obj); //출력값 {'1' :'baz' , name :'foo' , length :2};

# 3.6 기본타입과 표준 메서드

```
예제 3-27 기본타입 변수에서의 메서드 호출

//숫자 메서드 호출
var num = 0.5;
console.log(num.toExponential(1)); //출력값 '5.0e-1'

//문자열 메서드 호출
console.log('test'.charAt(2)) //출력값 'S'
```

toExponential : 표준 숫자형 메서드
charAt() 문자열에서 인자로 받은 위치에 있는 문자 반환

# 3.7 연산자

## 3.7.1 + 연산자

```
var add1 = 1+1;
var add2 = `my` + `string`;
var add3 = 1+ 'string';
var add4 =  'string' +2;

```

## 3.7.2 typeof 연산자

각 타입별 typeof 연산자 결과

typeof 연산자는 피연산자의 타입을 문자열 형태로 리턴한다.
여기서 null 과 배열이 object 라는 점이고 함수는 function 이라는 점에 유의해야함

기본타입

숫자 number
문자열 string
불린값 boolean
null object
undefined undefined
객체 object

# 3.7.3 동등연산자와 일치연산자

숫자 1과 문자열 '1'을 == 와 === 연산자로 각각 비교했다.
== 연산자의 경우에는 두 피연산자가 타입이 다르므로 같은 타입을 변환해서 두 값이 같다고 판단해서 true 가 됐다
반면에 === 연산자는 두 피연산자가 타입이 다르므로 바로 false 가 출력된다.
== 연산자의 비교는 타입변환에 따른 잘못된 결과를 얻을 수 있으므로 대부분의 자스에서 == 연산자로 비교하는 것을 추천하지 않는다

# 3.7.4 !!연산자

자스 프레임워크 소스코드를 분석해보면 !!나 !연산자를 두개 붙여서 사용하는 경우가 종종 있는데
!!의 역할은 피연산자를 불린값으로 변환해주는것

객체는 값이 비어있는 빈 객체라도 true로 변환되는 것을 주의해야한다.

# 배열 원소 추가!

원소를 추가하는 메소드는 push, concat, unshift 등이 있다.

push() : 배열의 끝에 원소를 하나 추가한다.

var arr = ["a","b","c"];
arr.push("d");
console.log(arr); // ["a","b","c","d"]

unshift() : 배열의 첫번째 인덱스에 원소를 넣고 나머지 원소들을 한 자리씩 뒤로 밀기

var arr = ["a", "b", "c"];
arr.unshift("d");
console.log(arr); // ["d", "a", "b", "c"]

인덱스를 사용해서 추가해줄 수도 있다. 단, 이렇게 사용하는 것은 좋지 않다. 해당 인덱스에 이미 값을 가지고 있는 경우에는 추가가 아니라 수정이 발생하기 때문이다.

var arr = [1,2,3];
arr[3] = 4; // arr = [1,2,3,4]
