
var video = document.createElement("video");
video.setAttribute("width", 640);
video.setAttribute("height", 480);
var picture = document.createElement("img");
var isok = false;
window.navigator.mozGetUserMedia({
  video: true
}, function(stream) {
  video.src = window.URL.createObjectURL(stream);
  video.play();
  setTimeout('isok=true;', 2000);
}, function(err) {
  Ecrire(err);
});


setCanvasFont('helvetica', '50px', '');

function draw() {
  Initialiser();
  if (isok) {
    ctx.drawImage(video, 0, 0, 640, 480);

    // Recopie de l'image
    var imgData = ctx.getImageData(0, 0, 640, 480);
    var imgDatabis = ctx.createImageData(640, 480);;
    var lg = 640 * 4;
    for (var x = 0; x < 480; x++) {
      for (var y = 0; y < 640; y++) {
        var rvg = Math.floor((imgData.data[lg * x + y * 4] + imgData.data[lg * x + y * 4 + 1] + imgData.data[lg * x + y * 4 + 2]) / 3);
        imgDatabis.data[lg * x + (640 - y) * 4] = rvg;
        imgDatabis.data[lg * x + (640 - y) * 4 + 1] = rvg;
        imgDatabis.data[lg * x + (640 - y) * 4 + 2] = rvg;
        imgDatabis.data[lg * x + (640 - y) * 4 + 3] = imgData.data[lg * x + y * 4 + 3];
      }
    }

    ctx.putImageData(imgDatabis, 640, 0);



    Texte(10, 150, 'Bonjour le monde !!!', 'black');
  } else Texte(100, 100, 'Souriez !!!', 'red');
}

FrameRate = 20;
Loop(-1);
