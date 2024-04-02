import "./lore.css";

function Lore() {
    return (
        <>
            <h1> The Lore </h1>
            <p>
            Once upon a time this campus was ruled by a mighty pirate by the name of Captain Gabriele Ferri. 
            After decades of ruling the seven streets of the TU/e campus, he passed away because he accidentally drank teacher’s poison which 
            he mistook for rum. Legend says that his biggest treasure was never found. Some smaller pirates started to practice the 
            art of treasure hunting, so they developed a box. They made an agreement under the TU/e pirate king that they would help 
            each other to become the best treasure hunting campus in the whole world. The map to Captain Gabriele Ferri's treasure is of 
            unknown nature, so the box may be found in various different ways, through treasure maps, through poetry or perhaps even through art.
            Many wonder if the treasure can even be found by us mere mortals, but one thing is for certain, if it can be found, the box 
            will provide the experience required to complete this remarkable quest.
            </p>
            <div style={{ maxWidth:"15em", width:"70%", backgroundColor:"var(--layer-0)" }} 
                className="image-container" >
                <img src="/pirate-captain.jpeg" alt="a pirate wearing a hat" />
            </div>
        </>
    );
}


export default Lore;