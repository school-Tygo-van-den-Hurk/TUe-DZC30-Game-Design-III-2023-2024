import { contactURL } from "../../assets/constants";
import "./Decommission.css";

export default function Decommission() {
    return (
        <>
            <h1> Decommission </h1>
            <p>
                This project got decommission as the course is over. 
                We did not want to have a raspberry pi,
                which batteries we'd have had to replace once a day,
                and could get stolen, out there on campus.
            </p>
            <p>
                We decided to leave the website up as an example to 
                others who will follow the course after us.
            </p>
            <p>
                If you have any questions, or concerns, you 
                can <a href={contactURL}>contact me</a>.
            </p>
        </>
    );
}
