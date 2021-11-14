// 모듈 선언 (node_modules에서 불러옴)
import express from "express";
import logger from "morgan";
import path from "path";
import loginRouter from "../routes/login";
import selectRouter from "../routes/select";
import deleteRouter from "../routes/delete";

const PORT = 4567; // 포트 4567로 설정
const app = express(); // express()를 app으로 선언

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.set('views',path.join(__dirname,'../views'))
app.set('view engine','hbs')

app.use(logger("dev"));
app.use('/',loginRouter); // 홈화면
app.use('/select',selectRouter);
app.use('/delete',deleteRouter); 

app.listen(PORT,()=>{ // 서버 실행
    console.log(`Example app listening at http://localhost:${PORT}`)
})