"use strict"; //~ @Eryk Go ahead and modify this file to your hearts content.

import print from "./Printer.js";
import { SerialPort } from "serialport";
import { ReadlineParser } from "@serialport/parser-readline";

const coordinates = { lat: 0.0, lng: 0.0 };

const port = new SerialPort({ path: "/dev/ttyAMA0", baudRate: 9600 });
const parser = port.pipe(new ReadlineParser());
parser.on("data", data => {
    try {
        updateCoordinates(data);
        //await return parseData(data);
    } catch (e) {
        console.log("parser fucked up");
    }
});

function updateCoordinates(data) {
    data = data.toString();
    if (data.includes("$GPRMC")) {
        console.log(data);
        let i = data.indexOf("$GPRMC");
        while (data[i] != 'A' && data[i] != 'V') {
            i++;
        }
        let lat = 0;
        let lng = 0;
        if (data[i] == 'A') {
            i += 2;
            lat = data[i] + data[i + 1];
            lat += '.';
            i += 2;
            while (data[i] != ',') {
                if (data[i] != '.') {
                    lat += data[i];
                }
                i++;
            }
            i += 3;
            lng = data[i] + data[i + 1] + data[i + 2];
            lng += '.';
            i += 3;
            while (data[i] != ',') {
                if (data[i] != '.') {
                    lng += data[i];
                }
                i++;
            }
            coordinates = { lat: lat, lng: lng };
        }
    }
}

/**
 * Get's and returns the location from the GPS module.
 */
export default function getLocation() {

    // TODO : Implement GPS COORDINATES USING: 
    // https://dzone.com/articles/read-gps-data-with-a-raspberry-pi-zero-w-and-nodej

    // print("Some print statement."); // use this print function for non debugging, use console.log for debugging.
    return ({ coordinates });
}
