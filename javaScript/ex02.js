//배열
//object Array

//선언 및 초기화

const arr = [] ; // = new Array();

//1.추가 push()
arr.push("apple");
arr.push("apple1");
arr.push("apple2");
arr.push("apple3");

//*자바 스크립트의 배열은 모든 자료형을 담을 수 있다.
//순환이 끝날때까지 중단이 안된다.
arr.forEach(e=>{
    console.log(e);
});

//전체 값을 출력
//ㄴ 인자값으로 즉시 실행 함수를 정의해주면 된다.
for(let o in arr){
    console.log(o);
};
//2.삭제 방법
//1) pop() 
//2) shift()  queue
//3) splice()<<<< 잘라내기 부분 잘라내기
// 지정한 인덱스 이후로 모두 잘라내기.
// 지정한 개수로부터 개수만큼
// const arrD = new Array();
const arr2D = new Array();
let cnt = 3;
const arrD = function arrInit(){
    for(let i=0 ; i<3 ; i++){
    arrD.push(cnt++);
    };
};
function arr2Dinit(){
    for(let i=0 ; i<4 ; i++){
        arr2D.push(arrD);
    }
}
arrInit();
arr2Dinit();
arr2D.forEach(e=>{
    e.forEach(j=>{
        console.log(j);
    });
});

