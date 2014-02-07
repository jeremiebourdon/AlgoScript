function InitGraphicWB() {
  ctxWB = document.getElementById('whiteboard').getContext('2d');
}

function EffacerWB() {
  ctxWB.clearRect(0, 0, size_canvas_x, size_canvas_y);
}


function InitialiserWB() {
  ctxWB.strokeStyle = 'black';
  ctxWB.fillStyle = 'black';
  ctxWB.lineWidth = 1;
  EffacerWB();
}

function ShadowOnWB() {
  ctxWB.shadowColor = 'black';
  ctxWB.shadowBlur = 3;
  ctxWB.shadowOffsetX = 3;
  ctxWB.shadowOffsetY = 3;
}

function ShadowOffWB() {
  ctxWB.shadowColor = 'black';
  ctxWB.shadowBlur = 0;
  ctxWB.shadowOffsetX = 0;
  ctxWB.shadowOffsetY = 0;
}


function LigneWB(x0, y0, x1, y1, color) {
  ctxWB.strokeStyle = color;
  ctxWB.beginPath();
  ctxWB.moveTo((x0), (y0));
  ctxWB.lineTo((x1), (y1));
  ctxWB.closePath();
  ctxWB.stroke();
}

function CercleWB(x0, y0, r, color) {
  EllipseWB(x0, y0, r, r, color);
}

function CerclePleinWB(x0, y0, r, color) {
  EllipsePleinWB(x0, y0, r, r, color);
}

function DrawImageWB(imageurl, x, y, w, h) {
  var monim = new Image();
  monim.src = imageurl.replace(/^[\s\n]+/g, '').replace(/[\s\n]+$/g, '');
  ctxWB.drawImage(monim, (x), (y), (w), (h));
}

function EllipseWB(x, y, w, h, color) {
  x -= w / 2;
  y -= h / 2;
  var kappa = .5522848;
  ox = (w / 2) * kappa, // control point offset horizontal
  oy = (h / 2) * kappa, // control point offset vertical
  xe = x + w, // x-end
  ye = y + h, // y-end
  xm = x + w / 2, // x-middle
  ym = y + h / 2; // y-middle
  ctxWB.strokeStyle = color;
  ctxWB.beginPath();
  ctxWB.moveTo((x), (ym));
  ctxWB.bezierCurveTo((x), (ym - oy), (xm - ox), (y), (xm), (y));
  ctxWB.bezierCurveTo((xm + ox), (y), (xe), (ym - oy), (xe), (ym));
  ctxWB.bezierCurveTo((xe), (ym + oy), (xm + ox), (ye), (xm), (ye));
  ctxWB.bezierCurveTo((xm - ox), (ye), (x), (ym + oy), (x), (ym));
  ctxWB.closePath();
  ctxWB.stroke();
}

function EllipsePleinWB(x, y, w, h, color) {
  x -= w / 2;
  y -= h / 2;
  var kappa = .5522848;
  ox = (w / 2) * kappa, // control point offset horizontal
  oy = (h / 2) * kappa, // control point offset vertical
  xe = x + w, // x-end
  ye = y + h, // y-end
  xm = x + w / 2, // x-middle
  ym = y + h / 2; // y-middle
  ctxWB.strokeStyle = color;
  ctxWB.fillStyle = color;
  ctxWB.beginPath();
  ctxWB.moveTo(x, ym);
  ctxWB.bezierCurveTo(x, (ym - oy), (xm - ox), (y), (xm), (y));
  ctxWB.bezierCurveTo((xm + ox), (y), (xe), (ym - oy), (xe), (ym));
  ctxWB.bezierCurveTo((xe), (ym + oy), (xm + ox), (ye), (xm), (ye));
  ctxWB.bezierCurveTo((xm - ox), (ye), (x), (ym + oy), (x), (ym));
  ctxWB.closePath();
  ctxWB.fill();
}

function RectangleWB(x, y, l, h, color) {
  ctxWB.strokeStyle = color;
  ctxWB.strokeRect(x, y, l, h)
}

function RectanglePleinWB(x, y, l, h, color) {
  ctxWB.fillStyle = color;
  ctxWB.fillRect(x, y, l, h);
}


function PointWB(x, y, color) {
  ctxWB.fillStyle = color;
  ctxWB.fillRect(x, y, 1, 1);
}

function TexteWB(x, y, ch, color) {
  ctxWB.fillStyle = color;
  ctxWB.fillText(ch, x, y);
}

function setCanvasFontWB(_fontname, _fontsize, _extrastyle) {
  ctxWB.font = _extrastyle + ' ' + _fontsize + ' ' + _fontname;
}

function AdapterTailleWB(x, y) {
  TailleBoite(document.getElementById('sortie'), x, y - 30);
  TailleBoite(document.getElementById('lecode'), x, 'auto');
  TailleBoite(editor.getTextArea(), x, 'auto');
  TailleBoite(document.getElementById('credits'), x, 'auto');
  TailleBoite(document.getElementById('GestionFichiers'), x, 'auto');
  TailleBoite(document.getElementById('resizecode'), x, y - 30);

  editor.getWrapperElement().style.position = 'absolute';
  editor.getWrapperElement().style.width = x + 'px';
  editor.getWrapperElement().style.height = (y - 30) + 'px';

  TailleBoite(document.getElementById('Aide'), x, y - 30);
  TailleBoite(document.getElementById('divtuto'), x, y - 30);
  TailleBoite(document.getElementById('mycanvas'), x, y - 30);
  size_canvas_x = x;
  size_canvas_y = y - 30;
  document.getElementById('mycanvas').width = x;
  document.getElementById('mycanvas').height = (y - 30);
  TailleBoite(document.getElementById('SaisieTexte'), x, 'auto');
  TailleBoite(document.getElementById('MonTexte'), x, y - 30);
  TailleBoite(document.getElementById('weboutput'), x, y - 30);
  if (x <= 419) {
    TailleBoite(document.getElementById('boutons'), x, 61);
    editor.getWrapperElement().style.top = '60px';
    document.getElementById('sortie').style.top = '60px';
    document.getElementById('GestionFichiers').style.top = '60px';
    document.getElementById('lecode').style.top = '60px';
    editor.getTextArea().style.top = '60px';
    document.getElementById('Aide').style.top = '60px';
    document.getElementById('credits').style.top = '60px';
    document.getElementById('divtuto').style.top = '60px';
    document.getElementById('mycanvas').style.top = '60px';
    document.getElementById('SaisieTexte').style.top = '60px';
    document.getElementById('weboutput').style.top = '60px';
  } else {
    TailleBoite(document.getElementById('boutons'), x, 31);
    editor.getWrapperElement().style.top = '30px';
    document.getElementById('sortie').style.top = '30px';
    document.getElementById('lecode').style.top = '30px';
    editor.getTextArea().style.top = '30px';
    document.getElementById('GestionFichiers').style.top = '30px';
    document.getElementById('Aide').style.top = '30px';
    document.getElementById('credits').style.top = '30px';
    document.getElementById('divtuto').style.top = '30px';
    document.getElementById('mycanvas').style.top = '30px';
    document.getElementById('SaisieTexte').style.top = '30px';
    document.getElementById('weboutput').style.top = '30px';
  }
  if (true) {
    TailleBoite(document.getElementById('whiteboard'), x, y - 30);
    document.getElementById('whiteboard').width = x;
    document.getElementById('whiteboard').height = (y - 30);
    if (x <= 419) {
      document.getElementById('whiteboard').style.top = '60px';
    } else {
      document.getElementById('whiteboard').style.top = '30px';
    }
  }
  if (ScreenNo != null) ctxWB.putImageData(TabScreens[ScreenNo], 0, 0);
}


function builtincapturemouseWB(e) {
  var y = e.layerY;
  var x=e.layerX;
  if (navigator.appVersion.indexOf('Chrome')>0 && (builtin_verrou==9)) x=(2*x-document.getElementById('whiteboard').width);
  MouseClickWB(x, y);
}

function builtincapturetouchWB(e) {
  // Ecrire('capturetouch '+ e.changedTouches[0].pageY);
  e.preventDefault();
  var decy = document.getElementById('whiteboard').style.top.replace('px', '');
  var y = (e.changedTouches[0].clientY - decy);
  var x=e.changedTouches[0].clientX;
  if (navigator.appVersion.indexOf('Chrome')>0 && (builtin_verrou==9)) x=(2*x-document.getElementById('whiteboard').width);
  if (builtinclickWB) MouseMoveWB(x, y);
}



function builtinMouseDownWB(e) {
  // Ecrire('MouseDown');
  e.preventDefault();
  builtinclickWB = true;
  var decy = document.getElementById('whiteboard').style.top.replace('px', '');
  if (typeof(e.changedTouches) != 'undefined') builtincapturemouseWB({
    layerX: e.changedTouches[0].clientX,
    layerY: (e.changedTouches[0].clientY - decy)
  });
  else builtincapturemouseWB(e);
}

function builtinMouseUpWB(e) {
  e.preventDefault();
  builtinclickWB = false;
}

function builtinMouseMoveEventWB(e) {
  e.preventDefault();
  var y = e.layerY;
  var x=e.layerX;
  if (navigator.appVersion.indexOf('Chrome')>0 && (builtin_verrou==9)) x=(2*x-document.getElementById('whiteboard').width);
  if (builtinclickWB) MouseMoveWB(x, y);
}


var builtinclickWB = false;
var sizecases = 25;
var PhotoNo = 0;
var sizepenWB = 5;
var oldColor = 0;
var oldPenSize = 20;
var TabExercices;// = ['', "Écrire la suite d'actions affectant à une variable l'année de naissance \nd'une personne puis calculant et affichant son âge au 31 décembre 2010.", "Écrire la suite d'actions affectant à une variable le mois et l'année de naissance \nd'une personne puis calculant et affichant son âge au 31 août 2010.", "Écrire la suite d'actions affectant à une variable le jour, le mois et l'année de naissance \nd'une personne puis calculant et affichant son âge au 14 juillet 2010.", ]
var ExoNo = 0;
var ScreenNo = 0;
var CouleursWB = ['white', 'black', 'blue', 'red', 'yellow', 'green', 'orange', 'purple'];
var CouleurCouranteWB = 1;
var old_xWB=0, old_yWB=0;
var TabScreens = [];

function CreateWB() {
  builtinclickWB = false;
  sizecases = 25;
  PhotoNo = 0;
  sizepenWB = 5;
  oldColor = 0;
  oldPenSize = 20;
  TabExercices = ['', "Écrire la suite d'actions affectant à une variable l'année de naissance \nd'une personne puis calculant et affichant son âge au 31 décembre 2010.", "Écrire la suite d'actions affectant à une variable le mois et l'année de naissance \nd'une personne puis calculant et affichant son âge au 31 août 2010.", "Écrire la suite d'actions affectant à une variable le jour, le mois et l'année de naissance \nd'une personne puis calculant et affichant son âge au 14 juillet 2010.", ]
  if (window.localStorage['Exercices_tous.txt']) TabExercices=readFile('Exercices_tous.txt').split('-*-*-*-*-*-');
  ExoNo = 0;
  ScreenNo = 0;
  CouleursWB = ['white', 'black', 'blue', 'red', 'yellow', 'green', 'orange', 'purple'];
  CouleurCouranteWB = 1;
  old_xWB, old_yWB;

  if (!document.getElementById('whiteboard')) {
    var mywhiteboard = document.createElement('canvas');

    mywhiteboard.id = 'whiteboard';
    mywhiteboard.width = 1000;
    mywhiteboard.height = 800;

    //  for(p in canvas.style) mywhiteboard.style[p]=canvas.style[p];
    //  mywhiteboard.style.zIndex=10000;
    var style = '-ms-transition: -ms-transform 1s ease; -moz-transition: -moz-transform 1s ease;-webkit-transition: -webkit-transform 1s ease;-o-transition: -o-transform 1s ease;transition: transform 1s ease;transform-origin: bottom right;-ms-transform-origin: bottom right;-moz-transform-origin: bottom right;-webkit-transform-origin: bottom right;-o-transform-origin: bottom right;';
    style += 'position: absolute;border: 1px solid;border-color: black;top: 30px;left: 0px;width: ' + window.innerWidth + 'px;height: ' + window.innerHeight + 'px;background-color: white;overflow: hidden;'
    style += 'visibility: hidden; z-index: 10000; cursor:crosshair;';
    mywhiteboard.style.cssText = style;
    document.body.appendChild(mywhiteboard);

    var leselect = document.getElementById('titre_onglet');
    leselect.options[leselect.options.length] = new Option('Whiteboard', 'whiteboard');

    document.getElementById('whiteboard').ontouchstart = builtinMouseDownWB;
    document.getElementById('whiteboard').ontouchmove = builtincapturetouchWB;
    document.getElementById('whiteboard').ontouchend = builtinMouseUpWB;
    document.getElementById('whiteboard').onmousedown = builtinMouseDownWB;
    document.getElementById('whiteboard').onmouseup = builtinMouseUpWB;
    document.getElementById('whiteboard').onmousemove = builtinMouseMoveEventWB;
    ctxWB = document.getElementById('whiteboard').getContext('2d');
    var fen = document.getElementById('boutons');
    fen.childNodes[1].childNodes[0].childNodes[0].childNodes[0].innerHTML += '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAC7UlEQVRIx+2VwW4cRRCGv6ruGbyeWccrBTGH7Eomh4AsIsLJihNOG8mScV4hyRP4YMlPYAGv4FcgUjiiiCjEspVcHDhazonDZllnl00yDmuvZ3qaw6w3HECAtRwiUVJJpVb1X3/9Xd0N77Ktrq7+90VkY2Pj0yRJfoqiGI/3zjl8UWCsPTuq9zIYDLJ2uz1vpyqV5oULdR5tbfHZlSty/frn5HmOiOD9GVkLHHQ6QafTuWoPDw8Pd3a2+fqrL7l06SMebW2RZRn+rOiA96Cq9Hq/vrZ4708Zn5wMMaoYo3+x0SMio+5KAgL8GRVrLd4XXhEpexqlqxpUDUYtL/svKVxBr9fnzZvfKIqCo8ERz/af4VyBMZZW63nJWJSTYTbGEC1xVUbMvPc4l6NGURXyPOPJk8cYY7h//zt+fPqUOIq59+09jo+PmZ6e5sGD7+l2u3RfvCAb5QeBRVVQVQTQoii4/Mll5ubm+GJlBcFjbcDe3h7t9i/kLudG8waNRgOApaUlRISjwYBri9fY2d7m3Owsd7+5y6vXr9jd3cUai9FSZuucY2FhgYcPf2BmZoaTPENVSZKEmzdXiKIIgPTndKwtAuF7IQcHB1xdXMQY5dbtWzxvtfjw4kWyLCtlEsGKCGmaEoYBokI1ruK9p16vk+c5xhjiKGb+4/my8AcJ58+/TxgENOoNkiQhDEIA6vUGLncYNehpB+VUwHA4pDpzDmN0PCHGhLiiQI0SBHa09jYGqJipcfzH6ZNRqKpKmqasra3R6/Uw1iKqiOrooATnXBn/Q1dVRLSUyHtPFMcsLy9Tq82iIqBvmYShEhL8y5ssY4kUYLpSYXNzk9psDREd34WzuohidNQBQBTHrK+vE4YBqjKJNxQ5PWTvPUEQcPvOHYqimMwTLVJKDdgoiqZ8UaAiqDET+we891Sr1cgOh8PO/v4+aZpO9KNptVo453rSbDbDWq22mKZpLc/ziWgUBIGJ47jb7/cf87/9nf0O6qIdPzkd9PgAAAAASUVORK5CYII=" alt="[..] WB" onclick="CreateWB();"  style="color:green; width:24px; height: 24px;" class="fleche"/><div><div>Launch the WhiteBoard</div></div>'
    MontreFenetre(fenetre_courante);
  }

  TabScreens[0] = ctxWB.getImageData(0, 0, window.innerWidth, window.innerHeight);
  AdapterTailleWB(window.innerWidth, window.innerHeight);
  InitWB();
  sizepenWB = 2, CouleurCouranteWB = 1;
  MouseClickWB(5, sizecases + 5);
  EcrireToutLeTexte(TabExercices[ExoNo], 60, 20);
  TabScreens = [];
  for (var i = 0; i < 5; i++) TabScreens[i] = ctxWB.getImageData(0, 0, window.innerWidth, window.innerHeight);
  window.onresize = function() {
    AdapterTailleWB(window.innerWidth, window.innerHeight);
  };

}


function EcrireToutLeTexte(ch, x, y) {
  var TaillePolice = Math.ceil(sizecases * 4 / 5);
  setCanvasFontWB('helvetica', TaillePolice + 'px', '');
  ShadowOffWB();
  var T = ch.split('\n');
  for (var i = 0; i < Taille(T); i++) {
    TexteWB(x, y + i * TaillePolice + 1, T[i], 'black');
  }

  ShadowOnWB();
  setCanvasFontWB('helvetica', '10px', '');
}

function EcrireToutLeTexteHTML(ch, x, y) {
  // ne fonctionne pas sous chrome -> cas particulier....
   if (navigator.appVersion.indexOf('Chrome')>0) {EcrireToutLeTexte(ch, x, y); return;}
  rasterizeHTML.drawHTML(ch, function (image) {
    ShadowOffWB();
    ctxWB.drawImage(image, x, y);
    ShadowOnWB();
  });
/*
  var data = "<svg xmlns='http://www.w3.org/2000/svg' width='"+window.innerWidth+"' height='"+window.innerHeight+"'>" + "<foreignObject width='100%' height='100%'>" + "<div xmlns='http://www.w3.org/1999/xhtml' style='font-size:20px'>" + ch + "</div>" + "</foreignObject>" + "</svg>";
  var DOMURL = self.URL || self.webkitURL || self;
  var img = new Image();
  var svg = new Blob([data], {
    type: "image/svg+xml;charset=utf-8"
  });
  var url = DOMURL.createObjectURL(svg);
  img.onload = function() {
    ShadowOffWB();
    ctxWB.drawImage(img, x, y);
    ShadowOnWB();

    DOMURL.revokeObjectURL(url);
  };
  img.src = url;
  */
}

function InitWB() {
  setCanvasFontWB('helvetica', '10px', '');

  InitialiserWB();
  RectanglePleinWB(0, 0, size_canvas_x, size_canvas_y, 'white');

  ctxWB.lineCap = "round";
  // Trace palette
  ShadowOffWB();

  RectanglePleinWB(0, 0, 50, size_canvas_y, rgb(200, 200, 200));
  ShadowOnWB();
  for (var i = 0; i < Taille(CouleursWB); i = i + 1) {
    //EllipsePleinWB(5 + 25 - 5, 5 + sizecases * i + sizecases / 2 - 5, 40, sizecases * 4 / 5, CouleursWB[i]);
    RectanglePleinWB(2, 2 + sizecases * i, 40, sizecases * 4 / 5, CouleursWB[i]);
  }

}


function MouseClickWB(x, y) {
  if (x < 50) {
    var nb = Math.floor(y / sizecases);
    if (nb < 8) CouleurCouranteWB = nb;
    if (nb == 8) {
      var tmp = CouleurCouranteWB;
      CouleurCouranteWB = oldColor;
      oldColor = tmp;

      tmp = sizepenWB;
      sizepenWB = oldPenSize;
      oldPenSize = tmp;
    } else {
      if (nb == 9) {
        if (x < 25) {
          if (sizepenWB > 0) sizepenWB--;
        } else {
          if (sizepenWB < 100) sizepenWB++;
        }
      }
      if (nb == 10) {
        InitWB();
      }
      if (nb == 11) {
/*
var imgname = Saisie('Image Name');
        var img_x = SaisieEntier('Image Position X');
        var img_y = SaisieEntier('Image Position Y');
        var monim = new Image();
        imageurl = readFile(imgname);
        monim.src = imageurl.replace(/^[\s\n]+/g, '').replace(/[\s\n]+$/g, '');
        ctxWB.drawImage(monim, img_x, img_y, monim.width, monim.height);
        //DrawImageWB(imgname, img_x, img_y);
*/
        if (x < 25) {
          if (ExoNo > 0) ExoNo--;
          else ExoNo = Taille(TabExercices) - 1;
        } else {
          if (ExoNo < Taille(TabExercices) - 1) ExoNo++;
          else ExoNo = 0;
        }
        InitWB();
        //EcrireToutLeTexte(TabExercices[ExoNo], 60, 20);
		EcrireToutLeTexteHTML(TabExercices[ExoNo], 60, 0);
      }
      if (nb == 12) {
        TabScreens[ScreenNo] = ctxWB.getImageData(0, 0, window.innerWidth, window.innerHeight);
        if (x < 25) {
          if (ScreenNo > 0) ScreenNo--;
        } else {
          if (ScreenNo < Taille(TabScreens) - 1) //TabScreens[ScreenNo + 1] = (ctxWB.getImageData(0, 0, window.innerWidth, window.innerHeight));
          ScreenNo++;
          else ScreenNo = 0;
        }
        //Ecrire(TabScreens[ScreenNo]);
        ctxWB.putImageData(TabScreens[ScreenNo], 0, 0);



        // window.open(document.getElementById('whiteboard').toDataURL());
      }
      if (nb == 13) {
        window.open(document.getElementById('whiteboard').toDataURL(), 'Photo' + PhotoNo, 'width=100,height=100,left=1700').blur();
        window.focus();
        PhotoNo++;
      }
      if (nb == 14) {
        TabScreens[ScreenNo] = ctx.getImageData(0, 0, window.innerWidth-50, window.innerHeight);
        ctxWB.putImageData(TabScreens[ScreenNo], 50, 0);
        TabScreens[ScreenNo] = ctxWB.getImageData(0, 0, window.innerWidth, window.innerHeight);

      }

    }

    ShadowOffWB();
    RectanglePleinWB(0, 0, 50, size_canvas_y, rgb(200, 200, 200));
    ShadowOnWB();
    for (var i = 0; i < Taille(CouleursWB); i = i + 1) {
      // EllipsePleinWB(5 + 25 - 5, 5 + sizecases * i + sizecases / 2 - 5, 40, sizecases * 4 / 5, CouleursWB[i]);
      RectanglePleinWB(2, 2 + sizecases * i, 40, sizecases * 4 / 5, CouleursWB[i]);
    }
    TexteWB(5, sizecases * 8 + 15, 'BRUSH', 'black');
    TexteWB(5, sizecases * 9 + 10, 'SIZE', 'black');
    TexteWB(5, sizecases * 9 + 20, '- ', 'black');
    TexteWB(17, sizecases * 9 + 20, sizepenWB, 'black');
    TexteWB(35, sizecases * 9 + 20, ' +', 'black');

    TexteWB(5, sizecases * 10 + 15, 'CLEAN', 'black');

    TexteWB(5, sizecases * 11 + 10, 'EX NUM', 'black');
    TexteWB(5, sizecases * 11 + 20, '- ', 'black');
    TexteWB(17, sizecases * 11 + 20, ExoNo, 'black');
    TexteWB(35, sizecases * 11 + 20, ' +', 'black');
    TexteWB(5, sizecases * 12 + 10, 'SCREEN', 'black');
    TexteWB(5, sizecases * 12 + 20, '- ', 'black');
    TexteWB(17, sizecases * 12 + 20, ScreenNo, 'black');
    TexteWB(35, sizecases * 12 + 20, ' +', 'black');
    TexteWB(5, sizecases * 13 + 15, 'PHOTO', 'black');
    TexteWB(5, sizecases * 14 + 15, 'GET CV', 'black');


    //    TexteWB(5, 50 * 11 + 20, 'IMG', 'black');
/*
RectanglePleinWB(0, 50 * CouleurCouranteWB, 50, 50, rgb(200, 200, 200));
    RectanglePleinWB(5, 5 + 50 * CouleurCouranteWB, 40, 40, CouleursWB[CouleurCouranteWB]);
    RectanglePleinWB(0, 50 * CouleurCouranteWB, 50, 50, rgb(200, 100, 100));
    RectanglePleinWB(5, 5 + 50 * CouleurCouranteWB, 40, 40, CouleursWB[CouleurCouranteWB]);

*/
    ShadowOffWB();
    RectanglePleinWB(0, sizecases * CouleurCouranteWB, 50, sizecases, rgb(200, 200, 200));
    //    RectanglePleinWB(0, sizecases * CouleurCouranteWB, 50, sizecases, rgb(200, 100, 100));
    RectanglePleinWB(0, sizecases * CouleurCouranteWB, 50, sizecases, rgb(200, 200, 200));
    //EllipsePleinWB(5 + 25 - 5, 5 + sizecases * CouleurCouranteWB + sizecases / 2 - 5, 40, sizecases * 4 / 5, CouleursWB[CouleurCouranteWB]);
    ctxWB.shadowColor = 'black';
    ctxWB.shadowBlur = 1;
    ctxWB.shadowOffsetX = 1;
    ctxWB.shadowOffsetY = 1;

    RectanglePleinWB(4, 4 + sizecases * CouleurCouranteWB, 40, sizecases * 4 / 5, CouleursWB[CouleurCouranteWB]);
    ShadowOnWB();
    //    CerclePleinWB(5 + 25 - 5, 5 + sizecases * CouleurCouranteWB + sizecases/2 - 5, 40, CouleursWB[CouleurCouranteWB]);
  } else {
    //ctxWB.lineWidth = sizepenWB;
    ShadowOffWB();
    CerclePleinWB(x - 2, y - 2, sizepenWB, CouleursWB[CouleurCouranteWB]);
    ShadowOnWB();
    old_xWB = x;
    old_yWB = y;
    ctxWB.lineWidth = 1;
  }
}

function MouseMoveWB(x, y) {
  if (x >= 50 + sizepenWB) {
    if (sizepenWB <= 10) {
      ctxWB.lineWidth = sizepenWB;
      //Ecrire([x,y]);
      ShadowOffWB();
      LigneWB(old_xWB - 2, old_yWB - 2, x - 2, y - 2, CouleursWB[CouleurCouranteWB]);
      ShadowOnWB();
      old_xWB = x;
      old_yWB = y;
      ctxWB.lineWidth = 1;
    } else {
      ShadowOffWB();
      CerclePleinWB(x - 2, y - 2, sizepenWB, sizepenWB, CouleursWB[CouleurCouranteWB]);
      ShadowOnWB();
      old_xWB = x;
      old_yWB = y;
    }
  }
}


//CreateWB();

function LaunchSlides() {
// Afficher les slides du cours dans l'interface, c'est possible !!!
// Executez-moi !!!

document.getElementById('titre_onglet').options[4].text='Slides';

var Quelcours=SaisieEntier('1) Cours algorithmique 1\n2) Cours algorithmique 2\n3) Cours algorithmique 3\n4) Cours algorithmique 4\nVeuillez saisir le numéro du cours');
var cours;

switch (Quelcours) {
  case 1:cours='Cours1.html'; break;
  case 2:cours='Cours2.html'; break;
  case 3:cours='Cours3.html'; break;
  case 4:cours='Cours4.html'; break;
}

document.getElementById('frameweboutput').src='https://dl.dropboxusercontent.com/u/1961350/Projets/'+cours;

}

function plot(f,deb,fin) {
  var nbpoints=100;
  var T=[];
  for(var i=0; i<=100; i++) {
    var x=deb+(fin-deb)/nbpoints*i;
    T[i]=[x,f(x)];
  }
  AfficherCourbe(T,false,false,'red','-',1);
}


function CreateSlides() {

document.getElementById('titre_onglet').options[4].text='Slides';
    var fen = document.getElementById('boutons');
    fen.childNodes[1].childNodes[0].childNodes[0].childNodes[0].innerHTML += '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAKOWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAEjHnZZ3VFTXFofPvXd6oc0wAlKG3rvAANJ7k15FYZgZYCgDDjM0sSGiAhFFRJoiSFDEgNFQJFZEsRAUVLAHJAgoMRhFVCxvRtaLrqy89/Ly++Osb+2z97n77L3PWhcAkqcvl5cGSwGQyhPwgzyc6RGRUXTsAIABHmCAKQBMVka6X7B7CBDJy82FniFyAl8EAfB6WLwCcNPQM4BOB/+fpFnpfIHomAARm7M5GSwRF4g4JUuQLrbPipgalyxmGCVmvihBEcuJOWGRDT77LLKjmNmpPLaIxTmns1PZYu4V8bZMIUfEiK+ICzO5nCwR3xKxRoowlSviN+LYVA4zAwAUSWwXcFiJIjYRMYkfEuQi4uUA4EgJX3HcVyzgZAvEl3JJS8/hcxMSBXQdli7d1NqaQffkZKVwBALDACYrmcln013SUtOZvBwAFu/8WTLi2tJFRbY0tba0NDQzMv2qUP91829K3NtFehn4uWcQrf+L7a/80hoAYMyJarPziy2uCoDOLQDI3fti0zgAgKSobx3Xv7oPTTwviQJBuo2xcVZWlhGXwzISF/QP/U+Hv6GvvmckPu6P8tBdOfFMYYqALq4bKy0lTcinZ6QzWRy64Z+H+B8H/nUeBkGceA6fwxNFhImmjMtLELWbx+YKuGk8Opf3n5r4D8P+pMW5FonS+BFQY4yA1HUqQH7tBygKESDR+8Vd/6NvvvgwIH554SqTi3P/7zf9Z8Gl4iWDm/A5ziUohM4S8jMX98TPEqABAUgCKpAHykAd6ABDYAasgC1wBG7AG/iDEBAJVgMWSASpgA+yQB7YBApBMdgJ9oBqUAcaQTNoBcdBJzgFzoNL4Bq4AW6D+2AUTIBnYBa8BgsQBGEhMkSB5CEVSBPSh8wgBmQPuUG+UBAUCcVCCRAPEkJ50GaoGCqDqqF6qBn6HjoJnYeuQIPQXWgMmoZ+h97BCEyCqbASrAUbwwzYCfaBQ+BVcAK8Bs6FC+AdcCXcAB+FO+Dz8DX4NjwKP4PnEIAQERqiihgiDMQF8UeikHiEj6xHipAKpAFpRbqRPuQmMorMIG9RGBQFRUcZomxRnqhQFAu1BrUeVYKqRh1GdaB6UTdRY6hZ1Ec0Ga2I1kfboL3QEegEdBa6EF2BbkK3oy+ib6Mn0K8xGAwNo42xwnhiIjFJmLWYEsw+TBvmHGYQM46Zw2Kx8lh9rB3WH8vECrCF2CrsUexZ7BB2AvsGR8Sp4Mxw7rgoHA+Xj6vAHcGdwQ3hJnELeCm8Jt4G749n43PwpfhGfDf+On4Cv0CQJmgT7AghhCTCJkIloZVwkfCA8JJIJKoRrYmBRC5xI7GSeIx4mThGfEuSIemRXEjRJCFpB+kQ6RzpLuklmUzWIjuSo8gC8g5yM/kC+RH5jQRFwkjCS4ItsUGiRqJDYkjiuSReUlPSSXK1ZK5kheQJyeuSM1J4KS0pFymm1HqpGqmTUiNSc9IUaVNpf+lU6RLpI9JXpKdksDJaMm4ybJkCmYMyF2TGKQhFneJCYVE2UxopFykTVAxVm+pFTaIWU7+jDlBnZWVkl8mGyWbL1sielh2lITQtmhcthVZKO04bpr1borTEaQlnyfYlrUuGlszLLZVzlOPIFcm1yd2WeydPl3eTT5bfJd8p/1ABpaCnEKiQpbBf4aLCzFLqUtulrKVFS48vvacIK+opBimuVTyo2K84p6Ss5KGUrlSldEFpRpmm7KicpFyufEZ5WoWiYq/CVSlXOavylC5Ld6Kn0CvpvfRZVUVVT1Whar3qgOqCmrZaqFq+WpvaQ3WCOkM9Xr1cvUd9VkNFw08jT6NF454mXpOhmai5V7NPc15LWytca6tWp9aUtpy2l3audov2Ax2yjoPOGp0GnVu6GF2GbrLuPt0berCehV6iXo3edX1Y31Kfq79Pf9AAbWBtwDNoMBgxJBk6GWYathiOGdGMfI3yjTqNnhtrGEcZ7zLuM/5oYmGSYtJoct9UxtTbNN+02/R3Mz0zllmN2S1zsrm7+QbzLvMXy/SXcZbtX3bHgmLhZ7HVosfig6WVJd+y1XLaSsMq1qrWaoRBZQQwShiXrdHWztYbrE9Zv7WxtBHYHLf5zdbQNtn2iO3Ucu3lnOWNy8ft1OyYdvV2o/Z0+1j7A/ajDqoOTIcGh8eO6o5sxybHSSddpySno07PnU2c+c7tzvMuNi7rXM65Iq4erkWuA24ybqFu1W6P3NXcE9xb3Gc9LDzWepzzRHv6eO7yHPFS8mJ5NXvNelt5r/Pu9SH5BPtU+zz21fPl+3b7wX7efrv9HqzQXMFb0ekP/L38d/s/DNAOWBPwYyAmMCCwJvBJkGlQXlBfMCU4JvhI8OsQ55DSkPuhOqHC0J4wybDosOaw+XDX8LLw0QjjiHUR1yIVIrmRXVHYqLCopqi5lW4r96yciLaILoweXqW9KnvVldUKq1NWn46RjGHGnIhFx4bHHol9z/RnNjDn4rziauNmWS6svaxnbEd2OXuaY8cp40zG28WXxU8l2CXsTphOdEisSJzhunCruS+SPJPqkuaT/ZMPJX9KCU9pS8Wlxqae5Mnwknm9acpp2WmD6frphemja2zW7Fkzy/fhN2VAGasyugRU0c9Uv1BHuEU4lmmfWZP5Jiss60S2dDYvuz9HL2d7zmSue+63a1FrWWt78lTzNuWNrXNaV78eWh+3vmeD+oaCDRMbPTYe3kTYlLzpp3yT/LL8V5vDN3cXKBVsLBjf4rGlpVCikF84stV2a9021DbutoHt5turtn8sYhddLTYprih+X8IqufqN6TeV33zaEb9joNSydP9OzE7ezuFdDrsOl0mX5ZaN7/bb3VFOLy8qf7UnZs+VimUVdXsJe4V7Ryt9K7uqNKp2Vr2vTqy+XeNc01arWLu9dn4fe9/Qfsf9rXVKdcV17w5wD9yp96jvaNBqqDiIOZh58EljWGPft4xvm5sUmoqbPhziHRo9HHS4t9mqufmI4pHSFrhF2DJ9NProje9cv+tqNWytb6O1FR8Dx4THnn4f+/3wcZ/jPScYJ1p/0Pyhtp3SXtQBdeR0zHYmdo52RXYNnvQ+2dNt293+o9GPh06pnqo5LXu69AzhTMGZT2dzz86dSz83cz7h/HhPTM/9CxEXbvUG9g5c9Ll4+ZL7pQt9Tn1nL9tdPnXF5srJq4yrndcsr3X0W/S3/2TxU/uA5UDHdavrXTesb3QPLh88M+QwdP6m681Lt7xuXbu94vbgcOjwnZHokdE77DtTd1PuvriXeW/h/sYH6AdFD6UeVjxSfNTws+7PbaOWo6fHXMf6Hwc/vj/OGn/2S8Yv7ycKnpCfVEyqTDZPmU2dmnafvvF05dOJZ+nPFmYKf5X+tfa5zvMffnP8rX82YnbiBf/Fp99LXsq/PPRq2aueuYC5R69TXy/MF72Rf3P4LeNt37vwd5MLWe+x7ys/6H7o/ujz8cGn1E+f/gUDmPP8usTo0wAAAAZiS0dEAP8A/wD/oL2nkwAAA+5JREFUSMelVU1oXFUU/s59d2Yy2kwmTCe1oYkRqkgWLRSt0oWiQkTqDxWhdqEbF4Iglog7ERdm4dYqWBGpK0EEETeh/iAuQlpoIRhBQwqxJOnEScok7bzk3XvPOS4ybzqZTILRAxfeuz/nfOc737mXAODatWtd+Xz+PWPMy8aYXgAgIuzFVDUd10Xks/7+/k/m5uZAV69ezZbL5bUoirLGGFJV/E9TESFmvjg4OPi0LRaLH6pqTkSgqhCRPaNvs/TwyOzs7GnrvX/FGIOUFiKCiOzda+NsyoCIqHPutE2SpJTL5WCMafKYbm7nuNVZp7XWPcxMcRwftCna1KmNDBaXqli6uYa1dYckCKIowv7uPIbv68fqrTr++OsG1j0DFCGftejdl8PBUg9KxR54vpO9iMAaY2CMQRRFuB3HePX9T/HYow/jxJH7cWSwB735LIIIpuZX8ebnP+JAVMdbZ06i1J0HVLF0K8HvCzV8Pf4b5hcrOPfGc8h3dSGKok3Q09PTWiwWEUURXvjoF4y9dAxHB3oBKFoFRUT45qdJnBk5ARe4jX8gYy3ePv897IHD+ODZB7CxsYFqtTppiQhpFmosiKJmPdrFREBj73YpG2OgolCTgWnQbYy5QxEZA3YBBG0G6KgWs3mwcwCBBgalPolg0+ISAPF+V6WQoqPC0vyUBeJDEz0RYQsUdh4quqPOVaWlj7CtDsq8BSQA2C0BEgfdoclUdcfgTVmGAG0PwMybnUsEThIwc7Phtjlghqp07HQRBQcGEgcRQerXighCCIhUETYSsPcIIXREyCEgBAYzb18zBPEekjgwc3PYEAJCCFBVcOIQfIAwN4oJaIN1VYADQ4Qb2enmfGMtMIN9ACcO3nv4BlCbfogI2HnE8TouXZnCD79ewtSfi1i97QFr8dDwAA7dsx+Xr0zh4wvfYXFlAzabwaFyAceGh/DMk4/AOQc4hxBCMwBNTExosVgEkcHjr18AZ7qhcRWWV5E1gsg0EIrC5wc2mye+Dtsy75gQoh7Q3X04/mAZ584+gSRJsLy8PGmdc3DOwVqLL949CYXZJKVN6z9fnsXSakBgxemnRpDN2HaZQaG4K2ebFHnvYeM4Rj6fh6riUF/3jhJ87fmjzZg+7P5eOOewvr6OOI5hq9Xq35lMpq9QKHS8AlJrk/euxsyo1Wq6srKyYCuVypdE9A4AdHV17Rrk3zqv1+taqVSoUql8RaVSKTc6OnqjXC4XC4UCstks/dc3WUSQJInWajVaWFj4dmxs7EUCcC8RHT516tTZoaGh47lcbh8Ao6rUevE0/lvvptZWVyISAFKv12/OzMxcHB8fP09E8/8AWERNIjoA3WsAAAAASUVORK5CYII=" alt="[..] Slides" onclick="LaunchSlides();"  style="color:green; width:24px; height: 24px;" class="fleche"/><div><div>Launch the Slides</div></div>'

}

window.addEventListener('load',function () {CreateWB(); CreateSlides();},false);
//var TabExercices=readFile('Exercices_tous.txt').split('-*-*-*-*-*-');

