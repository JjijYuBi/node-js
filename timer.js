// function timer(){
//     setTimeout(()=>{
//         console.log(1)
//         setTimeout(()=>{
//             console.log(2)
//             setTimeout(()=>{
//                 console.log(3)
//             },1000);
//         },1000);
//     },1000);    
// }


function timer(n){
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve(n)},1000);
    })
}

    timer(1)
    .then(n =>{
        console.log(n)
        return timer(2);
    })
    .then(n=>{
        console.log(n)
    });

