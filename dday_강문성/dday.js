const time = document.querySelector('#Calendar');
let time2 = document.querySelector('#date');

time.addEventListener('change',e=>{
    const time2 = document.querySelector('#date');
    time2.value = e.target.value;
});
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
time2.addEventListener('keydown',e=>{
    if(isDateCheck(e.key,time2.value)){
        let now = new Date();
        let future = new Date(time2.value);
        let diff = Math.floor((future-now)/1000);
        let interval = setInterval(function() {
            diff--;
            document.getElementById("times").innerHTML = times(diff);
            if (diff<0) {
              clearInterval(interval);
            }
        }, 1000);
    }
});
function isDateCheck(pressKey,date){
    return checkEnter(pressKey)&&checkValidDate(date);
}
function checkEnter(value){
    return value=='Enter';
}
function checkValidDate(value){
    let check = true;
    try {
        let checkValue = value.split('-');
        let yyyy = parseInt(checkValue[0],10);
        let MM = dateFormat(parseInt(checkValue[1],10));
        let dd = parseInt(checkValue[2],10);

        let pattern = /^(?=\d)(?:(?:31(?!.(?:0?[2469]|11))|(?:30|29)(?!.0?2)|29(?=.0?2.(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(?:\x20|$))|(?:2[0-8]|1\d|0?[1-9]))([-.\/])(?:1[012]|0?[1-9])\1(?:1[6-9]|[2-9]\d)?\d\d(?:(?=\x20\d)\x20|$))?(((0?[1-9]|1[012])(:[0-5]\d){0,2}(\x20[AP]M))|([01]\d|2[0-3])(:[0-5]\d){1,2})?$/;
        check = pattern.test(dd+'-'+MM+'-'+yyyy);
        if(value.length>10){
            check = false;
        }
    } catch(err){
        check = false;
    }
    return check;
}
function times(longSec){
    let day = Math.floor(longSec/(3600*24));
    longSec%=(3600*24);
    let hours = Math.floor(longSec/3600);
    longSec%=3600;
    let minutes = Math.floor(longSec/60);
    longSec%=60;
    let seconds = Math.floor(longSec);
    return `${day}일 ${hours}시 ${minutes}분 ${seconds} 초 남았습니다.`;
}

function dateFormat(date){
    return (date<10) ? `0${date}` : date;
}

const nowTime = new Date();
let nowDate = nowTime.toISOString().split("T")[0];
let nowTimes = nowTime.toTimeString().split(" ")[0];
document.querySelector(".now_date").innerHTML = nowDate;
document.querySelector(".now_time").innerHTML = nowTimes;