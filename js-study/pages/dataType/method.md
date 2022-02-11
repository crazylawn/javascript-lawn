# .map

map 메소드는 배열 내의 모든 요소 각각에 대해여 주어진 함수를 호출한 결과를 모아서 새로운 배열을 반환한다.

```
const arrayA = [2,4,5,7,8]

const mapA = arrayA.map(x => x * 2);

console.log(mapA);
//[4,8,10,14,16]
```

arr.map(callback(currentValue[ ,index [, array]]) [,thisArg])

- callback : 새로운 배열 요소를 생성하는 함수안에 세가지 인수를 가진다.

```
 - currentValue : 처리한 현재요소
 - index  : 처리할 현재 요소의 인덱스
 - array : map() 을 호출한 배열
```

- thisArg : callback 을 실행 할때 this로 사용되는 값이다.

즉 map 함수는 callback 함수를 각각 요소에 대해 한번씩 순서대로 불러서 그 함수의 반환값으로 새로운 배열을 만든다.
callback 함수는 배열 값이 들어있는 인덱스에 대해서만 호출되며, 값이 삭제되거나 값이 할당 그리고 정의 되지 않은 인덱스에 대해서는 호출되지 않는다.

```
['1','2','3'].map(parseInt);
//결과는 [1,NaN, NaN] 이다.

왜냐하면 parseInt 함수는 보통 하나의 인자만 사용하지만, 두개를 받을 수 있다.
그러나 첫번째 인자는 변환하고자 하는 표현이 되고, 두번째는 숫자로 변환할 때 사용할 진법이 된다.
다시 말해 parseInt 는 parseInt( string , n) 의 문법을 가지는데 이때 string을 n 진법일 때의 값으로 바꾼다.

//배열에서 문자열 길이만 획득하기
  const arrA = ['hello' , 'my','name','is','yoju'];
  const arrB = arrA.map(str  => {
      return str.length;
  });
  console.log(arrB);
  //arrA에는 문자열만, arrB에는 문자열의 길이만 담겨있다.
  map 함수는 콜백함수의 리턴을 모아서 새로운 배열을 만드는 것이 목적
```

그러면 map 함수 대신 forEach 를 쓰면 어떨까?
둘의 차이점은 뭘까? 배열에서 문자열 길이만 획득하는 함수를 forEach 로 구현해보면

```
const arrA = ['hello' , 'my','name','is','yoju'];
const arrB = [];
arrA.forEach(str => {arrB.push(str.length)});

console.log(arrB); //[3,5,7,1]
//상위 스코프 변수를 수정하면서 사이드 이펙트를 가지게 된다.
```

map은 부모 스코프영역을 건드리지 않고 콜백함수만으로 목적을 달성하지만, forEach 는 그렇지 않다.
목적에 따라서 다르게 사용하는게 좋다.

map 함수도 filter 함수와 같이 오브젝트를 컨트롤 할 수 있다.

# .filter

    filter 메소드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.
    ```
    const words = ['banana' , 'apple' ,'water','pear','cherry','strawberry'];
    const result = words.filter(word => word.length > 6);
    console.log(result);
    ```

# .find

# .reduce
