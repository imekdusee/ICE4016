import express from "express";
import {selectSql, deleteSql} from "../database/sql";

const router = express.Router();

// /delete 페이지에서 '삭제 기능' 제목과 테이블 출력
/*-----------------------------------------------------------------
router.get('/', async (req, res) => {
    const department=await selectSql.getDepartment();

    res.render('delete',{
        title: "삭제 기능",
        department
    });
});
-----------------------------------------------------------------*/
router.get('/', async (req, res) => {
    const student=await selectSql.getStudent();

    res.render('delete',{
        title: "삭제 기능",
        student
    });
});


/*-----------------------------------------------------------------
router.post('/', async (req, res) => {
    console.log('delete router: ',req.body.delBtn); // 입력값들 출력

    const data = {
        Dnumber: req.body.delBtn,
    };

    await deleteSql.deleteDepartment(data);
    res.redirect('/delete');
})
-----------------------------------------------------------------*/
router.post('/', async (req, res) => {
    console.log('delete router: ',req.body.delBtn); // 입력값들 출력

    const data = {
        Snumber: req.body.delBtn,
    };

    await deleteSql.deleteStudent(data);
    res.redirect('/delete');
})

module.exports = router;