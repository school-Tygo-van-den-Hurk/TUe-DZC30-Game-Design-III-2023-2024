"use strict"; //! @Eryk do not touch this file unless absolutely needed.

import getLocation from "./maps.js";
import express, { response } from "express";
import cors from "cors";
import print from "./Printer.js";
import Puzzle from "./puzzle.js";

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
const httpStatusCodes = {
    ok:200,
    notFound:404,
};

const documentation = {
    _:"This JSON responds contains any of the information on how to use this server",
    paths:[
        { path:"/maps",   use:"the coordinates"},
        { path:"/puzzle", use:"the puzzle text"}
    ]
};

const defaultResponse = (`Go to: ${documentation.paths.map((element) => `\"${element.path}\" for ${element.use}`).join(", ")}.`);
app.get("/", (_request, response) => response.status(httpStatusCodes.notFound).send(defaultResponse));

//// app.get("/favicon.ico", (_request, response) => response.sendFile(path.join(".", "")));

app.get(documentation.paths[0].path, (_request, response) => response.status(httpStatusCodes.ok).json(getLocation()) );
app.get(documentation.paths[1].path, (_request, response) => response.status(httpStatusCodes.ok).json(Puzzle.get()) );

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

const port = (3001);
app.listen(port);
print(`running on http://localhost:${port}`)    

