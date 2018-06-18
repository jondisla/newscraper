const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send('The app works!');
})

app.listen(PORT);
console.log("Listening port: " + PORT);