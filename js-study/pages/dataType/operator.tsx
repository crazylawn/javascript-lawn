import React from 'react';
import { NextPage } from 'next';

const Operator: NextPage = () => {
  //숫자
  var intNum = 10;
  var floatNum = 0.1;
  //문자열
  var str = 'test';
  console.log(str[0], str[1], str[2], str[3]); // 출력값은 test
  //만약 여기서 문자열의 첫글자를 대문자로 변경하면?
  // str[0] ='T'
  console.log(str); //출력값은 test 가 나온다.
  return (
    <div>
      3-1.자바스트립트 기본 타입
      <p>3.1.1숫자 </p>
      자바스크립트는 하나의 숫자형만 존재한다. 자바스크립트에서는 모든 숫자를
      64비트 부동 소수점 형태로 저장하기 때문이다. 그래서 var 키워드로 선언된
      자바스트크림트 변수에는 정수나 실수 구분없이 그값을 바로 저장할수
      있으므로, intNum 이나 floatNum 변수 모두 typeof 연산자의 결과값이 number
      타입임을 바로 알수 있다. 자바 스크립트에서는 정수형이 따로 없고, 모든
      숫자를 실수로 처리하므로 나눗셈 연산을 할때는 주의!! 자바스트립트에서는
      5와 2가 둘다 정수가 아닌 실수로 취급 되므로 소수 부분까지 출력된 2.5
      결과값이 된다. C 언어에 익숙한 개발자의 경우는 특히 조심해야함. # 만약에
      나눗셈 연산 결과와 같이 소수부분을 버린 정수 부분만을 구하면 싶으면
      Math.floor() 함수를 이용하면 된다.
      <p>3.1.2문자열 </p>
      문자열은 작은 따옴표 '' or 큰 따옴표 "" 를 사용한다. 여기서 주의해야한
      점은 한번 정의된 문자열은 변하지 않는다는것 즉, 자스에서는 한번 생성된
      문자열을 읽기만 가능하지 수정은 불가능함.
      <p>3.1.3불린값 </p>
      자스에서는 true 와 false 값을 나타내는 불린타입을 가진다.
      <p>3.1.4null 과 undefined</p>
      자스에서는 값이 비어있음을 나타내는데 자스환경 내에서 기본적으로 값이
      할당되지 않는 변수는 undefined 이며 undefined 타입의 변수는 변수 자체의 값
      또한 undefined 이다. 이것처럼 <b>undefined은 타입이자, 값을 나타낸다</b>
      emptyVar 변수는 아무런 값이 할당되지 않았으니 undefinded 타입이 출력이
      된것이고 이에 반해서 nullVar 변수와 같이 null 타입변수의 경우는 개발자가
      명시적으로 값이 비어있음을 나타내는데 사용 여기서 주의할점 null 타입변수인
      nullVar 의 typeof 결과가 null이 아니라 object 라는것인데!! 그렇게 때문에
      자스에서는 null 타입변수인지를 확인할때는 typeof 연산자를 사용하면 안되고
      일치 연산자를 사용하여 변수의 값을 직접 확인해야한다.
    </div>
  );
};

export default Operator;
