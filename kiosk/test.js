let date = new Date();
let time = 20;
const body = document.body;
const randomNum = Math.random()*10+3;
console.log(randomNum);
let intervel = setInterval(() => {
    let timer = body.querySelector('.timer');
    timer.innerHTML = timeToString(time);
    time--;
    if(time<randomNum){
        clearInterval(intervel);
        timer.innerHTML = '';
        location.href = 'kiosk.html';
        alert('결제가 완료되었습니다.');
    }
}, 1000);

function timeToString(time){
    return time<10 ? `0${time}` : time;
}