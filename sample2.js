function sample1(name,callback){
  
  var profile = "이름은" + name + " , 주소는 인천 입니다.";
  callback(profile);
}

sample1("응애" , function (addr){
  console.log("주소는 " + addr + " 입니다.");
});