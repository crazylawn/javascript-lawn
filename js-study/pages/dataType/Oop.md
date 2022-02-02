# 객체지향 프로그래밍

자스에서는 여러가지 특성으로 객체지향언어의 특성을 구현해낼 수 있다.

## 클래스, 생성자, 메서드

## 상속

## 캡슐화

# 6.1 클래스 , 생성자 , 메서드

C++ 이나 java 와 같은 경우 class 라는 키워드를 제공하여 프로그래머는 클래스를 만들 수 있다.
클래스와 같은 이름의 메서드로 생성자를 구현해낸다.
자스에서는 이러한 개념이 없고, 계속해서 강조했듯이 자바스트립트는 거의 모든 것이 객체이고,
특히 함수 객체로 많은 것을 구현한다.

# 예제 6-1

function Person(arg) {
this.name = arg;

    this.getName = function() {
        return this.name;
    }

    this.setName = function(value) {
        this.name = value;
    }

}

var me = new Person('zzoon');
console.log(me.getName()); //출력값 zzoon

me.setName('summer');
console.log(me.getName()); //출력값 summer

new 키워드로 새로운 객체 me 를 만들었다.
