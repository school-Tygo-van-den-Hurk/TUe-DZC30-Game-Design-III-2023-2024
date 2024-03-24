import axios from 'axios';
import useSWR from 'swr';
import "./Maps.css";

const https = false;
const port = 3001;
const domain = "localhost";
const path = "api/coordinates";

/**
 * This function stores the 
 * @returns 
 */
function getTextAndTitle() {
    return (
        <>
            <h1> This is the Maps page </h1>
            <p>
                In this section you can look at the map and get an idea of where the treasure might be.
                There is a radius in which the treasure could reside, and every so often the radius in
                which the treasure will shrink to make it easier to find it. Whenever some one does 
                find it, then the radius resets and the treasure is moved.
            </p>
        </>
    );
}

/**
 * The maps page has to load in the coordinates from the backend. That's why it has three states:
 * - loading,
 * - failure,
 * - success.
 * 
 * Depending on the state, a different state must be displayed.
 * 
 * @returns the maps page.
 */
function Maps() {

    const url:string = (
        `http${https?'s':''}://${domain}:${port}/${path.startsWith('/')?path.substring(1,path.length):path}`);
    const fetcher = (url:string) => axios.get(url).then(res => res.data);
    const { data: coordinates, error, isValidating } = useSWR(url, fetcher);

    if (error) return (
        <>
            {getTextAndTitle()}
            {failed(error)}
        </>
    );
    
    if (isValidating) return (
        <>
            {getTextAndTitle()}
            {loading()}
        </>
    );

    return (
        <>
            {getTextAndTitle()}
            {success(coordinates)}
        </>
    );
}

/**
 * this function returns the HTML that will be displayed when the coordinates are retrieved successfully.
 * 
 * @param coordinates the coordinates of the box.
 * @returns the HTML on a successful load.
 */
function success(coordinates:{lat:number,lon:number}) {
    return (
        <>
            <p className="success"> The coordinates loaded successfully. </p>
            <p> The coordinates are latitude: {coordinates.lat}, and longitude: {coordinates.lon}. </p>
            <div className="map-container layer-0"> This is a placeholder for the map... </div>
        </>
    );
}

/**
 * this function returns the HTML that will be displayed when the coordinates are loading.
 *
 * @returns the HTML that will be displayed when the coordinates are loading.
 */
function loading() {
    return ( <p className="loading"> Loading the coordinates... </p> );
}

/**
 * this function returns the HTML that will be displayed when the coordinates failed to load.
 * 
 * @param error the `error` that occurred.
 * @returns the HTML to display on a fail.
 */
function failed(error?:any) {
    console.error(error);
    return ( <p className="failed"> failed to load the coordinates. </p> );
}

export default Maps;