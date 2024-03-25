// TODO : @Leo add some text to the home page saying what this is, and how to play, etc etc the more the better.
import "./home.css"

function Home() {
    return (
        <>
            <h1> Home </h1>
            <p>
                Welcome Pirates! Ready for an adventure?
            </p>
            
            <h2> Purpose & Trust </h2>
            <p> This very treasure hunt was constructed for the course Design for games & play III; 
                playful interactions (DZC30). The aim was to create a playful interaction relating 
                to trust, which takes place on the TU/e campus. The element of trust can be viewed 
                from many different angles in game design and playful interactions, but in this 
                treasure hunt there are 4 main elements of trust that exists
            </p>
            <ol>
                <li>Trusting that players will only hide the treasure on the TU/e campus.</li>
                <li>Trusting that players will provide a sensible and logical clue. </li>
                <li>Trusting that the pirates will put something back after taking the treasure.</li>
                <li> 
                    <b>Trust in oneself</b>. Trusting that <b>YOU</b> the pirate can do this. <b>YOU</b> 
                    can find the treasure. 
                </li>
            </ol>

            <h3> Rules </h3>
            <ol>
                <li><b>Only</b> hide the treasure on the TU/e campus.</li>
                <li>To take the treasure one must put something back (nothing is ever truly free).</li>
                <li>Clues can be difficult to crack, but should be doable and sensible.</li>
                <li><b>Have Fun!</b></li>
            </ol>

            <h4> Guide </h4>
            <p> The website is split into 5 different pages: Home, Puzzle, Map, Lore and About.
                Home: provides the purpose and rules, behind the treasure hunt. 
                Puzzle: provides the clue from your fellow pirate, of where the treasure currently lies.
                Map: provides a map, with a radius showing the area where the treasure lies. 
                Lore: to provide a more fun and dynamic atmosphere, lore was created. 
                About: provides more information about the creators of the game.
            </p>
        </>
    );
}


export default Home;