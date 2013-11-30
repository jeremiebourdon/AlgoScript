// Les informations du gyroscope seront récupérées via 3 variables, à l'image de ce qui est fait pour la souris
var gyroscopeX=0, gyroscopeY=0, gyroscopeZ=0, gyroscopeType='none';

// C'est la partie technique ici. Il faut mettre à jour ces variables en réponse à certains évènements
// Comme ce n'est pas encore normalisé, il faut gérer 3 évènements pour chaque navigateur.

window.addEventListener('MozOrientation', function(e) {
  gyroscopeType = 'MozOrientation';
  gyroscopeX = e.x;
  gyroscopeY = e.y;
  gyroscopeZ = e.z;
}, true);

window.addEventListener('devicemotion', function(e) {
  gyroscopeType = 'devicemotion';
  gyroscopeX = e.accelerationIncludingGravity.x;
  gyroscopeY = e.accelerationIncludingGravity.y;
  gyroscopeZ = e.accelerationIncludingGravity.z;
}, true);

window.addEventListener('deviceorientation', function(e) {
  gyroscopeType = 'deviceorientation';
  gyroscopeX = e.alpha;
  gyroscopeY = e.beta;
  gyroscopeZ = e.gamma;
}, true);

// Le reste est simple: on va faire une animation qui déplace une balle en utilisant l'orientation de la tablette

// Les positions de la balle sont les entiers ballex et balley
var ballex=200;
var balley=200;

function draw() {
 // On affiche tout de même les informations du gyroscope sur la sortie texte
  EffacerEcran();
  Ecrire('x = ' + gyroscopeX);
  Ecrire('y = ' + gyroscopeY);
  Ecrire('z = ' + gyroscopeZ);
  Ecrire('type = ' + gyroscopeType);

  // Ici, on déplace puis affiche la balle
 ballex = ballex - 2 * gyroscopeX;
  balley = balley + 2 * gyroscopeY;
  Initialiser();
  CerclePlein(ballex, balley, 20, 'red');
}

FrameRate=30;

Loop(-1);