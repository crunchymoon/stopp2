let msTimer;
let ms = 0;

let sTimer;
let s = 0;

let mTimer;
let m = 0;

let hTimer;
let h = 0;

const startBtn = document.querySelector('.sw__start');
startBtn.addEventListener('click', () => {
    msTimer = setInterval(msInc, 10);
});

const stopBtn = document.querySelector('.sw__stop');
stopBtn.addEventListener('click', () => {
    clearInterval(msTimer);
});

const resetBtn = document.querySelector('.sw__reset');
resetBtn.addEventListener('click', () => {
    clearInterval(msTimer);
    let swTimeS = document.querySelector('.sw__time .secs');
    swTimeS.innerHTML = "00";
    s = 0;
    let swVal = document.querySelector('.sw__time .msecs');
    swVal.innerHTML = "00";
    ms = 0;
    let swTimeM = document.querySelector('.sw__time .mins');
    swTimeM.innerHTML = "00";
    m = 0;
    let swTimeH = document.querySelector('.sw__time .hours');
    swTimeH.innerHTML = "00";
    h = 0;

});



function msInc() {

    function tester(regex, time, value) {
        if (regex.test(time.innerHTML) === false) {
            time.innerHTML = "0" + value;
        }
    }

    let regX = /^[\d]\d/;
    let swTimeMs = document.querySelector('.sw__time .msecs');
    swTimeMs.innerHTML = ms;
    let swTimeS = document.querySelector('.sw__time .secs');
    swTimeS.innerHTML = s;
    let swTimeM = document.querySelector('.sw__time .mins');
    swTimeM.innerHTML = m;
    let swTimeH = document.querySelector('.sw__time .hours');
    swTimeH.innerHTML = h;

    tester(regX, swTimeMs, ms);
    tester(regX, swTimeS, s);
    tester(regX, swTimeM, m);
    tester(regX, swTimeH, h);

    if (ms >= 0) {
        ms++;
        if (ms === 100) {
            if (s >= 0) {

                s++;
                if (s === 60) {
                    s = 0;
                    m++;
                    if (m === 60) {
                        m = 0;
                        h++;
                    }
                }
            }
            ms = 0;

        }
    }
}

function makeRequest(location){
    return new Promise((resolve,reject)=>{
        console.log(`Making request to ${location}`);
        if(location === 'Google'){
           resolve('Google says hi');
           } else {
               reject('We can only talk to Google');
           }
    });
}


//makeRequest('Google').then((resolve) => {
//    console.log('This is in the then ' + resolve); // Do this if the promise is true
//}).catch((reject) => {
//    console.log('This is in catch:' + reject);
//})

function processRequest(response){
    return new Promise((resolve,reject)=>{
        console.log(`Processing response`);
        resolve(`Extra information + ${response}`);
    })
}

//processRequest('asd').then((resolved)=>{
//    console.log(resolved);
//})

makeRequest('Google').then((response)=>{
    console.log("response received");
//    console.log(response);
    return processRequest(response);
})