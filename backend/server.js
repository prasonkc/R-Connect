const express = require('express');
const cors = require('cors')

const app = express()
const PORT = 3000

app.use(cors());

app.listen(3000, () => {console.log("Listening on Port: " + PORT)})
// Route for development
app.get("/", (req, res) => {
    res.json({"Message": "Backend Connected"})
})