var data = [];

function KarplusStrong(freq, attenuation) {
  var Decalage = Math.floor(22050 / freq);
  for (var i = 0; i < Decalage; i++) {
    data[i] = Hasard(256);
  }
  for (var i = Decalage; i < 22050 / 3; i++) {
    data[i] = 128 + Math.floor(attenuation * ((data[i - Decalage] + data[i - Decalage + 1]) / 2 - 128));
  }
  return CreerSon(data, 22050);
}






var Melodie = [440, 880, 440, 660];
var i = 0;

function draw() {
  // KarplusStrong(Melodie[i % Taille(Melodie)], 0.995).play();
  // SyntheseFM(Melodie[i % Taille(Melodie)], 2).play();
  SyntheseAdditive(Melodie[i % Taille(Melodie)], 50).play();
  i++;
}

FrameRate = 1;

Loop(5000);

//SyntheseAdditive(440, 1000).play();


function enveloppe(t) {
  if (t < 5000 / 2) return ((t / 22050) * Math.pow(1 - t / 22050, 8) / 0.045);
  else if (t < 25000 / 2) return ((5000 / 44100) * Math.pow(1 - 5000 / 44100, 8) / 0.045);
  else
  return (((t - 20000 / 2) / 22050) * Math.pow(1 - (t - 20000 / 2) / 22050, 8) / 0.045);
}

function NoteFM(t, freq, A, I, K) {
  return A * Math.sin(freq * 360 * t / 22050 * 3.14 / 180 + I * Math.sin(K * freq * 360 * t / 22050 * 3.14 / 180));
}

function SyntheseFM(freq, K) {
  var A = 1,
   I = 0.5;
  // var K=Math.sqrt(2); // cloche
  // var K=1; // piano
  // var K=2; // clarinette
  // var K=0.5; // harmonique
  var amplitude = 0;
  for (var t = 0; t < 22050; t++) {
    var nb = NoteFM(t, freq, A, I, K);
    data[t] = nb * enveloppe(t);
    if (amplitude < Math.abs(data[t])) amplitude = Math.abs(data[t]);
  }
  for (var t = 0; t < 22050; t++) {
    data[t] = Math.round(128 + 127 * data[t] / amplitude);
  }
  return CreerSon(data, 22050);
}


function NoteSin(t, freq) {
  return Math.sin(freq * t / 11025 * 3.14);
}

function Harmonique(k) {
  return 1 / k;
}

function SyntheseAdditive(freq, profondeur) {
  var amplitude = 0;
  for (var t = 0; t < 22050; t++) {
    var nb = 0;
    for (var k = 1; k<profondeur ; k *= 2) {
      nb += NoteSin(t, freq * k) * Harmonique(k);
    }
    data[t] = nb * enveloppe(t);
    if (amplitude < Math.abs(data[t])) amplitude = Math.abs(data[t]);
  }
  for (var t = 0; t < 22050; t++) {
    data[t] = Math.round(128 + 127 * data[t] / amplitude);
  }
  return CreerSon(data, 22050);
}