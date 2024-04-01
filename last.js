function sum(num1,num2,onSum){
    var num3 = num1 + num2 ;
    onSum(num3);

}

sum(1,20,(num)=>{
    console.log((num * 280808).toLocaleString("ko-KR"));
})