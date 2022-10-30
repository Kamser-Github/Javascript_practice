const body = document.body;
const main = body.querySelector('.main');
const menu_board = body.querySelector('.menu');
const shopping = body.querySelector('.shopping');
const menu_btn = body.querySelectorAll('li');
const menu_bag = body.querySelector('.bag');

main.addEventListener('click',function(){
    main.setAttribute('style','display : none'); 
    shopping.setAttribute('style','display : block');
});

shopping.setAttribute('style','dispaly:none');
let check = true;

let coffee = function(coffeName,price,url){
    this.coffeName = coffeName;
    this.price = price;
    this.url = url;
}

let coffeeMenu = [];
coffeeMenu.push(new coffee('음료메뉴1',2000,'img/coffee_sample4.png'));
coffeeMenu.push(new coffee('음료메뉴2',3000,'img/coffee_sample2.png'));
coffeeMenu.push(new coffee('음료메뉴3',3200,'img/coffee_sample3.png'));
coffeeMenu.push(new coffee('음료메뉴4',4300,'img/coffee_sample.png'));
coffeeMenu.push(new coffee('음료메뉴5',1200,'img/coffee_sample3.png'));
coffeeMenu.push(new coffee('음료메뉴6',4200,'img/coffee_sample4.png'));
coffeeMenu.push(new coffee('음료메뉴7',1300,'img/coffee_sample2.png'));
coffeeMenu.push(new coffee('음료메뉴8',1000,'img/coffee_sample2.png'));
coffeeMenu.push(new coffee('음료메뉴9',1900,'img/coffee_sample2.png'));
coffeeMenu.push(new coffee('음료메뉴10',2200,'img/coffee_sample2.png'));
coffeeMenu.push(new coffee('음료메뉴11',5500,'img/coffee_sample2.png'));
coffeeMenu.push(new coffee('음료메뉴12',3300,'img/coffee_sample2.png'));
coffeeMenu.push(new coffee('음료메뉴13',1800,'img/coffee_sample2.png'));
coffeeMenu.push(new coffee('음료메뉴14',1400,'img/coffee_sample2.png'));

menu_board.addEventListener('click', function(e){
    const coffee_name = e.querySelector('.coffee_name');
    const coffee_price = e.querySelector('.coffee_price');
    // console.log(coffee_name.getAttribute('value'));
    let name = coffee_name.getAttribute('value');
    let price = coffee_price.getAttribute('value');
    
    if(checkVaild(name,price)){
        addDiv(name,price);
    }
});

coffeeMenu.forEach(e=>{
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class','coffee_menu');
    const newInfo = document.createElement('div');
    newInfo.setAttribute('class','coffee_info');
    const newName = document.createElement('div');
    newName.setAttribute('class','coffee_name');
    newName.setAttribute('value',e.coffeName);
    newName.innerText=e.coffeName;
    const newPrice = document.createElement('div');
    newPrice.setAttribute('class','coffee_price');
    newPrice.setAttribute('value',e.price);
    newPrice.innerText=e.price;
    const newImg = document.createElement('img');
    newImg.setAttribute('src',e.url);
    newDiv.append(newImg);
    newInfo.append(newName);
    newInfo.append(newPrice);
    newDiv.append(newInfo);
    menu_board.append(newDiv);
});

// const coffee_menu = menu_board.querySelectorAll('.coffee_menu');
// coffee_menu.forEach(e=>{
//     e.addEventListener('click', function(){
//         const coffee_name = e.querySelector('.coffee_name');
//         const coffee_price = e.querySelector('.coffee_price');
//         // console.log(coffee_name.getAttribute('value'));
//         let name = coffee_name.getAttribute('value');
//         let price = coffee_price.getAttribute('value');
        
//         if(checkVaild(name,price)){
//             addDiv(name,price);
//         }
//     });
// })
// 추가 수정할 부분
// function addBag(event){
//     const coffee_name = event.querySelector('.coffee_name');
//     const coffee_price = event.querySelector('.coffee_price');
//     // console.log(coffee_name.getAttribute('value'));
//     let name = coffee_name.getAttribute('value');
//     let price = coffee_price.getAttribute('value');
    
//     if(checkVaild(name,price)){
//         addDiv(name,price);
//     }
// }


function checkVaild(name,price){
    const bag = body.querySelectorAll('.bag_menu');
    for(let i=0 ; i<bag.length ; i++){
        let bag_name = index_name(bag,i);
        let bag_price = index_price(bag,i);
        if(name===bag_name&&price===bag_price){
            let bag_cnt = bag[i].querySelector('.bag_cnt');
            let nowCnt = parseInt(bag_cnt.getAttribute('value'));
            bag_cnt.setAttribute('value',nowCnt+1);
            bag_cnt.innerHTML=bag_cnt.getAttribute('value');

            let bag_sum = bag[i].querySelector('.bag_sum');
            let nowSum = parseInt(bag_sum.getAttribute('value'));
            let bag_priceInt = parseInt(bag_price);
            bag_sum.setAttribute('value',nowSum+bag_priceInt);
            bag_sum.innerHTML=bag_sum.getAttribute('value');
            return false;
        }
    }
    return true;
}
function index_name(element,index){
    return element[index].querySelector('.bag_name').getAttribute('value');
}
function index_price(element,index){
    return element[index].querySelector('.bag_price').getAttribute('value');
}

function addDiv(name,price){
    const newDiv = document.createElement('tr');
    newDiv.setAttribute('class','bag_menu');
    newDiv.setAttribute('id',name);

    const newName = document.createElement('th');
    newName.setAttribute('class','bag_name');
    newName.setAttribute('value',name);
    newName.innerHTML = name;

    const newPrice = document.createElement('th');
    newPrice.setAttribute('class','bag_price');
    newPrice.setAttribute('value',price);
    newPrice.innerHTML = price;

    const newCnt = document.createElement('th');
    newCnt.setAttribute('class','bag_cnt');
    newCnt.setAttribute('value',1);
    newCnt.innerHTML = 1;

    const newSum = document.createElement('th');
    newSum.setAttribute('class','bag_sum');
    newSum.setAttribute('value',price);
    newSum.innerHTML = price;

    const newDelete = document.createElement('th');
    newDelete.setAttribute('class','bag_delete');
    newDelete.setAttribute('type','button');
    newDelete.addEventListener('click',function(){
        let deleteTarget = document.querySelector(`#${name}`);
        deleteTarget.remove();
    });
    newDelete.innerHTML='X';

    newDiv.append(newName);
    newDiv.append(newPrice);
    newDiv.append(newCnt);
    newDiv.append(newSum);
    newDiv.append(newDelete);

    newDiv.addEventListener('click', e=>{
// 클릭하면 테이블에 정보가 갈수 있게
    });
    menu_bag.append(newDiv);
}
let buy_button = body.querySelectorAll('.buy_button');
buy_button.forEach(e=>{
    e.addEventListener('click',addMenu);
});
/*
forEach(e=>{
    e.addEventListener('click',addMenu(e))
    console.log('확인');
});

*/
function addMenu(e){
    if(!existsCoffee(e)){
        alert('주문하실 메뉴가 없습니다.');
        return;
    }
    const windowFeatures = "popup=true";
    window.open('http://182.222.48.247:5501/kiosk/test.html',windowFeatures);
}
function existsCoffee(){    
    let name = body.querySelector('.bag_name');
    return name!==null;
}
function deleteAllMenu(){
    let deleteAll = document.querySelectorAll('.bag_menu');
    deleteAll.forEach(e=>{
        e.remove(); 
    });
}
