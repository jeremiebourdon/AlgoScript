// Pour jouer, les coordonnées de quelques villes françaises
var tabvilles = [['Rennes',48.11843, -1.66443,[1,2,3,4]],
['Nantes',47.21211, -1.55457,[2]],
['Angers',47.46524, -0.54382,[3,7]],
['Le Mans',48.01932, 0.23071,[4,5,6]],
['Caen',49.16015, -0.37354,[5]],
['Rouen',49.37522, 1.0437,[6]],
['Paris',48.8358, 2.34009,[8]],
['Tours',47.33882, 0.68115,[8]],
['Orléans',47.91634, 1.8457,[]],
['Brest',48.40733, -4.47144,[0,1]],
['Poitiers',46.51352, 0.29663,[7]],
['Bordeaux',44.79353, -0.60425,[1,10]],
['Clermont-Ferrand',45.79051, 3.14209,[8,11]]];

// L'instruction importante ici est L.map qui ajoute une carte dans une division (cette division doit exister)
// La division la plus simple à utiliser est celle nommée 'weboutput' qui correspond à la sortie HTML.
if (typeof(document.getElementById('weboutput')._leaflet) == 'undefined') {
  var map = L.map('weboutput').setView([47.23689, -1.55404], 7);
} else {
  map.setView([47.23689, -1.55404], 7);
}
// A ce stade, une carte est prête, elle est centrée sur la FST de Nantes avec un niveau de zoom 7 (en gros, on voit toute la France)

// Pour qu'elle s'affiche, il faut préciser les images qui seront utilisées (ajout d'un tileLayer, ici celui de cloudmate).
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: ''
}).addTo(map);
// La carte s'affiche enfin !

/*
// D'autres styles de cartes sur MapBox
// Un exemple avec un style de carte "Pirate" !
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: '',
    maxZoom: 19,
    id: 'mapbox.pirates',
    accessToken: 'pk.eyJ1IjoiamJvdXJkb24iLCJhIjoiY2o2aHc3cG1yMGxwZDJ3cDAxNHkyb24zYiJ9.gKyYrX97CQMX_rXINNmJ7A'
}).addTo(map);
*/


// Passons à l'ajout de figures sur la carte (un cercle de 30m de rayon centré sur la FST de Nantes (avec un popup qui s'ouvre quand on clique dessus).
// Il faut zoomer pour le voir...
L.circle([47.23689, -1.55404], 30, {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5
}).addTo(map).bindPopup("FST Nantes.");

// On fait la même choses pour toutes les villes
for (var i = 0; i < Taille(tabvilles); i++) {
  L.circle([tabvilles[i][1], tabvilles[i][2]], 1000, {
    color: 'blue',
    fillColor: '#30f',
    fillOpacity: 0.5
  }).addTo(map).bindPopup(tabvilles[i][0]);
}

// On relie les villes entre elles...
for(var i = 0; i < Taille(tabvilles); i++) {
  var LI=L.latLng(tabvilles[i][1], tabvilles[i][2]);
  for(var j = 0; j < Taille(tabvilles[i][3]); j++) {
    var ville=tabvilles[i][3][j];
    L.polyline([
      LI,
      L.latLng(tabvilles[ville][1], tabvilles[ville][2])
    ], {
      color: 'blue'
    }).addTo(map);
  }
}

// panTo permet de se déplacer à une coordonnée donnée.
function Keypressed(c) {
  if (Ascii_vers_Caractere(c) == 'g') {
    var latitude = SaisieReel('Veuillez saisir la latitude');
    var longitude = SaisieReel('Veuillez saisir la longitude');
    map.panTo([latitude, longitude]);
  }
}

// On ajoute un évènement lorsqu'on clique sur la carte...
function onMapClick(e) {
  alert("Vous avez cliqué en " + e.latlng.toString());
}
map.on('click', onMapClick);
