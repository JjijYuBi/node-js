function login(id,pwd,onSuccess,onFail){
    if(id == "test"){
        if(pwd == 1234){
            onSuccess(id);
        }else{
            console.log("비밀번호를 확인해 주세요");
        }
    }else{
        onFail();
    }
}

login("test","1234",
id=>
    console.log(id + "님 환영합니다.")
,
()=>
    console.log("로그인 실패")

);






