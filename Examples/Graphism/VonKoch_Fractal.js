Initialiser(); Viewport(0,0,600,400,1)
Deplacer(100,100);
Droite(90);
AfficheGraphique();
var ch=Lsystems('F','F-F++F-F',4);
interprete(ch,2,60);
Droite(120);
interprete(ch,2,60);
Droite(120);
interprete(ch,2,60);
Droite(120);
function Lsystems(current,regles,n) {
  if (n<1)
    return current;
  else {
    var res='';
    var i;
    for (i=0; i<current.length; i++) {
      if (current.charAt(i) == 'F') {
        res=res+regles;
      } else {
        res=res+current.charAt(i);
      }
    }
    return Lsystems(res,regles,n-1);
  }
}

function interprete(ch,l,a) {
  var i;
  for (i=0; i<ch.length; i++) {
    switch (ch.charAt(i)) {
    case 'F' : Avancer(l); break;
    case '+' : Droite(a); break;
    case '-' : Gauche(a); break;
    }
  }
}
