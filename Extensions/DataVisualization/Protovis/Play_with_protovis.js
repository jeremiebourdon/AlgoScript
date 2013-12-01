// Sortie sur "Sortie HTML". On définit une couleur de fond (par défaut c'est transparent.
document.getElementById('weboutput').style.backgroundColor='white';

// Création du jeu de données. Protovis intègre des fonctions pratiques permettant de créer des ranges de données
// et d'appliquer une même fonction à tous les éléments d'un tableau (.map)
var data = pv.range(4).map(function() {
    return pv.range(0, 10, .1).map(function(x) {
        return {x: x, y: Math.sin(x) + Math.random() * .5 + 2};
      });
  });


// Sizing and scales.
var w = 800,
    h = 400,
    x = pv.Scale.linear(0, 9.9).range(0, w),
    y = pv.Scale.linear(0, 14).range(0, h);

// Le panneau d'affichage. Il sera intégré à la division 'weboutput'
var vis = new pv.Panel()
    .canvas(document.getElementById('weboutput'))
    .width(w)
    .height(h)
    .bottom(20)
    .left(20)
    .right(10)
    .top(5);

// Traçage des axes X et Y et des échelles
vis.add(pv.Rule)
    .data(x.ticks())
    .visible(function(d) d)
    .left(x)
    .bottom(-5)
    .height(5)
  .anchor("bottom").add(pv.Label)
    .text(x.tickFormat);

vis.add(pv.Rule)
    .data(y.ticks(3))
    .bottom(y)
    .strokeStyle(function(d) d ? "rgba(128,128,128,.2)" : "#000")
  .anchor("left").add(pv.Label)
    .text(y.tickFormat);

// Ajout de la courbe
vis.add(pv.Layout.Stack)
    .layers(data)
    .x(function(d) x(d.x))
    .y(function(d) y(d.y))
  .layer.add(pv.Area);

// Mise à jour de l'affichage
vis.render();

  
