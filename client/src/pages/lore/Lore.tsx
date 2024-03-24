// TODO : @Leo add some lore.

import "./lore.css";

function Lore() {
    return (
        <>
            <h1> the Lore</h1>
            <p>
                Some text about the lore behind Pirates of the Caribbean: at Campus End.
            </p>
            <div style={{ maxWidth:"15em", width:"70%", backgroundColor:"var(--layer-0)" }} 
                className="image-container" >
                <img src="/pirate-captain.jpeg" alt="a pirate wearing a hat" />
            </div>
        </>
    );
}


export default Lore;