var T=[]; for(var i=0; i<50; i++) T.push(i);
var p = new Parallel(T);

// Ce qu'on doit faire dans le "reduce" (ajouter les éléments du tableau).
function add(d) {
  return d[0] + d[1];
}

// La fonction qu'on va "mapper"
function factorial(n) {
  return n < 2 ? 1 : n * factorial(n - 1);
}

p.require(factorial);

// Approximation de e^10
p.map(function(n) {
  return Math.pow(10, n) / factorial(n);
}).reduce(add).then(function (d) {Ecrire('e^10 = '+d);});


Ecrire("L'approximation n'est pas si mauvaise car e^10="+Math.exp(10));