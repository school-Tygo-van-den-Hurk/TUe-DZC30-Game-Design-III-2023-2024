import { contactURL } from "../constants";
import "./NotFound.css";

function NotFound() {
    return (
        <>
            <div className="not-found-container">
                <div className="not-found-content">
                    <h1> 404 : Page not found </h1>
                    <p> 
                        Arrrrr! It looks like you're in uncharted waters!!
                    </p>
                    <p>
                        The page you were looking for does not exist.  
                        You can go back to the <a href="/">home page</a>,
                        or <a href={contactURL}>notify the captain</a> if
                        you have a concern!
                    </p>
                </div>
            </div>
        </>
    );
}

export default NotFound;
