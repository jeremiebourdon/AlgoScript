

//includeFile('libprocesslike.js');
  var message = "RENSEIGNEMENTSARRIVENT";

function bird(x, y, t) {
  var s = Math.sin(t * 3.14 / 180);
  s = s * s+0.2;
  Ligne(x - 10 * s, y - 10 * s, x, y, 'black');
  Ligne(x + 10 * s, y - 5 * s, x, y, 'black');
}

  var taillex = 900;
  var tailley = 400;

function alphabet(y) {
  for (var i = 0; i < 26; i++) {
    Ligne(50 + (taillex / 26) * i, 20,50 + (taillex / 26) * i, y,'white');
    Texte(50 + (taillex / 26) * i, y, Ascii_vers_Caractere(i + 65), 'white');
  }
}

setCanvasFont('helvetica','20px','bold');

function scene(t) {
  Initialiser();
  RectanglePlein(0, 0, 1500, 1000, rgb(100, 100, 255));
  CerclePlein(200, 200, 100, 'red');

  CerclePlein(0, 700, 1000, 'white');
  CerclePlein(400, 700, 700, 'white');
  CerclePlein(800, 700, 450, 'white');

  CerclePlein(0, 700, 1000, rgba(100, 255, 0, 0.5));
  CerclePlein(400, 700, 700, rgba(100, 255, 0, 0.5));
  CerclePlein(800, 700, 450, rgba(100, 255, 0, 0.5));
  CerclePlein(400, 700, 700, rgba(100, 255, 0, 0.5));
  CerclePlein(800, 700, 450, rgba(100, 255, 0, 0.5));
  CerclePlein(800, 700, 450, rgba(100, 255, 0, 0.5));


  ShadowOn();


  var y = 100;
  for (var i = 0; i < Longueur(message); i++) {
    var numcase = Caractere_vers_Ascii(message[i]) - 65;
    bird(Math.floor(50 + (taillex / 26) * numcase) + 5*Math.sin((t*((i+1) % 5))*3.14/180), Math.floor(50 + tailley * i / Taille(message)), t + i * 10);
  }
}

var t = 0;

function Min(a, b) {
  return (a < b) ? a : b;
}
var tstart=0;
var flagstart=false;
var flagfirststart=false;
function MouseClick(x,y) {
  flagfirststart=true;
  flagstart=! flagstart;
}
  
function anim() {
  scene(t);
  if (flagfirststart) alphabet(Min(tstart+20, 500));
  if (flagstart) {tstart++;}
  t++;
  if (tstart<1000) {
    setTimeout('anim()', 10);
  } else {Texte(100,550,message,'white');}
}

anim();

