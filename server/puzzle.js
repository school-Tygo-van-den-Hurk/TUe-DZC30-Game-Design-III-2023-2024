"use strict"; //! @Eryk do not touch this file unless absolutely needed.

const filePath = "./puzzle.json";

import print from "./Printer.js";
import fs from 'fs';

/** A class to combine all puzzle related variables and functions */
export default class Puzzle {

    /**
     * Removes any '<', or '>' symbols to prevent XSS.
     * 
     * @param { String } string the string to sanitise.
     * @returns a safe string.
     */
    static sanitise(string) {
        
        /* Checking pre-conditions */ {
            const preMessage = ("Puzzle.sanitise(string).pre violated, ");
            if (! string) throw Error(`${preMessage} string ${string} not truthy.`);
            if (! typeof string === "string") throw Error(`${preMessage} string ${string} not of type string.`);
        }

        const regularExpressionThatFindsHTML = (/<|>/g);
        const containsHTML = (regularExpressionThatFindsHTML.test(string));

        if (! containsHTML) return (string);
        else return (string.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
    }

    /** Stores the last time the puzzle was over written. */
    static lastChange = null;

    /** Stores the puzzle string. */
    static puzzle = null;

    /** Stores the solution to the puzzle. */
    static solution = null;

    /** The minimum value the key can have. */
    static MIN_VALUE_KEY = (0);
    /** The maximum value the key can have. */
    static MAX_VALUE_KEY = (999_999);
    /** Stores the key to change the puzzle. */
    static key = this.MAX_VALUE_KEY;

    static get() { 

        const lastChange = (
            (this.lastChange) ? ({
                year:    this.lastChange?.getFullYear(),
                month:   this.lastChange?.getMonth(),
                day:     this.lastChange?.getDay(),
                hour:    this.lastChange?.getHours(),
                minute:  this.lastChange?.getMinutes(),
                seconds: this.lastChange?.getSeconds(),
            }) : (undefined)
        );

        return ({
            puzzle:this.puzzle,
            lastChange:lastChange
        });
    }  

    /**
     * Sets the puzzle, and changes the last time it was solved.
     * @param {string} puzzle the text the puzzle will be.
     * @param {string} solution the text the solution to the puzzle will be.
     */
    static set(puzzle, solution, key, date) { 

        /* Checking pre-conditions */ {
            const preMessage = ("Puzzle.set(puzzle, solution, key).pre violated, ");
            
            // Puzzle
            if (! puzzle) throw Error(`${preMessage} puzzle ${puzzle} not truthy.`);
            if (! typeof puzzle === "string") throw Error(`${preMessage} puzzle ${puzzle} not of type string.`);
            
            // Solution
            if (! solution) throw Error(`${preMessage} solution ${solution} not truthy.`);
            if (! typeof solution === "string") throw Error(`${preMessage} solution ${solution} not of type string.`);
            
            // Key
            if (! key) throw Error(`${preMessage} key ${key} not truthy.`);
            if (! typeof key === "string") throw Error(`${preMessage} key ${key} not of type string.`);
            if (`${this.key}` !== key) throw Error(`${preMessage} key ${key} does not match real key.`);
        }

        this.puzzle = this.sanitise(puzzle); 
        this.solution = this.sanitise(solution); 
        this.lastChange = date | new Date();

        const newKey = ( this.MIN_VALUE_KEY + ( Math.random() * this.MAX_VALUE_KEY ) );
        this.key = ( Math.floor(newKey) );
        print(`\u001B[0mThe new key is: \u001B[33m${this.key}\u001B[0m.`);
        writeJSON(this.puzzle, this.solution, this.key, this.lastChange);
    }

    /**
     * Sets the variables to 
     * @param {*} puzzle 
     * @param {*} solution 
     * @param {*} key 
     * @param {*} date 
     */
    static initialise(puzzle, solution, key, date) {
        if (puzzle) {
            this.puzzle = puzzle;
            print(
                `\u001B[0m\u001B[32mSucces\u001B[0m updated ` +
                `\u001B[33mPuzzle.puzzle\u001B[0m to \u001B[33m${puzzle}\u001B[0m`
            );
        }

        if (solution) {
            this.solution = solution;
            print(
                `\u001B[0m\u001B[32mSucces\u001B[0m updated ` +
                `\u001B[33mPuzzle.solution\u001B[0m to \u001B[33m${solution}\u001B[0m`
            );
        }
        
        if (key) {
            this.key = key;
            print(
                `\u001B[0m\u001B[32mSucces\u001B[0m updated ` +
                `\u001B[33mPuzzle.key\u001B[0m to \u001B[33m${key}\u001B[0m`
            );
        }
        
        if (date) {
            this.lastChange = date;
            print(
                `\u001B[0m\u001B[32mSucces\u001B[0m updated `+
                `\u001B[33mPuzzle.lastChange\u001B[0m to \u001B[33m${date}\u001B[0m`
            );
        }
    }
} 

/**
 * Updates the json file that keeps track of what the puzzle was after a reboot.
 * @param { string } puzzle the puzzle itself
 * @param { string } solution the solution to the puzzle
 * @param { string } key the key to updating the puzzle
 * @param { string } date the date which the puzzle was last updated
 */
function writeJSON(puzzle, solution, key, date) {
    
    try {

        const time = (new Date(date).toISOString());//// .toISOString()
        const puzzleAsObject = ({
            puzzle:puzzle,
            solution:solution,
            key:key,
            date:time
        });

        fs.writeFileSync(filePath, JSON.stringify(puzzleAsObject), 'utf8', (error) => {
            if (error) print("\u001B[0m\u001B[31mError\u001B[0m updating puzzle file: "+error.message);
            else print("\u001B[0m\u001B[32mSucces\u001B[0m the "+filePath+" file has been updated successfully.");
        });

    } catch (error) {
        print("\u001B[0m\u001B[31mError\u001B[0m updating puzzle file: " + error.message);
        throw new Error("an Error occurred during the writing of the updating of the "+filePath+" file.");
    }
}

/**
 * reads json file that stores the puzzle, and sets the variables within the puzzle class accordingly
 */
function readJSON() {

    fs.readFile(filePath, "utf8", (error, data) => {
    
        print("EXE");

        if (error) {
            print("\u001B[0m\u001B[31mError\u001B[0m reading puzzle file:", error.message);
            return;
        }
      
        try {
    
            const puzzleSettings = JSON.parse(data);
            print(
                "\u001B[0m\u001B[32mSucces\u001B[0m the "+filePath+" file has been read and parsed successfully:", 
                puzzleSettings
            );
    
            if (puzzleSettings.puzzle 
                && puzzleSettings.solution
                && puzzleSettings.key
                && puzzleSettings.date
            ) Puzzle.initialise(
                puzzleSettings.puzzle, 
                puzzleSettings.solution, 
                puzzleSettings.key, 
                new Date(puzzleSettings.date)
            );
    
        } catch (error) {
            print("\u001B[0m\u001B[31mError\u001B[0m reading puzzle file:", error.message);
        }
    });    
}

readJSON();
