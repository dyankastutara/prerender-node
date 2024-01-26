const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use('/provinces', routes.provinces);

app.listen(3001, () => {
   console.log("App run on Port 3001");
})