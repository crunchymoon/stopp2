let first = new Promise((resolve, reject) => {
    let firstlog = "first";
    resolve(firstlog);
})

let second = new Promise((resolve, reject) => {
    let secondlog = "second";
    resolve(secondlog);
})

let caller = function(){
    first.then(function(firstResolved){
        console.log(firstResolved);
    })
    second.then(function(secondResolved){
        console.log(secondResolved);
    })
}
caller();