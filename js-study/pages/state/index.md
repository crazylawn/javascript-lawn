setState 에 대하여

복수의 프로세스가 존재할 때,
동기(synchronous)적 처리는 하나씩 순차적으로, 이전 작업이 끝날 때까지 기다렸다가 처리하는 것
비동기(asynchronous)적 처리는 전 작업이 끝나지 않아도 다음 작업으로 넘어가서 동시에 처리하는 것

setState를 동기적으로 실행시키기

1. 콜백함수 이용하기
   - 두 번째 인자로, setState로 값을 변경한 뒤에 실행시키고 싶은 함수를 넣으면 된다
2. updater(previousState) 이용하기
   - 위에서 첫 번째 인자로 객체 말고도 함수를 전달할 수 있다고 했는데, 그 함수를 updater라고 한다

변수 말고 state에 데이터 저장해서 쓰는 이유

힘들게 state를 만들어 써야하는 이유는 이거다!
"변수가 변경될 때 자동으로 관련된 HTML을 재렌더링되게 만들고 싶으면"
그럴 때 변수 말고 state에 저장해서 데이터바인딩 하셔야합니다.

함수형 업데이트

setState 도 함수형 업데이트를 할 수 있는데, 보통 한 이벤트 함수 내에서
setState 를 여러번 연속으로 진행해야하는 경우에 사용한다

handleCount =() => {
setState((state) => return {
counter: state.counter+1
})
}

이런식으로 state 를 인자로 가져와서 함수형으로 업데이트 시켜준다

setState 는 단순히 상태를 바꾸는 함수가 아니라, 바꿔달라고 요청해주는 함수이다.
so, 리액트에서는 상태가 바로 업데이트 되는 것이 아니라 비동기적으로 업데이트가 된다.
상태가 업데이트 되고난 후에 어떤작업을 하고 싶으면 setState 함수릐 두번째 파라미터에 콜백함수를 넣어준다
handleCount =() => {
setState((state) => return {
counter: state.counter+1
},
() => {console.log('count!!!!')}
)
}
