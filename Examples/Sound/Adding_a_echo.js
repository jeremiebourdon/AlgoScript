

var data = ImportSon('Data/Daaaaa.wav');
var samplerate = SampleRate('Data/Daaaaa.wav');

// Ecrire et voilà le son en 8 bits non signé !

// Un petit effet d'echo !!!
var newlong=5*samplerate;
for(var i=Taille(data); i<newlong; i++) data[i]=128;

for (var i = 0; i < newlong-Math.floor(samplerate/4); i += 1) {
  data[i+Math.floor(samplerate/4)]=Math.floor(128+(0.8*(data[i]-128)+data[i+Math.floor(samplerate/4)]-128)) & 255;
}


Initialiser();
AfficherCourbe(data, false, false, 'red', '.', 1);

var newson = CreerSon(data, samplerate);

newson.play();

var sonoriginal = ChargerSon(readFile('Data/Daaaaa.wav'));
Stop('');
sonoriginal.play();


