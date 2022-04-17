## next/router

참고문서 : https://nextjs.org/docs/api-reference/next/router#routerevents

```
routeChangeStart(url): 라우팅이 시작될 때 호출
routeChangeComplete(url): 라우팅이 끝나면 호출
routeChangeError(err, url): 라우팅 도중 에러 발생 시 호출
beforeHistoryChange(url): 브라우저 내의 히스토리가 바뀌기 직전에 호출
appUpdated(nextRoute): 페이지가 업데이트 되었는 데 새 버전의 어플리케이션이 사용 가능한 경우 호출
```
