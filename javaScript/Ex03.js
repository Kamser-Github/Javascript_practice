//함수
//ㄴ 선언식과 표현식



//1) 선언식
//function 함수명(파라미터){실행문}
//모든 함수는 return이 존재
//return이 없는경우 생략가능

//1-1) return x , parameter x
function hello(){
    console.log("hello world");
}
//1-2) return x , parameter o
function hello(name){
    console.log(`hello ${name}`);
}
//1-3) return o , parameter x
function StringHello(){
    return 'hello';
}
//1-4) return o , parameter o
function StringHello(name){
    return `hello ${name}`;
}
function fun4(name){
    return `name:${name}`;
}

//2) 표현식
//2-1 익명함수
//2-2 화살표함수
//2-3 즉시 싷==[]

//자료형  J SON  오브젝트 표현하는 방법의 로테이션
