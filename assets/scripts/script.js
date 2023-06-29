// let name = "Елена";
// alert(`Привет, ${158+2}!`); 

// let element = document.getElementById('el1');
// console.log(element);  // в консоле в инструменте разработчика есть отображение переменной el1, для поиска по id
// // //добавляем класс элементу
// element.classList.add("active");
// // удалить класс
// element.classList.remove('active');

let count = 0;

function clickButton() {
   // alert('Кнопка нажата');
   //element.classList.add("active");
    let element = document.getElementById("el1");
    if(count % 2 ==0) element.classList.add("active");
    else element.classList.remove('active');
    // count % 2 == 0 ? element.classList.add('active') : element.classList.remove("active");
    count++;
    //contains element.classList.contains("active");
    element.classList.toggle("active");
}

let btn = document.getElementById("btn");
// console.log(btn);
btn.addEventListener('click', clickButton );

function iceClick() {
    let element = document.getElementById("el2");
    if (count % 2 == 0) element.classList.add("ice")
    else element.classList.remove("ice")
    count++;
}

let ice = document.getElementsByClassName("ice");
console.log(ice)
ice[0].addEventListener("click",iceClick )