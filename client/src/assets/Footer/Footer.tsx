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
                    <p id="copyright-notice">
                        Copyright &copy; {copyRightYear} &middot; Group 4 for Game Design III, 
                        a course from TU/e &middot; all rights reserved.
                    </p>
                    <p>
                        made with &lt;3
                    </p>
                </div>
                <ul id="footer-links">
                    <li className="footer-link"><a href={repositoryURL}>GitHub</a></li>
                    <li className="footer-link"><a href={contactURL}>Contact</a></li>
                </ul>
            </div>
        </footer>
    );
}


export default Footer;