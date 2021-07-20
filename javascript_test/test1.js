// 자바스크립트 = 인터프리터 언어
// 런타임때 오류가 날떄 타입 추론이 가능
// 타입이 있으면 복잡한 코드를 짤수 있다.
// 인터프린터이기 떄문에 타입 추론 가능

let num =1; // ㅣlet  1이 들어갈떄 메모리 공간을 저장 
let double_num = 1.0;
let bool_data = true;
let string_data = "안녕";
let char_data = "가";
let back_data = '백틱 ${int num}';
let list_data = [1,2,3,4,5];
let object_data = {
    id: 1,
    username: "ssar",
    ass :()=>{}
}
// console.log(num); // 타입 추론

for(let i=0; i<list_data.length; i++) { // 쓸 일이 없다.
    console.log(list_data[i]);
}

let newPrint = (value)=> { //앞에 타입을 적을 필여가 없다 익명 함수
console.log(value);
}

list_data.forEach(newPrint);


 // 1. 반복문 
 // 다른 메서드에 출력

let value =1;

 let newHello = (value,index)=>  value+100;

 let newHello2 = (value,index)=> {
     value = value*2;
     return value+100;
 }

 console.log(value);

let component_list = ["","","","",];

 // 2. 리턴이 있는 반복문 
let new_data = list_data.map((value,index)=> value+100); // 스트리밍  yeild 문법  
// 메모리에 4개의 공간이 생긴다.

console.log(new_data);