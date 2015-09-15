var map = L.map('map').setView([60.190, 24.832], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'arjunkamath.cielu5y8d004cu9lys6xrwbp5',
    accessToken: 'pk.eyJ1IjoiYXJqdW5rYW1hdGgiLCJhIjoiY2llbHU1enc0MDA0Z3VhbTF5ejVhdWNwdyJ9.5L-q42hDkFq4oKXpiE1UTQ'
}).addTo(map);
