// 모듈 선언 (node_modules에서 불러옴)
import express from "express";
import logger from "morgan";
import path from "path";
import homeRouter from "../routes/home";
import updateRouter from "../routes/update";
import selectRouter from "../routes/select";

const PORT = 4567; // 포트 4567로 설정
const app = express(); // express()를 app으로 선언

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.set('views',path.join(__dirname,'../views'))
app.set('view engine','hbs')

app.use(logger("dev"));
app.use('/',homeRouter); // 홈화면
app.use('/update',updateRouter); 
app.use('/select',selectRouter);

app.listen(PORT,()=>{ // 서버 실행
    console.log(`Example app listening at http://localhost:${PORT}`)
})