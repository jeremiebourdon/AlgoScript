var score = 0;
var nbquestions = 10;
var maxchoice = 10;
var nbreponses = 4;
var flag = false;
var nbbonnes = 0,
 nbquest = 0;

var maxsize = (size_canvas_y > size_canvas_x) ? size_canvas_y : size_canvas_x;
var TailleFont = Math.floor(maxsize / (nbreponses * 3));
setCanvasFont('helvetica', TailleFont + 'px', 'bold');
var LargeurQuestion = LargeurTexte(maxchoice + ' + ' + maxchoice + ' = ???');

var MilieuEcran = Math.floor(size_canvas_y / 2)

var bonnereponse = 0;

function LargeurTexte(txt) {
  var metrics = ctx.measureText(txt);
  return metrics.width;
}

function HasardDiff(nb, nbdiff) {
  var res;
  do {
    res = Hasard(nb);
  } while (res == nbdiff);
  return res
}

function play() {
  flag = true;
  var nb1 = Hasard(maxchoice) + 1;
  var nb2 = Hasard(maxchoice) + 1;
  Initialiser();
  setCanvasFont('helvetica', TailleFont + 'px', 'bold');
  ShadowOn();
  Texte(10, MilieuEcran, nb1 + ' + ' + nb2 + ' = ??? ', 'black');

  bonnereponse = Hasard(nbreponses);

  for (var i = 0; i < nbreponses; i++) {
    Texte(30 + LargeurQuestion, MilieuEcran - TailleFont * (i - nbreponses / 2 + 0.5), (i == bonnereponse) ? (nb1 + nb2) : HasardDiff(2 * maxchoice, nb1 + nb2 - 1) + 1, 'blue');
  }

}

var LargeurGagne = LargeurTexte('Gagné !!!');
var HauteurGagne = TailleFont;
var LargeurPerdu = LargeurTexte('Perdu !!!');
var HauteurPerdu = TailleFont;


function MouseClick(x, y) {

  if (x > 30 + LargeurQuestion && x < 30 + LargeurQuestion + LargeurTexte(maxchoice) && flag && enroute) {
    var reponse = Math.floor((y - MilieuEcran + TailleFont * nbreponses / 2 + TailleFont / 2) / TailleFont);
    if (reponse >= 0 && reponse < nbreponses) {
      setCanvasFont('helvetica', TailleFont + 'px', 'bold');
      if (nbreponses - reponse - 1 == bonnereponse) {
        RectanglePlein(50, MilieuEcran - (HauteurGagne) * 1.5 / 2 - 20, 100 + LargeurGagne, HauteurGagne + 40, rgba(255, 100, 100, 0.5));
        Texte(100, MilieuEcran, 'Gagné !!!', 'green');
        nbbonnes++;
      } else {
        RectanglePlein(50, MilieuEcran - (HauteurPerdu) * 1.5 / 2 - 20, 100 + LargeurPerdu, HauteurPerdu + 40, rgba(100, 255, 100, 0.5));
        Texte(100, MilieuEcran, 'Perdu !!!', 'red');
      }
      nbquest++;
      flag = false;
      playevent=setTimeout(play, 1000);
    }
  }
}

var playevent=setTimeout(play, 1000);
var Depart = new Date();
var enroute = true;

function draw() {
  if (enroute) {
    var courant = new Date();
    var seccourant = Math.floor((courant.getTime() - Depart.getTime()) / 1000);
    if (seccourant > 60) {
      enroute = false;
      clearTimeout(playevent);
      clearTimeout(clearTimeoutEvent);
      for (var i = 0; i < 100; i++)
      Texte(15 + Hasard(100), Hasard(MilieuEcran), 'Partie terminée', rgba(Hasard(256), Hasard(256), Hasard(256), Hasard(256) / 256));
      return -1;
    }

    ShadowOff();
    setCanvasFont('helvetica', Math.floor(TailleFont / 4) + 'px', 'bold');
    RectanglePlein(10, MilieuEcran * 1.5 - TailleFont / 2, 100 + LargeurTexte('SCORE = 100/100, TEMPS = 00s'), TailleFont, 'white');
    var pourcent = (nbquest > 0) ? Math.floor(100 * nbbonnes / nbquest) : 0;
    Texte(15, MilieuEcran * 1.5, 'SCORE = ' + nbbonnes + '/' + nbquest + ', TEMPS = ' + (60 - seccourant) + 's', 'black');
    ShadowOn();
    setCanvasFont('helvetica', Math.floor(TailleFont) + 'px', 'bold');
  }
}
FrameRate = 10;

Loop(-1);