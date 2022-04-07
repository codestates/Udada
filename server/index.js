const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const indexRouter = require('./routes') // 홈 화면의 라우터를 만듦.

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: true,
    credentials: true,
    method : ['get', 'post', 'options', 'delete']
}));

app.use('/', indexRouter);

module.exports = app;
