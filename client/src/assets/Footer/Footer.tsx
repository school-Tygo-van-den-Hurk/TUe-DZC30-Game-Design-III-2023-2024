import { contactURL, repositoryURL } from '../constants.ts';
import "./Footer.css";

function Footer() {
        
    const launchYear  = (2024);
    const currentYear = (new Date().getFullYear());
    const copyRightYear = (
        (currentYear <= launchYear)
        ? (`${launchYear}`)
        : (`${launchYear}-${currentYear}`)
    );

    return (
        <footer>
            <div id="footer-content">
                <div id="footer-img-container">
                    <img id="footer-img" src="/icon.responsive.svg" alt="A skull with swords"/>
                </div>
                <div id="footer-text">
                    <p>
                        Made with lots of love 
                        by <b> Group 4 </b> for <b>Game Design III {`${launchYear-1}-${launchYear}`}</b>.
                    </p>
                    <p id="copyright-notice">
                        Copyright &copy; {copyRightYear} &middot; <b> Group 4 </b> for <b> Game
                        Design III {`${launchYear-1}-${launchYear}`}</b>, a course from <b> TU/e </b> &middot; all
                        rights reserved.
                    </p>
                </div>
                <ul id="footer-links">
                    <li className="footer-link"><a href={repositoryURL}>GitHub</a></li>
                    <li className="footer-link"><a href={contactURL}>Contact</a></li>
                    <li className="footer-link"><a href="https://www.tue.nl/en/">TU/e</a></li>
                </ul>
            </div>
        </footer>
    );
}


export default Footer;