const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const prerender= require('prerender-node');

const app = express();

app.use(prerender.set('prerenderToken', process.env.PRERENDER_TOKEN))

app.listen(3001, () => {
   console.log("App run on Port 3001");
})