const express = require("express");
const app = express();

app.get("/", (req, res) => {
 res.send({ 2: "there"})
})

const PORT = process.env.PORT || 5000
app.listen(PORT)