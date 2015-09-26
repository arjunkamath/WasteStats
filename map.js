var otaniemi_xy = [60.190, 24.832];
var tapiola_xy = [60.176, 24.808];
var lauttasaari_xy = [60.157, 24.874];

var lauttasaari_array = [[60.1573836,24.8760441],[60.1539586,24.8820308],[60.1520577,24.8912522],[60.1657619,24.8595485],[60.1623744,24.8876098],[60.1586423,24.8929876],[60.1609658,24.8551899]];

var map = L.map('map').setView(otaniemi_xy, 4);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'arjunkamath.cielu5y8d004cu9lys6xrwbp5',
    accessToken: 'pk.eyJ1IjoiYXJqdW5rYW1hdGgiLCJhIjoiY2llbHU1enc0MDA0Z3VhbTF5ejVhdWNwdyJ9.5L-q42hDkFq4oKXpiE1UTQ'
}).addTo(map);

L.geoJson(worldData).addTo(map);

var ot_dump1 = L.marker([60.189, 24.839]).addTo(map);
var ot_dump2 = L.marker([60.190, 24.837]).addTo(map);

var la_dump1 = L.marker(lauttasaari_array[0]).addTo(map);
var la_dump2 = L.marker(lauttasaari_array[1]).addTo(map);
var la_dump3 = L.marker(lauttasaari_array[2]).addTo(map);
var la_dump4 = L.marker(lauttasaari_array[3]).addTo(map);
var la_dump5 = L.marker(lauttasaari_array[4]).addTo(map);
var la_dump6 = L.marker(lauttasaari_array[5]).addTo(map);
var la_dump7 = L.marker(lauttasaari_array[6]).addTo(map);

ot_dump1.bindPopup("Dump 1").openPopup();
ot_dump2.bindPopup("Dump 2");

function showTapiola(){
  map.setView(tapiola_xy, 13);
}

function showLauttasaari(){
  map.setView(lauttasaari_xy, 13);
}

function animate_line(){

  var latLangs2 = [];
  latLangs2.push(otaniemi_xy);
  latLangs2.push(tapiola_xy);
  latLangs2.push(lauttasaari_xy);

  //var polyline2 = L.polyline(latLangs2, {color: 'green'}).addTo(map);

  var polyline = L.polyline([], {color: 'red'}).addTo(map);
  
  setTimeout(function(){
    polyline.addLatLng(otaniemi_xy);
  }, 0);
  
  setTimeout(function(){
  polyline.addLatLng(tapiola_xy);
  }, 0);
  
  setTimeout(function(){
  polyline.addLatLng(lauttasaari_xy);
  }, 3000);
  
  setTimeout(function(){
  polyline.addLatLng(otaniemi_xy);
  }, 6000);
}


function showOtaniemi(){
  map.setView(otaniemi_xy, 12);
  animate_line();
}
