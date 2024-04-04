"use strict"; //~ @Eryk Go ahead and modify this file to your hearts content.

import print from "./Printer.js";

/**
 * Get's and returns the location from the GPS module.
 */
export default function getLocation() {

    // TODO : Implement GPS COORDINATES USING: 
    // https://dzone.com/articles/read-gps-data-with-a-raspberry-pi-zero-w-and-nodej

    // print("Some print statement."); // use this print function for non debugging, use console.log for debugging.
    return ({
        coordinates: { 
            lat: 51.44904336679616, 
            lng: 5.487273789974496 
        },
    });
}