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

//날짜 객체 받아서 문자열로 리턴하는 함수

```
function getDateStr(myDate){
	var year = myDate.getFullYear();
	var month = (myDate.getMonth() + 1);
	var day = myDate.getDate();

	Month = (Month < 10) ? "0" + String(Month) : Month;
	Day = (Day < 10) ? "0" + String(Day) : Day;

	return  year + '-' + month + '-' + day );
}
```

//오늘 날짜를 문자열로 반환

```
function today() {
  var d = new Date();
  return getDateStr(d);
}
```

//오늘로부터 1주일전 날짜 반환

```
function lastWeek() {
  var d = new Date();
  var dayOfMonth = d.getDate();
  d.setDate(dayOfMonth - 7);
  return getDateStr(d);
}
```

//오늘로부터 1개월전 날짜 반환

```
function lastMonth() {
  var d = new Date();
  var monthOfYear = d.getMonth();
  d.setMonth(monthOfYear - 1);
  return getDateStr(d);
}
```

//분구하기
var now = new Date(); // 현재 날짜 및 시간
var minutes = now.getMinutes(); // 분
console.log("분 : ", minutes);
//초 구하기
var now = new Date(); // 현재 날짜 및 시간
var seconds = now.getSeconds(); // 초
console.log("초 : ", seconds);
