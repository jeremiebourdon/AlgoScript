
var balle_x = 10;
var balle_y = 10;
var dep_x = 2;
var dep_y = 1;

var cible_x = 0;
var cible_y = 0;
var taille = 0;

var raquette_x = 0;
var raquette_y = 0;
var possible = 0;

var nbtouchees = 0;

var tdebut = 0;

FrameRate=1000;

setInterval('tdebut++',1000);

function setup() {
}

function draw() {
  Initialiser();
  CerclePlein(balle_x, balle_y, 10, 'red');

  // latence dans le déplacement
  raquette_x = raquette_x + (mouseX - raquette_x) / 10;
  raquette_y = raquette_y + (mouseY - raquette_y) / 10;

  CerclePlein(raquette_x, raquette_y, 100, 'blue');


  RectanglePlein(cible_x, cible_y, taille, taille,'yellow');

  var distance = Math.sqrt((raquette_x - balle_x) * (raquette_x - balle_x) + (raquette_y - balle_y) * (raquette_y - balle_y));

  if (distance < 55 && possible < 0) {
    var normx = (raquette_x - balle_x) / distance;
    var normy = (raquette_y - balle_y) / distance;
    var pscal = dep_x * normx + dep_y * normy;
    dep_x = dep_x - 2 * pscal * normx;
    dep_y = dep_y - 2 * pscal * normy;
    possible = 100;
  }
  possible--;

  balle_x = balle_x + dep_x;
  balle_y = balle_y + dep_y;


  if (balle_x < 0 || balle_x > 800) {
    dep_x = -dep_x;
  }
  if (balle_y < 0 || balle_y > 600) {
    dep_y = -dep_y;
  }

  taille = taille - 0.1;

  if (taille <= 0) {
    cible_x = Hasard(700);
    cible_y = Hasard(500);
    taille = 100;
  }

  if (balle_x > cible_x && balle_x < cible_x + taille && balle_y > cible_y && balle_y < cible_y + taille) {
    cible_x = Hasard(700);
    cible_y = Hasard(500);
    taille = 100;
    nbtouchees = nbtouchees + 1;
  }
  Texte(10,550,nbtouchees + " cibles touchées en " + tdebut+ " secondes !", 'black');
}


Loop(-1);
