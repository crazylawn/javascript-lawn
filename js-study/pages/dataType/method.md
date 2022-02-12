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
console.log(result); // ['water','strawberry']
```

arr.filter(callback(element[, index[, array]])[, thisArg])

- callback : 각 요소를 시험할 함수 true를 반환하면 요소를 유지하고, false 를 반환하면 버린다.
  다음 세가지 매개변수를 받는다.
- element : 처리할 현재요소
- index : 처리할 현재요소의 인덱스
- array : filter를 호출한 배열

- thisArg : callback 을 실행할 때 this로 사용하는 값

```
//filter 함수로 차집합 구하기

const arrA = ['3','4','3','5','7','9','4'];
const arrB = ['4','2','5','7','1','2'];

const difference = arrA.filter(x => !arrB.includes(x));

console.log(difference);

//검색 조건에 따른 배열 필터링(쿼리)
const fruits = ['banana' , 'apple' ,'water','pear','grapes','strawberry'];

const filterItems = (query) => {
    return fruits.filter((el) => el.toLowerCase().indexOf(query.toLowerCase()) > -1);
}
```

console.log(filterItems('ap')) //['apple', 'grapes']
console.log(filterItems('an')) //['banana', 'mango','orange']

# .find

find 메소드는 주어진 판별 한수를 만족하는 첫번째 요소의 값을 반환한다.
그런요소가 없다면 undefined 를 반환한다.

```
const arrA = [5,12,4,6,3,33];
const found = arrA.find(e => e  > 10);
console.log(found); //12
```

arr.find(callback[, thisArg])

- callback : 배열의 각 값에 대해 실행할 함수, 아래의 세 인자를 받는다.
- element : 콜백 함수에서 처리할 현재 요소
- index : 콜백 함수에서 처리할 현재 요소의 인덱스
- array : find 함수를 호출한 배열

- thisArg : 선택항목. 콜백이 호출될 때 this로 사용할 객체

```
//속성 중 하나를 사용하여 배열에서 객체찾기

const inventory = [
    {name : 'apples', quantity : 2},
    {name : 'bananas', quantity : 4},
    {name : 'cherries', quantity : 9}
]

const result = inventory.find(fruit => fruit.name ==='cherries');

console.log(result); // {name  :'cherries' , quantity : 9 }
```

# .reduce

reduce 메소드는 각 요소에 대해 주어진 reducer 함수를 실행하고 하나의 결과 값을 반환한다.

```
const arrA =[1,2,3,4,5]
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(arrA.reduce(reducer)) //15
```

리듀서 함수는 네개의 인자를 가진다.

- 누산기(accumulator - acc)
- 현재값(cur)
- 현재 인덱스(idx)
- 원본 배열(src)

리듀서 함수의 반환 값은 누산기에 할당되고, 누산기는 순회중 유지되므로 결국 최종결과는 하나의 값이 된다.
즉 반환값이 결과 값

```
//배열 요소의 합 계산하기
let arr = [9,2,8,5,7];
let sum = arr.reduce((pre , value) => {
    return pre + value;
});

//정수 배열에서 5의 배수인 정수만 모으기
let arr = [10,100,3,4,50,7];
let arrB = arr.reduce((pre, value) => {
    if(value % 5  === 0) {
        pre.push(value);
    }
    return pre;
},[]);
```

.find 메소드는 찾으면 더이상 콜백함수가 불리지 않지만 ,
reduce는 요소의 수 만큼 항상 호출되는 단점도 있다.

## Array 객체의 메서드 및 속성

- join(연결문자) - 배열 객체에 데이터를 연결 문자 기준으로 1개의 문자형 데이터로 반환.

- reverse() - 배열 객체에 데이터의 순서를 거꾸로 바꾼 후 반환.

- sort() - 배열 객체에 데이터를 오름차순으로 정렬.

- slice(index1, index2) - 배열 객체에 데이터 중 원하는 인덱스 구간만큼 잘라서 배열 객체로 가져옴.

- splice() - 배열 객체에 지정 데이터를 삭제하고 그 구간에 새 데이터를 삽입할 수 있음.

- concat() - 2개의 배열 객체를 하나로 결합.

- pop() - 배열에 저장된 데이터 중 마지막 인덱스에 저장된 데이터 삭제.

- push(new data) - 배열 객체에 마지막 인덱스에 새 데이터를 삽입.

- shift() - 배열 객체에 저장된 데이터 중 첫 번째 인덱스에 저장된 데이터를 삭제.

- unshift(new data) - 배열 객체의 가장 앞의 인덱스에 새 데이터를 삽입.

- length - 배열에 저장된 총 데이터의 개수를 반환.
