defer , async 스크립트

# defer

모든 script 파일들이 다운로드 된 이후에
실행되기 때문에 훨씬 안전하다

```
<script defer src='1.js'></script>
```

# async

async 옵션으로 다수의 script 파일들을 다운로드 받게 되면 정의된 script 순서에 상관없이 다운로드 된 파일을 우선적으로 실행하기 때문에 js 파일이 순서에 의존적이라면 문제가 생길 수 있다.

async 속성이 붙은 스크립트는 페이지와 완전히 독립적을 동작한다.

async 스크립트는 defer 스크립트와 마찬가지로 백그라운드에서 다운로드된다.

따라서 HTML 페이지는 async 스크립트 다운이 완료되길 기다리지 않고 페이지 내 콘텐츠를 처리하고 출력한다.
but , async 스크림트 실행중에는 html 파싱이 멈춘다.

```
<script async src='1.js'></script>
```
