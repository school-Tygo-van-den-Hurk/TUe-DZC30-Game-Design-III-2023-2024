import { Circle } from '@react-google-maps/api';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { HTMLAttributes, useState, useEffect } from 'react';

export interface GoogleMapProps extends HTMLAttributes<HTMLDivElement> {
    apiKey:string,
    map?:{ 
        position:{
            lat:number,
            lng:number
        }
    },
    marker?:{
        color:string,
        position:{
            lat:number,
            lng:number
        }
    },
    circle?:{
        options?: { strokeColor:string },
        radius:number,
        center:{
            lat:number,
            lng:number
        }
    }
}

function GoogleMap(props:GoogleMapProps) {
    
    if (! props.map) props.map = { position:{ lat: 51.448555556, lng: 5.489083333 }};
    
    var marker = (<></>);
    if (props.marker) marker = ( <Marker 
            position={props.marker.position} 
            clickable={false}
            draggable={false}
        />
    );

    var circle = (<></>);
    if (props.circle) circle = ( <Circle 
            center={{...props.circle.center}}
            radius={props.circle.radius} 
            options={props.circle.options}
        />
    );

    return (
        <APIProvider apiKey={props.apiKey}>
            <Map 
                disableDefaultUI={true}
                controlled={false} 
                center={props.map.position} 
                zoom={17} 
                style={{...props.style, borderRadius:"var(--border-radius)"}}
            >
                {marker}
                {circle}
            </Map>
        </APIProvider>
    );
}

export default GoogleMap;