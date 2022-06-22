const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const { PORT = 8080 } = process.env;
const data = require('./group-data');

app.use(bodyParser.json()).use(cors());

app.listen(
    PORT, 
    () => console.log(`I'm listening on http://localhost:${PORT}/`)
)

app.get("/", (req, res) => {
    return res.json(data);
});

