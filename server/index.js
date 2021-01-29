const express = require('express');

const app = express();
const PORT = 7000;

app.use(express.static(__dirname + '/../dist'));

app.listen(PORT, () => {console.log(`listening on port: ${PORT}`)});