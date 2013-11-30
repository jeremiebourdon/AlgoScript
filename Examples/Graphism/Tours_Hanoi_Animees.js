
var SequenceDeplacements=Tableau(0);

function Hanoi(n,tige1,tige2,tige3) {
   if (n > 0) {
      Hanoi(n-1, tige1, tige3, tige2);
      DeplacerCyl(tige1,tige3);
      Hanoi(n-1, tige2, tige1, tige3);
   }
}

function DeplacerCyl(T1,T2) {
	SequenceDeplacements.push(new Array(T1,T2));
}

var n=SaisieEntier();

Hanoi(n,0,1,2);

var Tiges=Tableau(0);
Tiges.push(Tableau(0));
Tiges.push(Tableau(0));
Tiges.push(Tableau(0));

for (var i=0; i<n; i++) {Tiges[0].push(n-i);}

function AfficheTiges() {
Ligne(50,90,350,90,'black');
	for(var i=0; i<3; i++) {
		var x=100*(i+1);
		Ligne(x,90,x,250);
		for (var j=0; j<Taille(Tiges[i]); j++) {
			var taillecyl=6*Tiges[i][j];
			RectanglePlein(x-taillecyl,100+j*15,taillecyl*2,12,rgb(255-Tiges[i][j]*30,0,0));
		}
	}
}

function AnimeUnCran(dep1,dep2) {
	Initialiser();
	ShadowOn();
	Viewport(0,0,400,300);
	AfficheTiges();
}

function Animation(i) {
	if (i<Taille(SequenceDeplacements)) {
		AnimeUnCran();
		var depl=SequenceDeplacements[i];
		Tiges[depl[1]].push(Tiges[depl[0]].pop());
		setTimeout(function () {Animation(i+1)},150);
	} else {AnimeUnCran(); Ecrire('fini !');}
}	

Animation(0);
