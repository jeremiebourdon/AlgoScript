// Cette partie est du jQuery qui permet de gérer les animations des objets de manière transparente
(function($) {

  var Renderer = function() {
    var particleSystem

    var that = {
      init: function(system) {
        // Initialisation du graphe (ou système de particule)
        particleSystem = system
        particleSystem.screenSize(canvas.width, canvas.height)
        particleSystem.screenPadding(80) // leave an extra 80px of whitespace per side
        setCanvasFont('helvetica','20px','');
      },

      redraw: function() {
        // L'équivalent de la fonction "draw" en jQuery s'appelle redraw
        // On y décrit l'affichage d'une étape de la scène
 		Initialiser();
		if (ER) {
          Texte(10,20,'Graphe de Meetic','blue');
		  Texte(10,40,'On force les personnes à se rencontrer aléatoirement','blue');
        } else {
          Texte(10,20,'Graphe avec effet petit monde','black');
		  Texte(10,40,'Les personnes se rencontrent plutôt par connaissance','black');
        }
        Texte(10,70,nbnodes+' noeuds et '+nbedges+' arêtes','black');
        // Des fonctions qui se répètent pour chaque arête du graphe (i.e., comment sont affichées les arêtes)
        particleSystem.eachEdge(function(edge, pt1, pt2) {
          Ligne(pt1.x, pt1.y, pt2.x, pt2.y, (ER)?'blue':'black');
        })

        // Des fonctions qui se répètent pour chaque noeud du graphe (i.e., comment sont affichées les noeuds)
        particleSystem.eachNode(function(node, pt) {
          var w = 10
              RectanglePlein(pt.x - w / 2, pt.y - w / 2, w, w, (ER)?'blue':'black');
        })
      },
    }
    return that
  }

  $(document).ready(function() {
    sys = arbor.ParticleSystem(1000, 600, 0.5) // création du système avec une sensibilité décrite par repulsion/stiffness/friction
    sys.parameters({
      gravity: true
    }) 
    sys.renderer = Renderer() // render...
  })

})(this.jQuery);

var sys;
var nbnodes=50;
var T = Tableau(nbnodes*nbnodes);
InitialiserTableau(T, 0);


var initdist=''; for(var i=0; i<nbnodes; i++) initdist+=Ascii_vers_Caractere(i+Caractere_vers_Ascii('A'));

for (var i=0; i<nbnodes; i++) {sys.addNode(i);}

function repeter(ch,i) {
  var res='';
  while (i-->0) res+=ch;
  return res;
}

// La se trouve la partie rigolote: on ajoute des arêtes au graphe (1 toutes les 400ms) selon deux modèles aléatoires
//   - le modèle Erdos-Renyi (dit modèle meetic)
//   - un modèle qui satisfait la propriété du petit monde
var ER=(Saisie('1 pour Erdos-Renyi et 2 pour Petit-monde') == 1);
var nbedges=0;
function anim(t) {
  
  do {
    var ch1 = initdist[Hasard(Longueur(initdist))];
    var ch2 = initdist[Hasard(Longueur(initdist))];
    var i = Caractere_vers_Ascii(ch1)-Caractere_vers_Ascii('A');
    var j = Caractere_vers_Ascii(ch2)-Caractere_vers_Ascii('A');
  }
  while (T[i * nbnodes + j] != 0);
  if (! ER) initdist+=repeter(ch1,5)+repeter(ch2,5);

  T[i * nbnodes + j] = 1;
  T[j * nbnodes + i] = 1;
  nbedges++;
  sys.addEdge(i, j);
  
  if (t>0) setTimeout(anim,400,t-1);
}

anim(100);