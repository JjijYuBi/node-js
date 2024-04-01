function login(id,pwd,onSuccess,onFail){
    if(id == "test"){
        if(pwd == 1234){
            onSuccess(id);
            return;
        }else{
            onFail();
        }
    }else{
        onFail();
    }
    
   

}

function check(id){
    console.log(id + "님 환영합니다!");

}

function fail(){
    console.log("로그인 실패");
}

login("test",1234,check,fail);