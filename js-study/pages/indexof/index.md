특정 문자 위치 찾기 (indexOf 함수)
let str = 'abcabcabc';
let searchvalue = 'ab';
let pos = 0;
while (true) {
let foundPos = str.indexOf(searchvalue, pos);
if (foundPos == -1) break;
document.writeln( foundPos );
pos = foundPos + 1;
}

문자열에 있는 모든 searchvalue 위치 찾기

indexOf() 함수로는 찾고자 하는 문자열이 나타난 '첫번째' 위치만 찾을 수 있다.
