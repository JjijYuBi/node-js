// setTimeout(()=>{console.log("test");} , 3000);

function sample1(callback,callback2){
  setTimeout(()=>{callback(callback2);},3000);
  console.log("첫번째!");

}
function sample2(callback){
  setTimeout(()=>{callback();},3000);
  console.log("두번째!");
}
function sample3(){

  console.log("세번째!");
  sample1(sample2,sample3);
}


sample1(sample2,sample3);