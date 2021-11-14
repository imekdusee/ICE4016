// 모듈 선언
import express from "express";
import {selectSql} from "../database/sql";

const router = express.Router();

// /select 페이지
/*-----------------------------------------------------------------
router.get('/', async function(req, res){ // 여기서의 /는 /select임
    const department = await selectSql.getDepartment();

    res.render('select',{
        title: 'IT 공대',
        department
    });
});
-----------------------------------------------------------------*/
router.get('/', async function(req, res){ // 여기서의 /는 /select임
    const student = await selectSql.getStudent();

    res.render('select',{
        title: '학생 정보',
        student
    });
});

module.exports = router;