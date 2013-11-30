

Initialiser();
Deplacer(300, 300);
var ch = Lsystems2('F', [
  ['F', 'FF-[-F+F+F]+[+F-F-F]']
], 4);
Couleur('green');
interprete(ch, 5, 22.5);
Deplacer(400, 300);
interprete(ch, 4, -15);
Deplacer(100, 300);
interprete(ch, 3.5, 20);


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

