const time = document.querySelector('#Calendar');
let dates = '2020-10-10';
time.addEventListener('change',e=>{
    const time2 = document.querySelector('#date');
    time2.value = e.target.value;
});
console.log(dates);

// let standard = new Date(0);
// let cup = new Date(0);
// cup.setSeconds(20);
// standard.setSeconds(1);
// const thread = setInterval(func,1000);
// let n = 0
// function func(){
//     cup.setSeconds(cup.getSeconds()-1);
//     let time = cup.toLocaleTimeString([], {minute: '2-digit',second : '2-digit'});
//     console.log(time);
//     if(standard > cup)
//         clearInterval(thread);
// }
//선택시간
//핸드폰 구입날짜 입력
//