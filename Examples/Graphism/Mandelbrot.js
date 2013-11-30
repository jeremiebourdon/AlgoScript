

Initialiser();
Viewport(0, 0, 300, 200, 1);
HideTurtle();
AfficheGraphique();
Mandelbrot();
DrawTurtle();

function TranslateX(x) {
  return x * 3 / 300 - 2;
}

function TranslateY(y) {
  return (y - 100) * 3 / 200;
}


function Mandelbrot() {
  var i;
  var j;
  for (i = 0; i < 300; i++) {
    for (j = 0; j < 200; j++) {
      var macouleur = CouleurMandelbrot(TranslateX(i), TranslateY(j));
      var chcouleur = 'rgb(' + ((macouleur * 4) % 256) + ',0,0)';
      RectanglePlein(i, j, 1, 1, chcouleur);
    }
  }
}

function module(x, y) {
  return Math.sqrt(x * x + y * y);
}

function CouleurMandelbrot(a, b) {
  var i = 0;
  var x = a;
  var y = b;
  do {
    var tmp = x;
    x = x * x - y * y + a;
    y = 2 * tmp * y + b;
    i++;
  }
  while ((module(x, y) < 2) && (i < 50));
  return 50 - i;
}

