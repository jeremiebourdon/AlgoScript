

// Appuyez sur la touche exécuter [>]
// Indentez votre code avec [⇶]

// Voici une petite visite guidée en attendant...
// Quelques exemples
// Se placer sur la fenêtre CodeJS
MontreFenetre(0);

// 1] Utiliser la bibliothèque graphique
// Aller directement sur la sortie graphique
MontreFenetre(2);
// Effacer l'écran
Initialiser();

// Lui donner une résolution indépendante de la taille de l'écran
Viewport(0, 0, 600, 400, 1);

// Quelques Rectangles
for (var i = 0; i < 20; i++) {
  var x = Hasard(600);
  var y = Hasard(400);
  RectanglePlein(x, y, Hasard(600 - x), Hasard(400 - y), rgb(Hasard(256), Hasard(256), Hasard(256)));
}
// Quelques Lignes
for (var i = 0; i < 100; i++) {
  Ligne(Hasard(600), Hasard(400), Hasard(600), Hasard(400), rgb(Hasard(256), Hasard(256), Hasard(256)));
}

alert('Quelques dessins\nContinuez la démonstration');

// 2] Utiliser la bibliothèque graphique via la tortue
Initialiser();
Viewport(0, 0, 600, 400, 1);

// Placer la tortue au centre de l'écran
Deplacer(100, 100);
for (var i = 0; i < 5; i++) {
  Avancer(100);
  Droite(720 / 5);
}

alert('Quelques dessins avec la tortue\nContinuez la démonstration');

// 3] Utiliser la bibliothèque graphique pour tracer des courbes
var data1 = new Array();
var data2 = new Array();
for (var i = 0; i < 360; i++) {
  data1[i] = Math.sin(4 * i * Math.PI / 180);
  data2[i] = 1.5 * Math.sin(6 * i * Math.PI / 180);
}
AfficherCourbe(data2);
AfficherCourbe(data1, true, false, '.', 'green', 2);

alert('Deux courbes\nContinuez la démonstration');


// 4] Utiliser la bibliothèque de son (sauf sur smartphones et tablettes)
MontreFenetre(-2);
// Charger un son à partir de son url
var unson = ChargerSon('http://dl.dropbox.com/u/1961350/jazzy.wav');
// Jouer le son
unson.play();

alert('Attendez la fin de la musique et\nContinuez la démonstration');

// Créer un son de toute pièce, par exemple un LA (440Hz), fréquence d'échantillonnage 11025Hz
var data = new Array();
for (var i = 0; i < 11025; i++) data[i] = Math.round(128 + 127 * Math.sin(i * 440 / 11025 * 2 * Math.PI));
var unautreson = CreerSon(data, 11025);
// Jouer ce son
unautreson.play();

alert('Attendez la fin du LA et\nContinuez la démonstration');

// 5] Utiliser la sortie HTML
// Aller automatiquement sur la fenêtre de sortie HTML
MontreFenetre(4);

alert('Continuez la démonstration');
HTMLoutput('<h1>Venez voir ce qui sort sur la sortie HTML</h1>');


alert('Continuez la démonstration');

// Taper maintenant quelques lignes d'HTML dans l'onglet "Entrée Texte", elles seront affichées par la commande
HTMLoutput(texte_a_etudier());

alert('Continuez la démonstration');

MontreFenetre(-3);
Ecrire('Allez voir sur le Memento pour d\'autres démos !');

setTimeout('MontreFenetre(-1);', 1500);

