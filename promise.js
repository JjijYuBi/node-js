var obj = new Promise((resolve,reject)=>{
    setTimeout(() => {
        // resolve('로그인 성공!');
        reject(new Error("에러!"));
    }, 2000);
});

obj
  .then(v=>{console.log(v)})
  .catch(e=>{console.log(e)})
  .finally(()=>{console.log("무조건 실행해라 임마")});