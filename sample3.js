function sum (x , y , callback){
  var num = x + y;
  callback(num);
};

sum(3,5,function(num){
  console.log("두 수의 합 : " + num + " 됐다 !")
});


sum(700,1300,(num)=>{
  console.log("두 수의 합 : " + num + " 됐다 !")
});


