var tapiola_xy = [60.176, 24.808];
var lauttasaari_xy = [60.157, 24.874];

var lauttasaari_array = [[60.1573836,24.8760441],[60.1539586,24.8820308],[60.1520577,24.8912522],[60.1657619,24.8595485],[60.1623744,24.8876098],[60.1586423,24.8929876],[60.1609658,24.8551899]];
var tapiola_array = [[60.1757799,24.804058],[60.1779242,24.8136764],[60.1716076,24.8006731],[60.1781669,24.7991657],[60.1784624,24.7945389],[60.1777565,24.7856141]];
var otaniemi_array =[[60.1839642,24.8306658],[60.1810748,24.832884],[60.1868449,24.8243171],[60.1894865,24.8315107],[60.1857521,24.8131001],[60.1820899,24.8219835]]; 

var toKerava = [[60.2325666,24.8144077],[60.2325773,24.8350071],[60.2334029,24.8488688],[60.2343058,24.8735773],[60.234849,24.8873531],[60.236825,24.9003994],[60.2394799,24.9204408],[60.2412054,24.9336588],[60.2457741,24.9408685],[60.2522694,24.9504816],[60.307629,24.9842989],[60.3352525,24.9932253],[60.3537259,25.0095331],[60.364614,25.0297033],[60.3781182,25.0461399],[60.3814138,25.0525128]];

var map = L.map('map').setView(otaniemi_array[2], 14);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'arjunkamath.cielu5y8d004cu9lys6xrwbp5',
    accessToken: 'pk.eyJ1IjoiYXJqdW5rYW1hdGgiLCJhIjoiY2llbHU1enc0MDA0Z3VhbTF5ejVhdWNwdyJ9.5L-q42hDkFq4oKXpiE1UTQ'
}).addTo(map);


var myIcon = L.icon({
    iconUrl: 'pointer2.png',
    iconSize: [38, 45],
    iconAnchor: [22, 45]
});

var ot_dump = new Array();
var ta_dump = new Array();
var la_dump = new Array();

for (var i=0; i < otaniemi_array.length; i++){
 ot_dump.push(L.marker(otaniemi_array[i]).addTo(map));
}

for (var i=0; i < lauttasaari_array.length; i++){
 la_dump.push(L.marker(lauttasaari_array[i]).addTo(map));
}

for (var i=0; i < tapiola_array.length; i++){
 ta_dump.push(L.marker(tapiola_array[i]).addTo(map));
}


//ot_dump2.bindPopup("Dump 2");


function animate_line(){

  console.log("ANIMATE");

  map.setView(otaniemi_array[2], 8);

  var latLangs2 = [];
  latLangs2.push(otaniemi_array[2]);
  latLangs2.push(lauttasaari_xy);
  latLangs2.push(tapiola_xy);

  var polyline2 = L.polyline(latLangs2, {color: 'green'}).addTo(map);

  //animated line now
  var polyline = L.polyline([], {color: 'red'}).addTo(map);

  /* for (var i=0; i< toKerava.length; i++){
    setTimeout(function(){
      polyline2.addLatLng(toKerava[i]);
    }, ((i+1)*1000));
    console.log("it is" + i); 
  }*/
 
  var count = 0;
  var second = 3000;

  setTimeout(function(){
    polyline.addLatLng(otaniemi_array[2]);
  }, 0);  

  setTimeout(function(){
    count++;
    console.log(count);
    polyline.addLatLng(toKerava[count]);
  }, count*second);

  setTimeout(function(){
    count++;
    console.log(count);
    polyline.addLatLng(toKerava[count]);
  }, count*second);

  setTimeout(function(){
    count++;
    console.log(count);
    polyline.addLatLng(toKerava[count]);
  }, count*second);

  setTimeout(function(){
    count++;
    console.log(count);
    polyline.addLatLng(toKerava[count]);
  }, count*second);

  setTimeout(function(){
    count++;
    console.log(count);
    polyline.addLatLng(toKerava[count]);
  }, count*second);

  setTimeout(function(){
    count++;
    console.log(count);
    polyline.addLatLng(toKerava[count]);
  }, count*second);

  setTimeout(function(){
    count++;
    console.log(count);
    polyline.addLatLng(toKerava[count]);
  }, count*second);

  setTimeout(function(){
    count++;
    console.log(count);
    polyline.addLatLng(toKerava[count]);
  }, count*second);

  setTimeout(function(){
    count++;
    console.log(count);
    polyline.addLatLng(toKerava[count]);
  }, count*second);

  setTimeout(function(){
    count++;
    console.log(count);
    polyline.addLatLng(toKerava[count]);
  }, count*second);

  

  
  
}

function showTapiola(){
  map.setView(tapiola_xy, 13);

  lauttasaari_set_opacity(0.5);
  tapiola_set_opacity(1);
  otaniemi_set_opacity(0.5);
}

function showLauttasaari(){
  map.setView(lauttasaari_xy, 13);
  
  lauttasaari_set_opacity(1);
  tapiola_set_opacity(0.5);
  otaniemi_set_opacity(0.5);
}

function showOtaniemi(){
  map.setView(otaniemi_array[2], 13);
  
  lauttasaari_set_opacity(0.5);
  tapiola_set_opacity(0.5);
  otaniemi_set_opacity(1);

  animate_line();
}

function tapiola_set_opacity(op){
  for (var i=0; i< ta_dump.length; i++){
    ta_dump[i].setOpacity(op);
  }
}

function lauttasaari_set_opacity(op){
  for (var i=0; i< la_dump.length; i++){
    la_dump[i].setOpacity(op);
  }
}

function otaniemi_set_opacity(op){
  for (var i=0; i< ot_dump.length; i++){
    ot_dump[i].setOpacity(op);
  }
}


