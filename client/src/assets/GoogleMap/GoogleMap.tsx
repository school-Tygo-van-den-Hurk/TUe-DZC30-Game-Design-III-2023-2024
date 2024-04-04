// import { Circle } from '@react-google-maps/api';
// import { GoogleMap } from '@react-google-maps/api';
// import { Marker } from '@react-google-maps/api';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { Circle } from '../../components';
import { HTMLAttributes } from 'react';

export interface GoogleMapProps extends HTMLAttributes<HTMLDivElement> {
    apiKey: string,
    map?: {
        position: {
            lat: number,
            lng: number
        }
    },
    marker?: {
        color: string,
        position: {
            lat: number,
            lng: number
        }
    },
    circle?: {
        strokeColor: string,
        strokeOpacity: number,
        strokeWeight: number,
        fillColor: string,
        fillOpacity: number,
        radius: number,
        center: {
            lat: number,
            lng: number
        }
    }
}

function CustomGoogleMap(props: GoogleMapProps) {

    if (!props.map) props.map = { position: { lat: 51.448555556, lng: 5.489083333 } };

    var marker = (<></>);
    if (props.marker) marker = (<Marker
        position={props.marker.position}
        clickable={false}
        draggable={false}
    />
    );

    var circle = (<></>);
    //props.circle.radius
    if (props.circle) circle = (<Circle
        strokeColor={props.circle.strokeColor}
        strokeOpacity={props.circle.strokeOpacity}
        strokeWeight={props.circle.strokeWeight}
        fillColor={props.circle.fillColor}
        fillOpacity={props.circle.fillOpacity}
        center={{ ...props.circle.center }}
        radius={props.circle.radius}
    />
    );

    return (
        <APIProvider apiKey={props.apiKey}>
            <Map
                disableDefaultUI={true}
                controlled={false}
                center={props.map.position}
                zoom={17}
                style={{ ...props.style, borderRadius: "var(--border-radius)" }}
            >
                {/* {marker} */}
                {circle}
            </Map>
        </APIProvider>
    );
}

export default CustomGoogleMap;