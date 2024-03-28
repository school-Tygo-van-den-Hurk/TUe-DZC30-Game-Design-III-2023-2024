/** A class to combine all puzzle related variables and functions */
export default class Puzzle {
    
    static lastChange = null; //// new Date();
    static puzzle = ("No puzzle set... Please <a href=\"https://redirects.tygo.van.den.hurk.dev/contact\"> contact me </a>.");

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

    /**
     * Sets the puzzle, and changes the last time it was solved.
     * @param {string} string the text the puzzle will be.
     */
    static set(string) { 
        
        /* Checking pre-conditions */ {
            const preMessage = ("Puzzle.sanitise(string).pre violated, ");
            if (! string) throw Error(`${preMessage} string ${string} not truthy.`);
            if (! typeof string === "string") throw Error(`${preMessage} string ${string} not of type string.`);
        }

        this.lastChange = new Date();
        this.puzzle = this.sanitise(string); 
    }
} 