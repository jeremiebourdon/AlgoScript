Initialiser();

var nbprocesses = SaisieEntier('Combien de processeurs');

function TranslateX(x) {
  return x * 3 / 1000 - 2;
}

function TranslateY(y) {
  return (y - 300) * 3 / 600;
}

function Mandelbrot(debut, fin, image) {
  var i;
  var j;
  for (i = 0; i < 1000; i++) {
    for (j = debut; j < fin; j++) {
      var macouleur = CouleurMandelbrot(TranslateX(i), TranslateY(j));
      image.data[4 * ((j-debut) * 1000 + i)]=(macouleur * 4) % 256;
      image.data[4 * ((j-debut) * 1000 + i)+1]=0;
      image.data[4 * ((j-debut) * 1000 + i)+2]=0;
      image.data[4 * ((j-debut) * 1000 + i)+3]=255;
    }
  }
  return image;
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

// Version non parallele
Ecrire(chronometre('ctx.putImageData(Mandelbrot(0,600,ctx.createImageData(1000,600)),0,0);'));

// Version parallele
for (var i = 0; i < nbprocesses; i++) {
  var debut = i * Math.floor(600 / nbprocesses);
  var fin = (i + 1) * Math.floor(600 / nbprocesses);
  var p = new Parallel([debut, fin, ctx.createImageData(1000, fin - debut)]);
  p.require(CouleurMandelbrot).require(module).require(Mandelbrot).require(TranslateX).require(TranslateY);
  p.spawn(function(d) {
    return [d[0], Mandelbrot(d[0], d[1], d[2])];
  }).then(function(d) {
    ctx.putImageData(d[1], 0, d[0]);
  });
}
