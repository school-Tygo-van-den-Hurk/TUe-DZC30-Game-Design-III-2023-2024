"use strict"; //! @Eryk do not touch this file unless absolutely needed.

import print from './Printer.js';
import Puzzle from './puzzle.js';

/**
 * Handels text typed in the terminal.
 * @param { string } message the message typed
 */
export default function handleMessage(message) { 
    const args = message.split(" ");
    switch(`${args.shift()}`.toLowerCase()) {
        case "p": 
        case "puzzle": puzzle(args); break;
        case "m": 
        case "map": map(args); break;
        case "e": 
        case "exit": exit(args); break;
        case "-h":
        case "--help": print(
            "\u001B[32mHELP\n\u001B[0m" +
            `using this tool you can inspect and interact with the server.\n`+
            `Examples of what you can do is, get or set variables.\n` +
            "  usage:\u001B[34m [command]\u001B[35m [subcommand]\u001B[33m [attributes...]\u001B[0m\n" +
            "Where\u001B[34m [command]\u001B[0m is one the these: \n" +
            " -\u001B[34m puzzle\u001B[0m,\u001B[34m   p\n\u001B[0m" +
            " -\u001B[34m map\u001B[0m,\u001B[34m      m\n\u001B[0m" + 
            " -\u001B[34m exit\u001B[0m,\u001B[34m     e\n\u001B[0m" + 
            "you can always type\u001B[34m --help\u001B[0m, or\u001B[34m [command]\u001B[35m --help\u001B[0m " +
            "for help, or more information!"); break;
        case "": break;
        default: print(
            "\u001B[0m\u001B[31mError\u001B[0m: incorrect usage, type\u001B[34m --help\u001B[0m to learn."
        );
    }
    
    // print(
    //     "In case some thing is wrong, you can contact me here:" + 
    //     "\u001B[34m https://redirects.tygo.van.den.hurk.dev/contact\u001B[0m"
    // );
}

function puzzle(args) {
  
    function get(args) {
        switch(`${args.shift()}`.toLowerCase()) {
            case "a":
            case "all": print(
                `All puzzle attributes:\n` +
                ` -\u001B[33m Puzzle.puzzle\u001B[0m:      ${
                    (Puzzle.puzzle)?(`\u001B[35m${Puzzle.puzzle}`):(`\u001B[31m${Puzzle.puzzle}`)
                }\u001B[0m,\n` + 
                ` -\u001B[33m Puzzle.solution\u001B[0m:    ${
                    (Puzzle.solution)?(`\u001B[35m${Puzzle.solution}`):(`\u001B[31m${Puzzle.solution}`)
                }\u001B[35m\u001B[0m,\n` +
                ` -\u001B[33m Puzzle.key\u001B[0m:         ${
                    (Puzzle.key)?(`\u001B[35m${Puzzle.key}`):(`\u001B[31m${Puzzle.key}`)
                }\u001B[35m\u001B[0m,\n` +
                ` -\u001B[33m Puzzle.lastChange\u001B[0m:  ${
                    (Puzzle.lastChange)?(`\u001B[35m${Puzzle.lastChange}`):(`\u001B[31m${Puzzle.lastChange}`)
                }\u001B[35m\u001B[0m.`); break;
            case "p":
            case "puzzle": print(
                `\u001B[33mPuzzle.puzzle\u001B[0m: ${
                    (Puzzle.puzzle)?(`\u001B[35m${Puzzle.puzzle}`):(`\u001B[31m${Puzzle.puzzle}`)
                }\u001B[0m`); break;
            case "s":
            case "solution": print(
                `\u001B[33mPuzzle.solution\u001B[0m: ${
                    (Puzzle.solution)?(`\u001B[35m${Puzzle.solution}`):(`\u001B[31m${Puzzle.solution}`)
                }\u001B[0m`); break;
            case "k":
            case "key": print(
                `\u001B[33mPuzzle.key\u001B[0m: ${
                    (Puzzle.key)?(`\u001B[35m${Puzzle.key}`):(`\u001B[31m${Puzzle.key}`)
                }\u001B[0m`); break;
            case "d":
            case "date": print(
                `\u001B[33mPuzzle.date\u001B[0m: ${
                    (Puzzle.lastChange)?(`\u001B[35m${Puzzle.lastChange}`):(`\u001B[31m${Puzzle.lastChange}`)
                }\u001B[0m`); break;
            case "-h": 
            case "--help": print(
                "\u001B[32mPUZZLE HELP\n\u001B[0m" +
                "The \u001B[34m puzzle\u001B[35m get\u001B[0m command allows you to sneak peak at the state of the puzzle object.\n" +
                "  usage:\u001B[34m puzzle\u001B[35m get\u001B[33m [attribute]\u001B[0m\n" +
                "Where\u001B[33m [attribute]\u001B[0m is one the puzzle's attributes. These attributes are supported: \n" +
                " -\u001B[33m all, a\n\u001B[0m" +
                " -\u001B[33m puzzle, p\n\u001B[0m" +
                " -\u001B[33m solution, s\n\u001B[0m" +
                " -\u001B[33m key, k\n\u001B[0m" +
                " -\u001B[33m date, d\n\u001B[0m" +
                "You can also type\u001B[34m puzzle\u001B[35m get\u001B[33m --help\u001B[0m for help!"); break;
            default: print(
                "\u001B[0m\u001B[31mError\u001B[0m: incorrect usage, type\u001B[34m puzzle\u001B[35m get\u001B[33m help\u001B[0m to learn."
            );
        }
    }
    
    function set(args) {

        function getValue(list) {
            var sentence = list.join(" ");
            if ((! sentence.startsWith("\""))  ||  (! sentence.endsWith("\"") )) { 
                print(
                    "\u001B[0m\u001B[31mError\u001B[0m: incorrect usage, " +
                    "the property must be enclosed with matching quotes (\"). " +
                    "Type\u001B[34m puzzle\u001B[35m set\u001B[33m --help\u001B[0m to learn."
                );
                return;}
            sentence = (sentence.substring(1, sentence.length - 1).trip());
            return (sentence);
        }

        // /* Testing if the attribute is given */ {
        //     if (! subcommand || subcommand === "" || subcommand === "undefined" || subcommand.startsWith("\"")) {
        //         print(
        //             "\u001B[0m\u001B[31mError\u001B[0m: incorrect usage, " +
        //             "type\u001B[34m puzzle\u001B[35m set\u001B[33m --help\u001B[0m to learn." +
        //             "an attribute is required."
        //         );
        //         return;
        //     }
        // }

        const subcommand = (`${args.shift()}`.toLowerCase());
        switch(subcommand) {
            case "puzzle": print(
                `\u001B[33m Puzzle.puzzle\u001B[0m: ${
                    (Puzzle.puzzle)?(`\u001B[35m${Puzzle.puzzle}`):(`\u001B[31m${Puzzle.puzzle}`)
                }\u001B[0m`); break;
            case "solution": print(
                `\u001B[33mPuzzle.solution\u001B[0m: ${
                    (Puzzle.solution)?(`\u001B[35m${Puzzle.solution}`):(`\u001B[31m${Puzzle.solution}`)
                }\u001B[0m`); break;
            case "key": print(
                `\u001B[33mPuzzle.key\u001B[0m: ${
                    (Puzzle.key)?(`\u001B[35m${Puzzle.key}`):(`\u001B[31m${Puzzle.key}`)
                }\u001B[0m`); break;
            case "date": print(
                `\u001B[33mPuzzle.date\u001B[0m: ${
                    (Puzzle.lastChange)?(`\u001B[35m${Puzzle.lastChange}`):(`\u001B[31m${Puzzle.lastChange}`)
                }\u001B[0m`); break;
            case "-h":
            case "--help": print(
                "\u001B[32mPUZZLE HELP\n\u001B[0m" +
                "The\u001B[34m puzzle\u001B[35m set\u001B[0m command allows you to set the state of the puzzle object.\n" +
                "  usage:\u001B[34m puzzle\u001B[35m set\u001B[33m [attribute]\u001B[36m \"some value\"\u001B[0m\n" +
                "Where\u001B[33m [attribute]\u001B[0m is one the puzzle's attributes. These attributes are supported: \n" +
                " -\u001B[33m puzzle, p\n\u001B[0m" +
                " -\u001B[33m solution, s\n\u001B[0m" +
                " -\u001B[33m key, k\n\u001B[0m" +
                " -\u001B[33m date, d\n\u001B[0m" +
                "the value must be enclosed in quotes (\"), or it will fail." +
                "You can type\u001B[34m puzzle\u001B[35m set\u001B[33m --help\u001B[0m for this help menu!"); break;
            default: print(
                "\u001B[0m\u001B[31mError\u001B[0m: incorrect usage, " +
                "type\u001B[34m puzzle\u001B[35m set\u001B[33m --help\u001B[0m to learn."
            );
        }
    }

    switch(`${args.shift()}`.toLowerCase()) {
        case "g":
        case "get": get(args); break;
        case "s":
        case "set": set(args); break;
        case "-h":
        case "--help": print(
            "\u001B[32mPUZZLE HELP\n\u001B[0m" +
            "The puzzle command allows you to sneak peak at the state of the puzzle object.\n" +
            "  usage:\u001B[34m puzzle\u001B[35m [subcommand]\u001B[33m [attribute]\u001B[0m\n" +
            "Where\u001B[35m [subcommand]\u001B[0m is what to do with the puzzle's attributes. These attributes are supported: \n" +
            " -\u001B[35m get\u001B[0m,\u001B[35m      g\n\u001B[0m" +
            " -\u001B[35m set\u001B[0m,\u001B[35m      s\n\u001B[0m" +
            "You can also type\u001B[34m puzzle\u001B[35m --help\u001B[0m for help!"); break;
        default: print(
            "\u001B[0m\u001B[31mError\u001B[0m: incorrect usage, type\u001B[34m puzzle\u001B[35m --help\u001B[0m to learn."
        );
    }
}

function map(args) {
    switch(`${args.shift()}`.toLowerCase()) {
        case "all":
            print(
                `All puzzle attributes:\n` +
                ` -\u001B[33m Puzzle.puzzle\u001B[0m:      ${
                    (Puzzle.puzzle)?(`\u001B[35m${Puzzle.puzzle}`):(`\u001B[31m${Puzzle.puzzle}`)
                }\u001B[0m,\n` + 
                ` -\u001B[33m Puzzle.solution\u001B[0m:    ${
                    (Puzzle.solution)?(`\u001B[35m${Puzzle.solution}`):(`\u001B[31m${Puzzle.solution}`)
                }\u001B[35m\u001B[0m,\n` +
                ` -\u001B[33m Puzzle.key\u001B[0m:         ${
                    (Puzzle.key)?(`\u001B[35m${Puzzle.key}`):(`\u001B[31m${Puzzle.key}`)
                }\u001B[35m\u001B[0m,\n` +
                ` -\u001B[33m Puzzle.lastChange\u001B[0m:  ${
                    (Puzzle.lastChange)?(`\u001B[35m${Puzzle.lastChange}`):(`\u001B[31m${Puzzle.lastChange}`)
                }\u001B[35m\u001B[0m.`);
            break;
        case "help": print(
            "\u001B[32mMAP HELP\n\u001B[0m" +
            "  The puzzle command allows you to sneak peak at the state of the puzzle object.\n" +
            "    usage:\u001B[34m puzzle\u001B[33m [attribute]\u001B[0m\n" +
            "  Where \u001B[33m [attribute]\u001B[0m is one the puzzle's attributes. These attributes are supported: \n" +
            "   -\u001B[33m puzzle\n\u001B[0m" +
            "   -\u001B[33m solution\n\u001B[0m" +
            "   -\u001B[33m key\n\u001B[0m" +
            "   -\u001B[33m date\n\u001B[0m" +
            "  You can also type\u001B[33m all\u001B[0m to get all the attributes."); break;
        default: print(
            "\u001B[0m\u001B[31mError\u001B[0m: incorrect usage, type\u001B[34m puzzle help\u001B[0m to learn."
        );
    }
}

function exit(args) {
    const next = (args.shift());
    if (next !== "-h" && next !== "--help") process.exit(next);
    print(
        "\u001B[32mEXIT HELP\n\u001B[0m" +
        "  The exit command allows you to stop the process.\n" +
        "    usage:\u001B[34m exit\u001B[33m [exit code]\u001B[0m\n" +
        "  Where \u001B[33m [exit code]\u001B[0m is a number."
    );
}