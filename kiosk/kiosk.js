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

const coffee_menu = menu_board.querySelectorAll('.coffee_menu');

coffee_menu.forEach(e=>{
    e.addEventListener('click',function(){
        const coffee_name = e.querySelector('.coffee_name');
        const coffee_price = e.querySelector('.coffee_price');
        console.log(coffee_name.getAttribute('value'));
        let name = coffee_name.getAttribute('value');
        let price = coffee_price.getAttribute('value');
        
        if(checkVaild(name,price)){
            addDiv(name,price);
        }
    })
})
function checkVaild(name,price){
    const bag = body.querySelectorAll('.bag_menu');
    for(let i=0 ; i<bag.length ; i++){
        let bag_name = bag[i].querySelector('.bag_name').getAttribute('value');
        let bag_price = bag[i].querySelector('.bag_price').getAttribute('value');
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

function addDiv(name,price){
    const newDiv = document.createElement('tr');
    newDiv.setAttribute('class','bag_menu');

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

    newDiv.append(newName);
    newDiv.append(newPrice);
    newDiv.append(newCnt);
    newDiv.append(newSum);
    menu_bag.append(newDiv);
}
