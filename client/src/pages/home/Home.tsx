// TODO : @Leo add some text to the home page saying what this is, and how to play, etc etc the more the better.
import "./home.css"

function Home() {
    return (
        <>
            <h1> Home </h1>
            <p>
                Welcome Pirates! Ready for an adventure?
            </p>
            <br /><br /><hr />
            <h2> Purpose & Trust </h2>
            <p> This very treasure hunt was constructed for the course Design for games & play III; playful interactions (DZC30). The aim was 
                to create a playful interaction relating to trust, which takes place on the TU/e campus. The element of trust can be viewed 
                from many different angles in game design and playful interactions, but in this treasure hunt there are 4 main elements 
                of trust that exists: <br />
                <br />
                1) Trusting that players will only hide the treasure on the TU/e campus.<br />
                2) Trusting that players will provide a sensible and logical clue. <br />
                3) Trusting that the pirates will put something back after taking the treasure. <br />
                4) <b>Trust in oneself</b>. Trusting that <b>YOU</b> the pirate can do this. <b>YOU</b> can find the treasure. <br />
            </p>
            <h3> Rules </h3>
            <p> 1) <b>Only</b> hide the treasure on the TU/e campus. <br />
                2) To take the treasure one must put something back (nothing is ever truly free). <br />
                3) Clues can be difficult to crack, but should be doable and sensible. <br />
                4) <b>Have Fun!</b>
                
            </p>
            <h4> Guide </h4>
            <p> The website is split into 5 different pages: Home, Puzzle, Map, Lore and About.<br />
                <br /> 
                Home: provides the purpose and rules, behind the treasure hunt. <br />
                Puzzle: provides the clue from your fellow pirate, of where the treasure currently lies. <br />
                Map: provides a map, with a radius showing the area where the treasure lies. <br />
                Lore: to provide a more fun and dynamic atmosphere, lore was created. <br />
                About: provides more information about the creators of the game.
            </p>
        </>
    );
}


export default Home;