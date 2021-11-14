// 삽입 기능 구현
import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('login');
});

router.post('/',async(req, res)=>{
    const vars = req.body; // 데이터 저장
    const users = await selectSql.getUsers(); // 데이터베이스에서 user 정보 가져옴
    let whoAmI=''; // 변수 설정
    let checklogin = false; // 로그인 여부 판단

    // 입력값과 user 값 비교
    users.map((user)=>{
        console.log(user.Id);
        if(vars.id===user.Id && vars.password===user.Password){
            console.log('login success!');
            checklogin = true; // 로그인 성공 확인

            if(vars.id==='admin'){ // 로그인한 사람이 admin 인지 users 인지 확인
                whoAmI='admin';
            } else{
                whoAmI='user';
            }
        }
    })

    console.log('whoAmI:',whoAmI); // 결과 확인

    if(checklogin && whoAmI==='admin') {
        res.redirect('/delete'); // admin이 로그인하면 delete 페이지로 이동
    } else if (checklogin && whoAmI==='user') {
        res.redirect('/select'); // users가 로그인하면 select 페이지로 이동
    } else {
        res.send("<script> alert('로그인 실패'); location.href='/';</script>") // 나머지 경우에는 '로그인 실패' 팝업창 생성
    }
})

module.exports = router;