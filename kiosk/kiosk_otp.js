let coffee = function(coffeName,price,url){
    this.coffeName = coffeName;
    this.price = price;
    this.url = url;
}
let foodMenu = [];

function addCoffee(){
    foodMenu.push(new coffee('음료메뉴1',2000,'img/coffee_sample4.png'));
    foodMenu.push(new coffee('음료메뉴2',3000,'img/coffee_sample2.png'));
    foodMenu.push(new coffee('음료메뉴3',3200,'img/coffee_sample3.png'));
    foodMenu.push(new coffee('음료메뉴4',4300,'img/coffee_sample.png'));
    foodMenu.push(new coffee('음료메뉴5',1200,'img/coffee_sample3.png'));
    foodMenu.push(new coffee('음료메뉴6',4200,'img/coffee_sample4.png'));
    foodMenu.push(new coffee('음료메뉴7',1300,'img/coffee_sample2.png'));
    foodMenu.push(new coffee('음료메뉴8',1000,'img/coffee_sample2.png'));
    foodMenu.push(new coffee('음료메뉴9',1900,'img/coffee_sample2.png'));
    foodMenu.push(new coffee('음료메뉴10',2200,'img/coffee_sample2.png'));
    foodMenu.push(new coffee('음료메뉴11',5500,'img/coffee_sample2.png'));
    foodMenu.push(new coffee('음료메뉴12',3300,'img/coffee_sample2.png'));
    foodMenu.push(new coffee('음료메뉴13',1800,'img/coffee_sample2.png'));
    foodMenu.push(new coffee('음료메뉴14',1400,'img/coffee_sample2.png'));
}
function addNonCoffee(){
    foodMenu.push(new coffee('논음료메뉴1',2000,'img/coffee_sample4.png'));
    foodMenu.push(new coffee('논음료메뉴2',3000,'img/coffee_sample2.png'));
    foodMenu.push(new coffee('논음료메뉴3',3200,'img/coffee_sample3.png'));
    foodMenu.push(new coffee('논음료메뉴4',4300,'img/coffee_sample.png'));
    foodMenu.push(new coffee('논음료메뉴5',1200,'img/coffee_sample3.png'));
    foodMenu.push(new coffee('논음료메뉴6',4200,'img/coffee_sample4.png'));
    foodMenu.push(new coffee('논음료메뉴7',1300,'img/coffee_sample2.png'));
    foodMenu.push(new coffee('논음료메뉴8',1000,'img/coffee_sample2.png'));
    foodMenu.push(new coffee('논음료메뉴9',1900,'img/coffee_sample2.png'));
    foodMenu.push(new coffee('논음료메뉴10',2200,'img/coffee_sample2.png'));
    foodMenu.push(new coffee('논음료메뉴11',5500,'img/coffee_sample2.png'));
    foodMenu.push(new coffee('논음료메뉴12',3300,'img/coffee_sample2.png'));
    foodMenu.push(new coffee('논음료메뉴13',1800,'img/coffee_sample2.png'));
    foodMenu.push(new coffee('논음료메뉴14',1400,'img/coffee_sample2.png'));
}



const body = document.body;
const main_button = body.querySelector('.main');
const shopping_board = body.querySelector('.shopping');
const choice_kind = body.querySelectorAll('.menu_list');
const menuList = body.querySelectorAll('.menu');

//연습용 document
const menuNew = body.querySelector('.m1');
const menuCoffee = body.querySelector('.m2');
const menuNonCoffee = body.querySelector('.m3');
const menuDesert = body.querySelector('.m4');


//메인 버튼 누를경우 사라짐
main_button.addEventListener('click',disableButton);
//메인버튼 메서드
function disableButton(){
    main_button.classList.add('noShow');
    shopping_board.classList.add('show');
}

// //신메뉴
// menuNew.addEventListener('focus',function(){
//     choice_kind[0].classList.add('show');
//     menuList[0].classList.add('show');
// });
// menuNew.addEventListener('blur',function(){
//     choice_kind[0].classList.remove('show');
//     menuList[0].classList.remove('show');
// });
// //커피메뉴
// menuCoffee.addEventListener('focus',function(){
//     choice_kind[1].classList.add('show');
//     menuList[1].classList.add('show');
// });
// menuCoffee.addEventListener('blur',function(){
//     choice_kind[1].classList.remove('show');
//     menuList[1].classList.remove('show');
// });
// //디카페인
// menuNonCoffee.addEventListener('focus',function(){
//     choice_kind[2].classList.add('show');
//     menuList[2].classList.add('show');
// });
// menuNonCoffee.addEventListener('blur',function(){
//     choice_kind[2].classList.remove('show');
//     menuList[2].classList.remove('show');
// });
// //디저트
// menuDesert.addEventListener('focus',function(){
//     choice_kind[3].classList.add('show');
//     menuList[3].classList.add('show');
// });
// menuDesert.addEventListener('blur',function(){
//     choice_kind[3].classList.remove('show');
//     menuList[3].classList.remove('show');
// });
choice_kind.forEach(e=>{
    e.addEventListener('focus',function(){
        e.classList.add('show');
        menuList[`${e.value}`].classList.add('show');
    });
});
choice_kind.forEach(e=>{
    e.addEventListener('blur',function(){
        e.classList.remove('show');
        menuList[`${e.value}`].classList.remove('show');
    });
});

for(let i=0 ; i<menuList.length ; i++){
    const coffee_menu = menuList[i].querySelectorAll('.coffee_menu');
    coffee_menu.forEach(e=>{
        e.addEventListener('click',initMenu);
    })
    initMenu();

}

function initMenu(){
    const coffee_name = e.querySelector('.coffee_name');
    const coffee_price = e.querySelector('.coffee_price');
    let name = coffee_name.getAttribute('value');
    let price = coffee_price.getAttribute('value');
    if(checkVaild(name,price)){
        addDiv(name,price);
    }
}
//배열추가
function printMenus(arr,i){
    arr.forEach(e=>{
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
        menuList[`${i}`].append(newDiv);
    })
}
addCoffee();
printMenus(foodMenu,0);