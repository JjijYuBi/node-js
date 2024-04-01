class Login{
    checkUser(id,pwd,onSuccess,onFail){
          
        if((id=="test"&&pwd=="1234")||
            id=="admin"&&pwd=="admin"){
            onSuccess(id);
        }else{
            onFail(new Error('에러 발생!'));
        }
    }

    getStatus(id,onSuccess,onFail){
        if(id=="admin"){
            onSuccess("관리자");
        }
        else{
            if(id==undefined){
                onFail(new Error("에러 발생!"));
            }else{
                onFail("일반유저");
            }
            
        }
        }
}

let login = new Login();

login.checkUser("admin","admin",(id)=>{
    console.log(id+"님 환영합니다!");
    login.getStatus(id,
        (status)=>{console.log(status+"입니다!")},
        (error)=>{console.log(error)})
},(error)=>{console.log(error)});


