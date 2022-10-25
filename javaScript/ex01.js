// 웹 리소스
// 1) html : 문서의 뼈대를 구성
// 2) css : 문서를 꾸며줌
// 3) js : 동적처리를 가능하도록 해준다.

//입력 출력
console.log("dfdfd");

//출력 문서출력
// d
ocument.write("야야");

//경고창 출력
// alert("파일 저장");

// 입력
// let name = prompt("너의 이름은 ?"); 사용하지않는다.
// document.write(name);

// 변수
// const 상수 
// let 변수
// var 변수 <- 호이스팅의 문제로 더 이상 사용하지 않는다.
// ㄴ 초기화 되지 않는 값들이 참조 될수 있다.

const data = '문자열';
data = "다른값";
console.log(data);
let num = 1;
num = 10;

// 연산자
// 1) 대입 연산자

// 2) 산술 연산자

// 3) 비교 연산자 (완전 항등 연산자 === 를 사용해서 로직설계)
// ===   /  !==
// == 근사값도 true로 반환됨.

// 4) 논리 연산자

//이벤트 리스너  Event Listener

//1. 기본활용
//1.1)bubbling이 기본동작
//문서요소.addEventListener('이벤트명',e=>{
//  이벤트 처리문;
//});

/*
2.서번째 파라미터, 옵션에 대한 설명
//문서요소.addEventListener('이벤트명',e=>{
//  이벤트 처리문; bubling을 뒤집는다
//},{capture : true});
    
*stopPropagation()함수를 통해 이벤트 방지 기능

2.2 이벤트 한번만 실행시
//문서요소.addEventListener('이벤트명',e=>{
//
//},{once:true});
//


//*preventDefault()함수를 통해 ,기본 동작 이벤트를 방지기능(submit등)

2-3) passive 설정으로 기본설정방지를 무시할수 있다.
//문서요소.addEventListener('이벤트명',e=>{
//
//},{passive : true});




*/