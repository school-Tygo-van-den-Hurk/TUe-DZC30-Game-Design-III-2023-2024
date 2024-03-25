// TODO : @Tygo create a 

import { contactURL } from "../../constants";
import "./puzzle.css";

function getPuzzle() {
    return ("this is the puzzle placeholder...");
}

/**
 * this function is used to return the HTML of the
 * @returns the main content of the puzzle page.
 */
function Puzzle() {
    const puzzle = (getPuzzle());
    return (
        <>
            <h1> the Puzzle </h1>
            <p>
                To find the treasure you'll need to solve the puzzle. The puzzle should tell you where the treasure 
                is exactly. When find the treasure, you'll have to hide the treasure again and to upload your own 
                puzzle. To make sure a puzzle can't be too hard, the maps has got a hint on where the treasure could
                be, by showing an area. This area will shrink over time.
            </p>
            <h2> Inappropriate Puzzles </h2>
            <p>
                any inappropriate content can be flagged 
                by <a href={contactURL}>contacting me</a>. If I deem it 
                inappropriate I will replace the puzzle with my own.
            </p>
            <pre><code> {puzzle} </code></pre>
        </>
    );
}

export default Puzzle;