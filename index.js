const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;
const data = require('./group-data');

app.use(bodyParser.json()).use(cors());

app.listen(
    PORT, 
    () => console.log(`I'm listening on http://localhost:${PORT}/`)
)

app.get("/members", (req, res) => {
    return res.json(data.AllMembers);
});

console.table(data.AllMembers);