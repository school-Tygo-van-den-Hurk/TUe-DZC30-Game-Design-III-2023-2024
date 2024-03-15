const express = require("express");

const app = express();
const cors = require('cors');
app.use(cors())

app.get("/", (request, response) => {
    response.send("Go to \"/api/coordinates\".");
});

app.get("/api/coordinates", (request, response) => {
    // TODO : Implement GPS COORDINATES USING: 
    // https://dzone.com/articles/read-gps-data-with-a-raspberry-pi-zero-w-and-nodej
    response.json({ lat:0.0, lon:0.0 });
});

app.listen(3001);
