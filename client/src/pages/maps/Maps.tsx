import GoogleMap, { GoogleMapProps } from "../../assets/GoogleMap/GoogleMap";
import server from "../../assets/server";
import axios from 'axios';
import useSWR from 'swr';
import "./Maps.css"; 
import { isDevEnv } from "../../assets/constants";

// TODO REMOVE WHEN AN ACTUAL IMPLEMENTATION IS HERE
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
// # BEGIN TODO : remove when you have an actual implementation
function getTempProps(_data:BackendCoordinateRequestResult) { 
        
    const marker = ({ 
        color:"#00FF00",
        position:{ lat:51.44904336679616, lng:5.487273789974496 }
    });

    const circle = {
        options: { 
            strokeColor:"#00FF00",         
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
        },
        radius:4000,
        center:{ lat:51.44904336679616, lng:5.487273789974496 }
    }

    const props:GoogleMapProps = {
        apiKey:"AIzaSyCJET1X_nGd5nsC1RLv1YTUWFg9HPkAjxQ", 
        map: {
            position:{
                lat: 51.448555556, //// data.coordinates.lat, 
                lng: 5.489083333   ////data.coordinates.lon
            }
        },
        marker:marker,
        circle:circle 
    }

    return (props);
}
// # END TODO
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

const path = "maps";

interface BackendCoordinateRequestResult {
    coordinates:{ lat:number, lng:number }
    lastSolved:string
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

/**
 * creates a 
 * @param coordinatesTreasure 
 * @returns 
 */
function getMap(data:BackendCoordinateRequestResult) {

    return ( 
        // TODO : @Leo use the google maps API to create a map here.
        // Search for terms 'node js', 'google maps API', and 'react' for better results.
        <div className="map-container layer-0" >
            <GoogleMap {...getTempProps(data)}/>
        </div>
    );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

/**
 * This function stores the 
 * @returns 
 */
function getTextAndTitle() {
    return (
        <>
            <h1> the Map </h1>
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

    const url:string = (`${server.getURL()}${path}`);
    const fetcher:(url:string)=>Promise<any> = (url:string) => axios.get(url).then(res => res.data);
    const { data, error, isValidating } = useSWR(url, fetcher);

    if (error) return (
        <>
            {failed(error)}
            {getTextAndTitle()}
        </>
    );
    
    if (isValidating) return (
        <>
            {loading()}
            {getTextAndTitle()}
        </>
    );

    return (
        <>
            {success(data)}
            {getTextAndTitle()}
            {getMap(data)}
        </>
    );
}

/**
 * this function returns the HTML that will be displayed when the coordinates are retrieved successfully.
 * 
 * @param coordinates the coordinates of the box.
 * @returns the HTML on a successful load.
 */
function success(data:BackendCoordinateRequestResult) {

    const message = ( 
        (isDevEnv)
        ? (
            <p> 
                The coordinates are latitude: {data.coordinates.lat}, and longitude: {data.coordinates.lng}. 
                this is only visible in development mode.
            </p>
        ) : (<></>) );
    return (
        <>
            <p className="success"> The coordinates loaded successfully. </p>
            {message}
        </>
    );  
}

/**
 * this function returns the HTML that will be displayed when the coordinates are loading.
 *
 * @returns the HTML that will be displayed when the coordinates are loading.
 */
function loading() { 

    return ( 
        <p className="loading"> 
            Loading the coordinates... 
        </p> 
    );
}

/**
 * this function returns the HTML that will be displayed when the coordinates failed to load.
 * 
 * @param error the `error` that occurred.
 * @returns the HTML to display on a fail.
 */
function failed(error?:any) {
    
    console.error(error);

    return ( 
        <p className="failed">
            failed to load the coordinates. 
        </p> 
    );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

export default Maps;