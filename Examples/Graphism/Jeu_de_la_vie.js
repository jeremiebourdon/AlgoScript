

// Jeu de la vie
var taille = 50;

var Grille = Tableau();
for (var i = 0; i < taille; i++) {
  Grille[i] = Tableau();
}

var Grille2 = Tableau();
for (var i = 0; i < taille; i++) {
  Grille2[i] = Tableau();
}

function InitialiserGrille(p) {
  // p = probabilité de tirer une cellule vivante
  for (var i = 0; i < taille; i++) {
    for (var j = 0; j < taille; j++) {
      if (Hasard(100000) < 100000 * p) {
        Grille[i][j] = 'X';
      } else {
        Grille[i][j] = 'O';
      }
    }
  }
}

function DessinerGrille() {
  for (var i = 0; i < taille; i++) {
    for (var j = 0; j < taille; j++) {
      RectanglePlein(50 + i * 5, 50 + j * 5, 5, 5, (Grille[i][j] == 'X') ? 'black' : 'white');
    }
  }
}

function Generation() {

  for (var i = 0; i < taille; i++) {
    for (var j = 0; j < taille; j++) {
      Grille2[i][j] = Grille[i][j];
    }
  }

  for (var i = 0; i < taille; i++) {
    for (var j = 0; j < taille; j++) {
      // On travaille sur un tore (d'où les modulos)
      var nbalives = (Grille2[i][j] == 'X') ? -1 : 0;
      for (var k = 0; k < 3; k++) {
        for (var l = 0; l < 3; l++) {
          nbalives += (Grille2[(i + k - 1 + taille) % taille][(j + l - 1 + taille) % taille] == 'X') ? 1 : 0;
        }
      }
      if (Grille2[i][j] == 'O') {
        if (nbalives == 3) {
          Grille[i][j] = 'X';
        }
      } else {
        if ((nbalives < 2) || (nbalives > 3)) {
          Grille[i][j] = 'O';
        }
      }
    }
  }
}

InitialiserGrille(0.1);

function Animation(n, fin) {
  Initialiser();
  Texte(100, 30, 'Génération ' + n + '/' + fin);
  DessinerGrille();
  Generation();
  if (n < fin) {
    setTimeout(function() {
      Animation(n + 1, fin);
    }, 100);
  }
}

Animation(0, 100);

