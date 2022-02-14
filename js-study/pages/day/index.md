```
const d = new Date();

// 날짜를 정하기
new Date(2021, 0, 1).toLocaleDateString();
// "2021. 1 1."


const year = d.getFullYear(); // 년
const month = d.getMonth();   // 월
const day = d.getDate();      // 일


// 어제 날짜 구하기
new Date(year, month, day - 1).toLocaleDateString();


// 일주일 전 구하기
new Date(year, month, day - 7).toLocaleDateString();


// 한달 전 구하기
new Date(year, month - 1, day).toLocaleDateString();


// 일년 전 구하기
new Date(year - 1, month, day).toLocaleDateString();
```
