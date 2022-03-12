```
react-cookie 사용법

1. react-cookie 다운로드
npm install react-cookie
yarn install react-cookie

2.import useCookies 후,
import { useCookies } from "react-cookie";

3. cookies , setCookie , removeCookie 항목 변수로 선언해주기
export default function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
}
```
