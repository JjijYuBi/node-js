function timer(n){
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve(n)},1000);
    })
}

async function test(){
    for(var i = 1 ; i<=5 ; i++){
        let num = await timer(i);
        console.log(num);
    }
}
console.log("시작");
test().then(()=>{console.log("끝!")});

// async function fuckyou(){
//    console.log("시작!");
//    await test();
//    console.log("끝!");
// }

// fuckyou();
