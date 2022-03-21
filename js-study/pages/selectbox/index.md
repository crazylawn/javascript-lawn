//셀렉트 박스 값에 따라서 변동하는법
//일단 onChange 부터 설명하겠다.
handleChange = (e) => {
let value = Array.from(e.target.selectedOptions, option => option.value);
this.setState({values: value});
}
//선택한 필요한 아이템 값 가져오기
const selectedValue = items.find((f) => f.value === boxType)
return [{ ...selectedValue, value: 'selected' }, ...items]
}, [boxType])

//필요한 아이템 값에 다른 필요한 값들도 넣어서 find 로 비교해서 가져와서 보여준다!
const selectedValue = items.find((f) => f.value === boxType)
