import { repositoryURL, urlTygo, urlLeo, urlRuben, urlEryk, contactURL } from "../../assets/constants";
import "./about.css";

function About() {
    return (
        <>
            <h1> About </h1>
            <p>
                The website, game, and idea were designed, and created with love for Game Design III, a course from 
                TU/e by group 4. Consisting 
                of <a href={urlTygo} >Tygo van den Hurk</a>, <a href={urlLeo} > Leonidas Hadjiyiannis</a>, <a href={urlRuben} > Ruben Savelkouls</a>, and <a href={urlEryk} > Eryk Kiepuszewski</a>.
                The source code is available on <a href={repositoryURL}>GitHub</a> for your entertainment. If you have any
                questions, or concerns, you 
                can <a href={contactURL}>contact me</a>.
            </p>
        </>
    );
}


export default About;