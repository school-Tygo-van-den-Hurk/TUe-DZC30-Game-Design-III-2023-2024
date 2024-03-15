
function initMap() {

    let tueCenterCoordinates = { lat: 51.448777189729554, lng: 5.490653758821924 }

    // Create the map.
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: tueCenterCoordinates,
        mapTypeId: "terrain",
    });

    let circleRadius = 50;
    let treasureCoordinates = tueCenterCoordinates;

    const circle = new Circle(map, circleRadius, treasureCoordinates); // Create a circle new circle on the map
    circle.startShrinking(500, 1);

    const mapLabel = new google.maps.MapLabel({
        text: 'Treasure!!',
        position: treasureCoordinates,
        map: map,
        fontSize: 35,
        align: 'right'
    });
}

window.initMap = initMap;

class Circle {
    // Creates a new circle on the map
    constructor(map, radius, coordinates) {
        this.map = map;
        this.radius = radius;
        this.coordinates = coordinates;
        this.createCircle();

        this.minimumRadius = 10;
    }

    // Used by the constructor to create a new circle on the map
    createCircle() {
        this.treasureCircle = new google.maps.Circle({
            strokeColor: "#DFB700",
            strokeOpacity: 0.8,
            strokeWeight: 5,
            fillColor: "#FFD700",
            fillOpacity: 0.35,
            map: this.map,
            center: this.coordinates,
            radius: this.radius,
        });
    }

    // Set the radius of the circle
    setRadius(radius) {
        this.radius = radius;
        this.treasureCircle.setMap(null);
        this.createCircle();
    }

    // Start shrinking the circle -> shrinks every @param{interval} milliseconds by @param{delta} meters
    startShrinking(interval, delta) {
        let timerID = setInterval(() => {
            if (this.radius > this.minimumRadius) {
                this.setRadius(this.radius - delta); // Decrease by 5 meters every second
                console.log("Circle radius: " + this.radius);
            } else {
                console.log("Circle has shrunk to minimum radius");
                clearInterval(timerID); // this stops the interval
            }
        }, interval);
    }
}