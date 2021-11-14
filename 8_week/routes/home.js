// 삽입 기능 구현
import express from "express";
import {insertSql} from "../database/sql";
//import {insertSql,selectSql} from "../database/sql";

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('home'); // home.hbs 파일 render
});

router.post('/',(req, res)=>{
    const vars = req.body; // 데이터 저장
    const var_lenth = Object.keys(req.body).length;

    if(var_lenth > 4){ // 데이터 개수로 employee department 구분
        const data = {
            Fname: vars.fname,
            Minit: vars.minit,
            Lname: vars.lname,
            Ssn: vars.ssn,
            Bdate: vars.bdate,
            Address: vars.address,
            Sex: vars.sex,
            Salary: vars.salary,
            Super_ssn: vars.super_ssn,
            Dno: vars.dno
        };

        insertSql.setEmployee(data); // 데이터 넘겨줌
    } else{
        const data = {
            Dname: vars.dname,
            Dnumber: vars.dnumber,
            Mgr_ssn: vars.mgr_ssn,
            Mgr_start_date: vars.mgr_start_date
        };

        insertSql.setDepartment(data); // 데이터 넘겨줌
    }
    res.redirect('/'); // 입력한 후 홈화면으로 이동 (새로고침)
})

module.exports = router;