"use strict"; //! @Eryk do not touch this file unless absolutely needed.

import getLocation from "./maps.js";
import express, { response } from "express";
import cors from "cors";
import print from "./Printer.js";
import { lastSolve, getPuzzle } from "./puzzle.js";

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

const app = express();
app.use(cors())
app.use((request, _response, next) => {
    
    const clientIP = (request.ip || request.connection.remoteAddress);
    const path = (request.path);

    print(`Got request from \"${clientIP}\" for \"${path}\".`);

    next();
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

const pathToCoordinate = ("/maps");
const pathToPuzzle = ("/puzzle");
const defaultResponse = (`Go to \"${pathToPuzzle}\", or \"${pathToCoordinate}\".`);

app.get("/",              (_request, response) => response.send(defaultResponse) );
app.get(pathToPuzzle,     (_request, response) => response.json(getPuzzle()) );
app.get(pathToCoordinate, (_request, response) => response.json(getLocation()) );

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

const port = (3001);
app.listen(port);
print(`running on http://localhost:${port}`)    

