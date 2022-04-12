const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes');
const linksRouter = require('./routes/links');
const bookingRouter = require('./routes/bookings')
const https = require('https');
const fs = require('fs');


// const router = express.Router();
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: true,
  credentials: true,
  method : ['get', 'post', 'options', 'delete']
}));

console.log("안뇽")

app.use('/', indexRouter); // req, res를 여기서 가져오네 indexRouter가 아니라 함수가 들어가야하는거네.
app.use('/links', linksRouter);
app.use('/bookings', bookingRouter)

const HTTPS_PORT =process.env.HTPPS_PORT || 4000;

let server = https
  .createServer(
    {
      key: fs.readFileSync(__dirname + '/key.pem', 'utf-8'),
      cert: fs.readFileSync(__dirname + '/cert.pem', 'utf-8'),
    },app)
  .listen(HTTPS_PORT,() => {
    console.log(`      🚀 Server is starting on ${HTTPS_PORT}`);
  })
module.exports = server;
