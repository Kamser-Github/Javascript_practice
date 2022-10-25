/*

1.prompt() 창을 통해 회원가입 정보입력
이름 , 나이 , 성별 , 가죽구성원 )
2.입력받은 정보를 활용하여 Person 오브젝트 생성
3.users 배열에 push
4.html 문서상에, 버튼 이하로 
새로추가된 회원정보 나열
*/

const users  = []; //Person Object 담는 배열

function data(name,age,gender,family){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.family = family;

    this.info = function(){
        return `이름:${this.name},나이:${this.age},성별:${this.gender},가족:${this.family}`;
    }
}

function join(){
    //회원가입 정보 입력
    let name = prompt('이름을 입력하세요.');
    let age = prompt('나이을 입력하세요.');
    let gender = prompt('성별을 입력하세요.');
    let family = prompt('가족구성원을 콤바로 구분하여 입력하세요.');

    users.push(new data(name,age,gender,family))
    document.getElementById('info').innerHTML='';
    users.forEach(e=>{
        document.getElementById('info').innerHTML+=`${e.info()}<br>`;
        console.log(`${e.family}`);
    });
}

