

var palette = Tableau();
var cosTbl = Tableau();
var p1, p2, p3, p4, t1, t2, t3, t4;

function createPalette() {
  var i;
  for (i = 0; i < 64; i++) {
    palette[i] = rgb(4 * i, 4 * i, 0);
    palette[i + 64] = rgb(255, 255 - 4 * i, 0);
    palette[i + 128] = rgb(255 - 4 * i, 0, 4 * i);
    palette[i + 192] = rgb(0, 4 * i, 255 - 4 * i);
  }
}

function precalcCosinus() {
  var i;
  for (i = 0; i < 256; i++)
  cosTbl[i] = Math.floor(Math.cos(i * Math.PI / 128) * 32) + 32;
}

function dessinePlasma(qualite) {
  var x, y, col, pos;

  pos = 0;
  t1 = p1;
  t2 = p2;
  for (y = 0; y < 200; y += qualite) {
    t3 = p3;
    t4 = p4;
    for (x = 0; x < 320; x += qualite) {
      col = cosTbl[t1] + cosTbl[t2] + cosTbl[t3] + cosTbl[t4];
      RectanglePlein(x, y, qualite, qualite, palette[col]);
      pos++;
      t3 = (t3 + 255 - qualite) % 256;
      t4 = (t4 + 2 * qualite) % 256;
    }
    t1 = (t1 + 255 - 2 * qualite) % 256;
    t2 = (t2 + 2 * qualite) % 256;
  }
  p1 = (p1 + qualite) % 256;
  p2 = (p2 + 2 * qualite) % 256;
  p3 = (p3 + 255 - qualite) % 256;
  p4 = (p4 + 255 - 2 * qualite) % 256;
}

Initialiser();
Viewport(0, 0, 320, 200, 1);
createPalette();
precalcCosinus();
p1 = Hasard(256);
p2 = Hasard(256);
p3 = Hasard(256);
p4 = Hasard(256);

function Animation(t) {
  dessinePlasma(4);
  if (t < 400) {
    setTimeout(function() {
      Animation(t + 1);
    }, 1);
  }
}

Animation(0);



