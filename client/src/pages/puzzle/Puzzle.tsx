import useSWR from "swr";
import { contactURL } from "../../assets/constants";
import "./puzzle.css";
import axios from "axios";
import server from "../../assets/server";
import JsxParser from "react-jsx-parser";

/**
 * The basic text to display when visiting this page.
 * @returns the basic text to display when visiting this page.
 */
function getTextAndTitle() {
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
        </>
    );
}
/**
 * this function is used to return the HTML of the
 * @returns the main content of the puzzle page.
 */
function Puzzle() {

    const url:string = (`${server.getURL()}puzzle`);
    const fetcher:(url:string)=>Promise<any> = (url:string) => axios.get(url).then(res => res.data);
    const { data, error, isValidating } = useSWR(url, fetcher);

    if (error) { console.error(error);
        return (
        <>
            <div className="failed"> An error occurred loading the puzzle. </div>
            {getTextAndTitle()}
            <pre><code> Puzzle could not be loaded </code></pre>
        </>
    )};
    
    if (isValidating) return (
        <>
            <div className="loading"> Loading the Puzzle... </div>
            {getTextAndTitle()}
            <pre><code> Loading... </code></pre>
        </>
    );

    
    const puzzleSolvedText = (
        (data.lastChange)
        ? (<p>{`Last solved on: ${data.lastChange.year}-${data.lastChange.month}-${data.lastChange.day}.`}</p>)
        : (<></>)
    );

    const puzzleStatusText = (
        (data.puzzle)
        ? (<div className="success"> The puzzle loaded successfully. </div>)
        : (<div className="failed"> The puzzle is not defined. </div>)
    );
    
    return (
        <>
            {puzzleStatusText}
            {getTextAndTitle()}
            <pre><code>{(data.puzzle)?(data.puzzle):"not defined"}</code></pre>
            {puzzleSolvedText}

            <h2>Update Puzzle</h2>
            <p>
                When you've solved the puzzle, found the treasure, and made your own puzzle for other people to 
                solve, then you can submit it here. Make sure that the puzzle is appropriate. Your IP adres will
                be logged and handed over in case of none compliance. 
            </p>
            <p>
                To submit a new puzzle you must first find the treasure. To ensure that you've done that we ask 
                for the key. This key changes every time a new puzzle is submitted, and is displayed on the 
                screen mounted to the treasure.
            </p>
            <form action={url} method="post" target="_blank">
                <label>
                    <p>The new puzzle you would like to submit:</p>
                    <input name="puzzle" type="text" required />
                </label>
                <label>
                    <p>The solution to that puzzle:</p>
                    <input name="solution" type="text" required/>
                </label>
                <label>
                    <p>The key to access the server:</p>
                    <input name="key" type="number" min="100000" max="999999" required />
                </label>
                <button type="submit">Update</button>
            </form>
            <h3>Safety</h3>
            <p>
                For safety and security purposes, the following characters are not allowed: &apos;, &gt;, and &lt;. 
                This is because using these characters, one can do attacks 
                like <a href="https://owasp.org/www-community/attacks/xss/">XSS</a>, 
                or <a href="https://www.w3schools.com/sql/sql_injection.asp">SQLinjections</a>.
            </p>
        </>
    );
}

export default Puzzle;