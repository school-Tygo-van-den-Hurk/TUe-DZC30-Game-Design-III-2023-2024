import "./NotFound.css";

function NotFound() {
    return (
        <>
            <div className="NotFound">
                <div>
                    <h1> 404 : Page not found </h1>
                    <p> 
                        The page you were looking for does not exist. 
                        You can go back to the <a href="/">home page</a>.
                    </p>
                </div>
            </div>
        </>
    );
}


export default NotFound;