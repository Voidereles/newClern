let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 50.319922,
            lng: 19.133506
        },
        zoom: 16,
        disableDefaultUI: true,
        styles: [{
                elementType: 'geometry',
                stylers: [{
                    color: '#f2f2f2'
                }]
            },
            {
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#000000'
                }]
            },
            {
                featureType: "administrative.country",
                elementType: "labels",
                stylers: [{
                    color: '#000000'
                }]
            }, {
                featureType: "administrative.province",
                elementType: "labels",
                stylers: [{
                    color: '#cccccc'
                }]
            },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#000000'
                }]
            },
            {
                featureType: "road",
                elementType: "labels.icon",
                stylers: [{
                    "visibility": "off"
                }]
            },
            {
                featureType: "poi",
                stylers: [{
                    visibility: "off"
                }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{
                    color: '#ffffff'
                }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#ffffff'
                }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#555555'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{
                    color: '#ffffff'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{
                    color: '#ffffff'
                }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#ffffff'
                }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{
                    color: '#cccccc'
                }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#cccccc'
                }]
            },

            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{
                    color: '#1d9ef9'
                }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{
                    color: '#70e5df'
                }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{
                    color: '#70e5df'
                }]
            }

        ]

    });
    var marker = new google.maps.Marker({
        position: {
            lat: 50.319922,
            lng: 19.133506
        },
        map: map,
        icon: {
            url: "https://cdn.discordapp.com/attachments/520680294701858822/538074522637697034/icon7.png"
        }
    });
    marker.setMap(map);
}