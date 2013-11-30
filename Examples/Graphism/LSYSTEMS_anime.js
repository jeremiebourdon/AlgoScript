

Initialiser();
Couleur('green');

var ch = Lsystems2('F', [
  ['F', 'FF-[-F+F+F]+[+F-F-F]']
], 3);

var t = 0;

function UnCran(ch, t) {
  Deplacer(0, 0);
  RectanglePlein(10, 10, 500, 350, 'white');
  Deplacer(300, 300);
  interprete(ch, 10, 40 * Math.cos(t * 3.14 / 180));
  HideTurtle();
}

function Animation(ch, t) {
  UnCran(ch, t);
  t = (t + 15) % 360;
  setTimeout('Animation("' + ch + '",' + t + ')', 20);
}

Animation(ch, t);


function Lsystems2(current, regles, n) {
  if (n < 1) return current;
  else {
    var res = '';
    var i;
    for (i = 0; i < Longueur(current); i++) {
      var flag = false;
      for (var j = 0; j < Taille(regles); j++) {
        if (current.charAt(i) == regles[j][0]) {
          res = res + regles[j][1];
          flag = true;
        }
      }
      if (!flag) res = res + current.charAt(i);
    }
    return Lsystems2(res, regles, n - 1);
  }
}


function interprete(ch, l, a) {
  var PositionsHeapX = Tableau(0);
  var PositionsHeapY = Tableau(0);
  var AngleHeap = Tableau(0);
  for (var i = 0; i < Longueur(ch); i++) {
    switch (ch.charAt(i)) {
    case 'F':
      Avancer(l);
      break;
    case '+':
      Droite(a);
      break;
    case '-':
      Gauche(a);
      break;
    case '[':
      PositionsHeapX.push(currentx);
      PositionsHeapY.push(currenty);
      AngleHeap.push(currentangle);
      break;
    case ']':
      Deplacer(PositionsHeapX.pop(), PositionsHeapY.pop());
      currentangle = AngleHeap.pop();
      break;
    }
  }
}

