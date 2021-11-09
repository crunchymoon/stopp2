//let myGreeting = setTimeout(function sayHi() {
//  alert('Hello, Mr. Universe!');
//}, 2000);

// With a function defined separately
//function sayHi(namee) {
//  alert('Hello Mr. Universe!'+namee);
//}
//
//let myGreeting = setTimeout(sayHi, 2000,"papa");
//clearTimeout(myGreeting);
//
//function sayHi(namee) {
//  alert('Hello Mr. Universe!'+namee);
//}
//
//let myGreeting = setInterval(sayHi, 1000,"papa");


//let currTime = function() { 
//    let date = new Date();
//    let time = date.toLocaleTimeString();
//    console.log(time);
//}
//
//let clock = setInterval(currTime,1000);
//clearInterval(clock);
let timer;
let i = 1;

const startBtn = document.querySelector('.sw__start');
startBtn.addEventListener('click',()=>{
    timer = setInterval(inc, 1000);
});

const stopBtn = document.querySelector('.sw__stop');
stopBtn.addEventListener('click',()=>{
    clearInterval(timer);
});

const resetBtn = document.querySelector('.sw__reset');
resetBtn.addEventListener('click',()=>{
    clearInterval(timer);
    let swVal = document.querySelector('.sw__time');
    swVal.innerHTML=0;
    i=0;
});


function inc() {
    let swTime = document.querySelector('.sw__time');
    swTime.innerHTML=i;
    if(i>=0){
        i++;
       }
}





//let testme = "Hajaj";
//let reg = /[A-Z]/g
//
//console.log(testme.match(reg));

//const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
//const regex = /[A-Z]/g;
//const found = paragraph.match(regex);
//
//console.log(found);

