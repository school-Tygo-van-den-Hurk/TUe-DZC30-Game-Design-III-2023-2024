"use strict"; //! @Eryk do not touch this file unless absolutely needed.

import getLocation from "./get-location.js";
import express from "express";
import cors from "cors";
import print from "./Printer.js";

const app = express();
app.use(cors())

const pathToCoordinate = ("/api/coordinates");
app.get("/", (_request, response) => { 
    print(`Got request from \"${requesterIP}\" for \"/\".`);
    response.send(`go to \"${pathToCoordinate}\" for the coordinates.`); 
});

app.get(pathToCoordinate, (request, response) => { 
    const requesterIP = (request.socket.remoteAddress);
    print(`Got request from \"${requesterIP}\" for \"${pathToCoordinate}\".`);
    response.json(getLocation()) 
});

const port = (3001);
app.listen(port);
print(`running on http://localhost:${port}`)    

