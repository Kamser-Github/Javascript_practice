const map = document.body.querySelector('.map');
const mark = [];
const SIZE = 3;
let turn = 1;
for(let i=0 ; i<SIZE ; i++){
    const row = [];
    const mapRow = document.createElement('div');
    mapRow.setAttribute('class','row');
    for(let j=0 ; j<SIZE ; j++){
        row.push(0);
        const box = document.createElement('div');
        box.setAttribute('class','box');
        box.setAttribute('id',`y${i}x${j}`);
        box.addEventListener('click',e=>{
            const yx = box.getAttribute('id');//y0x0;
            const y = parseInt(yx.charAt(1));
            const x = parseInt(yx.charAt(3));

            if(isCheck(mark[y][x])){
                markingMap(box,turn);
                mark[y][x]=turn;
                checkWin();
                turn = turn===1? 2 : 1;
            }
        });
        mapRow.append(box);
    }
    mark.push(row);
    map.append(mapRow);
}

function markingMap(element,turn){
    let color = turn==1?`rgb(154, 22, 99)`:`rgb(224, 20, 76)`;
    element.setAttribute('style',`background-color :${color}`)
}
function isCheck(num){
    return num === 0;
}
function checkWin(){
    row();
    column();
    cross();
    reverseCross();
}
function alertWinner(bingoCnt){
    if(bingoCnt===SIZE){
        console.log('게임종료');
        map.innerHTML= `<div id="win">p${turn} WIN!!!!</div>`;
    }
}
function reverseCross(){
    bingoCnt=0;
    for(let i=0 ; i<SIZE ; i++){
        if(turn===mark[i][SIZE-1-i]){
            bingoCnt++;
        }
    }
    alertWinner(bingoCnt);
}
function cross(){
    bingoCnt=0;
    for(let i=0 ; i<SIZE ; i++){
        if(turn===mark[i][i]){
            bingoCnt++;
        }
    }
    alertWinner(bingoCnt);
}
function column(){
    bingoCnt=0;
    for(let i=0 ; i<SIZE ; i++){
        for(let j=0 ; j<SIZE ; j++){
            if(turn===mark[j][i]){
                bingoCnt++;
            }
        }
        alertWinner(bingoCnt);
        bingoCnt=0;
    }
}
function row(){
    let bingoCnt = 0;
    for(let i=0 ; i<SIZE ; i++){
        bingoCnt=0;
        for(let j=0 ; j<SIZE ; j++){
            if(turn===mark[i][j]){
                bingoCnt++;
            }
        }
        alertWinner(bingoCnt);
    }
}