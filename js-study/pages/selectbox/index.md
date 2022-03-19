//셀렉트 박스 값에 따라서 변동하는법
//일단 onChange 부터 설명하겠다.
handleChange = (e) => {
let value = Array.from(e.target.selectedOptions, option => option.value);
this.setState({values: value});
}
