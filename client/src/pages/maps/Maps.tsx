import CustomGoogleMap, { GoogleMapProps } from "../../assets/GoogleMap/GoogleMap";
import server from "../../assets/server";
import axios from 'axios';
import useSWR from 'swr';
import "./Maps.css"; 
import { isDevEnv } from "../../assets/constants";
//// import NotificationBanner, { NotificationBannerTypes } from "../../assets/NotificationBanner/NotificationBanner";

const GOOGLE_MAPS_API_KEY = (import.meta.env.VITE_GOOGLE_MAPS_API_KEY);
const path = "maps";

interface BackendCoordinateRequestResult {
    coordinates: { lat: number, lng: number }
    lastSolved: string
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

/**
 * creates a 
 * @param coordinatesTreasure 
 * @returns 
 */
function getMap(data: BackendCoordinateRequestResult) {

    const props: GoogleMapProps = {
        apiKey: GOOGLE_MAPS_API_KEY,
        map: {
            position: {
                lat: 51.448555556, 
                lng: 5.489083333
            }
        },
        circle: {
            strokeColor: "#FFD700",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FFD700",
            fillOpacity: 0.35,
            center: { 
                lat: data.coordinates.lat, 
                lng: data.coordinates.lng
            },
            radius: 20
        }
    };

    return (
        <div className="map-container layer-0" >
            <CustomGoogleMap {...getTempProps(data)} />
        </div >
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
export default function Maps() {

    console.debug("GOOGLE_MAPS_API_KEY", GOOGLE_MAPS_API_KEY);

    const url: string = (`${server.getURL()}${path}`);
    const fetcher: (url: string) => Promise<any> = (url: string) => axios.get(url).then(res => res.data);
    const { data, error, isValidating } = useSWR(url, fetcher);

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
            {getMap(data)}
            {success(data)}
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
        (isDevEnv) ? (
            <p> 
                The coordinates are latitude: {data.coordinates.lat}, and longitude: {data.coordinates.lng}. 
                this is only visible in development mode.
            </p>
        ) : (<></>) );
    return (
        <>
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
        <div className="map-container">
            <div className="map-message">
                Loading map...
            </div>
            <div className="loading-map"/>
        </div>
    );
}

/**
 * this function returns the HTML that will be displayed when the coordinates failed to load.
 * 
 * @param error the `error` that occurred.
 * @returns the HTML to display on a fail.
 */
function failed(error?: any) {

    console.error(error);

    return (
        <div className="map-container">
            <div className="map-message">
                Failed to load :&#40;
            </div>
        </div>
    );
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
