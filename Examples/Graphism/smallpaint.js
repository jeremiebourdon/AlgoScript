

Initialiser();
// Trace palette
var Couleurs = ['white', 'black', 'blue', 'red', 'yellow', 'green', 'orange', 'purple'];
RectanglePlein(0, 0, 50, size_canvas_y, rgb(200, 200, 200));
for (var i = 0; i < Taille(Couleurs); i = i + 1) {
  RectanglePlein(5, 5 + 50 * i, 40, 40, Couleurs[i]);
}

var CouleurCourante = 1;
MouseClick(5, 55);

function MouseClick(x, y) {
  if (x < 50) {
    RectanglePlein(0, 50 * CouleurCourante, 50, 50, rgb(200, 200, 200));
    RectanglePlein(5, 5 + 50 * CouleurCourante, 40, 40, Couleurs[CouleurCourante]);
    CouleurCourante = Math.min(Math.floor(y / 50), Taille(Couleurs) - 1);
    RectanglePlein(0, 50 * CouleurCourante, 50, 50, rgb(200, 100, 100));
    RectanglePlein(5, 5 + 50 * CouleurCourante, 40, 40, Couleurs[CouleurCourante]);
  } else {
    RectanglePlein(x - 5, y - 5, 10, 10, Couleurs[CouleurCourante]);
  }
}

