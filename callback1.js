// console.log("1");
// setTimeout(()=>{console.log("2");},2000);
// console.log("3");

function sum(num1 , num2 , callback){
    var num3 = num1 + num2 ;
    callback(num3);
}

function printing(num){
    console.log("두 수의 합은 " + num + "입니다");
}

sum(3,4,printing);