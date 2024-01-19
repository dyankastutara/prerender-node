const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.listen(3001, () => {
   console.log("App run on Port 3001")
})