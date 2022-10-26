
const body = document.body;

const main = body.querySelector('.main');
const shopping = body.querySelector('.shopping');
const menu_btn = body.querySelectorAll('li');
const menu_board = body.querySelector('.menu');
const menu_bag = body.querySelector('.bag');
shopping.setAttribute('style','dispaly:none');

main.addEventListener('click',function(){
    main.setAttribute('style','display : none'); 
    shopping.setAttribute('style','display : block');
});

menu_btn[0].addEventListener('click',function(){
    menu_board.innerHTML = '메뉴판 1';
});
menu_btn[1].addEventListener('click',function(){
    menu_board.innerHTML = '메뉴판 2';
});
menu_btn[2].addEventListener('click',function(){
    menu_board.innerHTML = '메뉴판 3';
});
menu_btn[3].addEventListener('click',function(){
    menu_board.innerHTML = '메뉴판 4';
});


let coffee = function(coffeName,price,url){
    this.coffeName = coffeName;
    this.price = price;
    this.url = url;
}
let coffeeMenu = [];
coffeeMenu.push(new coffee('아메리카노',1400,'img/coffee_sample.png'));
coffeeMenu.push(new coffee('아메리카노',2000,'img/coffee_sample.png'));
coffeeMenu.push(new coffee('아메리카노',3000,'img/coffee_sample.png'));
coffeeMenu.push(new coffee('아메리카노',4000,'img/coffee_sample.png'));

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
// const coffee_name = coffee_menu.querySelector('.coffee_name');
// const coffee_price = coffee_menu.querySelector('.coffee_price');
// coffee_name.getAttribute('value'); //1400
// coffee_name.getAttribute('value')

coffee_menu.forEach(e=>{
    e.addEventListener('click',function(){
        const coffee_name = e.querySelector('.coffee_name');
        const coffee_price = e.querySelector('.coffee_price');
        // console.log(coffee_name.getAttribute('value'));

        let name = coffee_name.getAttribute('value');
        let price = coffee_price.getAttribute('value');

        const newDiv = document.createElement('div');
        newDiv.setAttribute('class','bag_menu');

        const newName = document.createElement('div');
        newName.setAttribute('class','bag_name');
        newName.setAttribute('value',name);
        newName.innerHTML = name;

        const newPrice = document.createElement('div');
        newPrice.setAttribute('class','bag_price');
        newPrice.setAttribute('value',price);
        newPrice.innerHTML = price;

        newDiv.append(newName);
        newDiv.append(newPrice);
        menu_bag.append(newDiv);
    })
})

const bag = menu_bag.querySelector('.bag_menu');
console.log(bag);