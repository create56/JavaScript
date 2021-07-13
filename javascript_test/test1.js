// 자바스크립트 = 인터프리터 언어
// 런타임때 오류가 날떄 타입 추론이 가능
// 타입이 있으면 복잡한 코드를 짤수 있다.
// 인터프린터이기 떄문에 타입 추론 가능

let num =1; // ㅣlet  1일 들어갈떄 메모리 공간을 저장 
let double_num = 1.0;
let bool_data = true;
let string_data = "안녕";
let char_data = "가";
let back_data = '백틱 ${int num}';
let list_data = [1,2,3,4];
let object_data = {
    id: 1,
    username: "ssar"
}
console.log(num); // 타입 추론