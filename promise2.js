class Login{
    checkUser(id,pwd){
        return new Promise((resolve,reject)=>{
            if((id=="test"&&pwd=="1234")||
            id=="admin"&&pwd=="admin"){
            resolve(id);
        }else{
            reject(new Error('에러 발생!'));
        }    
        });
    }
    getStatus(id){
        return new Promise((resolve,reject)=>{

            if(id=="admin"){
                resolve("어드민");
            }else{
                if(id==undefined){
                    reject(new Error("에러 발생!"));
                }
                reject("일반유저");
            }
        })
        
    }
}

var login = new Login;
login
.checkUser("test","1234")
.then(id =>{
    console.log(id+"님 환영합니다!")
    return login.getStatus(id);
})
.then(status=>{console.log(status+"입니다!")})
.catch(error =>console.log(error));
