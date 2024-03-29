"use strict"; //! @Eryk do not touch this file unless absolutely needed.

import getLocation from "./maps.js";
import express from "express";
import cors from "cors";
import print from "./Printer.js";
import Puzzle from "./puzzle.js";
import bodyParser from "body-parser";
import handleMessage from "./debugLiner.js";
import readline from 'readline';

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((request, _response, next) => {
    print(
        `Got a \u001B[0m\u001B[32m${request.method}\u001B[0m request ` +
        `from \u001B[0m\u001B[34m${request.ip}\u001B[0m ` +
        `for \u001B[0m\u001B[33m${request.path}\u001B[0m.`);
    next();
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
const httpStatusCodes = {
    ok:200,
    notFound:404,
    unauthorised:403,
    serverError:500,
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

app.get(documentation.paths[0].path,  (_request, response) => response.status(httpStatusCodes.ok).json(getLocation()) );
app.get(documentation.paths[1].path,  (_request, response) => response.status(httpStatusCodes.ok).json(Puzzle.get()) );
app.post(documentation.paths[1].path, (request, response) => {
    
    const { puzzle, solution, key, } = request.body;
    print("\u001B[0m[\u001B[34mReceived request\u001B[0m] to update the puzzle. " +
        `Where puzzle: \u001B[35m${puzzle}\u001B[0m, ` +
        `solution: \u001B[35m${solution}\u001B[0m, ` +
        `and with key: \u001B[35m${key}\u001B[0m. ` +
        `Now attempting to update puzzle.`
    );
    
    try { Puzzle.set(puzzle, solution, key); } catch (error) { 
        print("\u001B[0m[\u001B[31mRequest denied\u001B[0m] : puzzle not updated");
        if (error.message.includes("key")) response.status(httpStatusCodes.unauthorised);
        else response.status(httpStatusCodes.serverError);
        response.send(`An error occurred updating the puzzle. You can close this tab.`);
        return;
    }

    print("\u001B[0m[\u001B[32mRequest approved\u001B[0m] : puzzle updated");
    response.status(httpStatusCodes.ok).send(
        `puzzle updated successfully to puzzle: ${puzzle} with solution: ${solution}, using the key: ${key}. ` +
        `You can close this tab.`
    );
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

const port = (3001);
app.listen(port);
print(`\u001B[0mRunning on \u001B[33mhttp://localhost:${port}\u001B[0m.`)    

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

const rl = readline.createInterface({ input: process.stdin, /* output: process.stdout */ });
rl.on('line', (input) => handleMessage(input));
