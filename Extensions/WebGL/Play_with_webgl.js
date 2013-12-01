// Quelques paramètres
var angularSpeed = 0.2;
var lastTime = 0;

var renderer, scene, cylinder, ambientLight, directionalLight, camera, icosaedre;

// Le "renderer" est le conteneur qui contiendra la scene 3D

renderer = new THREE.WebGLRenderer();
  
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.style.position='absolute';
renderer.domElement.style.top='0px';
renderer.domElement.style.left='0px';
renderer.domElement.style.backgroundColor='white';

// Ce conteneur doit être ajouté à une division qui existe. Ici, 'weboutput' est la division correspondant à Sortie HTML.
while (document.getElementById('weboutput').hasChildNodes()) {
    document.getElementById('weboutput').removeChild(document.getElementById('weboutput').lastChild);
}
document.getElementById('weboutput').innerHTML='';
document.getElementById('weboutput').appendChild(renderer.domElement);

// Avant de voir la scene, il faut ajouter une camera
camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.z = 700;

// On créé la scene
scene = new THREE.Scene();

// On ajoute des éléments (ici un cylindre) avec ses paramètres de texture et couleur.
cylinder = new THREE.Mesh(new THREE.CylinderGeometry(100, 100, 400, 50, 50, false), new THREE.MeshPhongMaterial({
  // light
  specular: '#a9fcff',
  // intermediate
  color: '#00abb1',
  // dark
  emissive: '#006063',
  shininess: 100
}));
cylinder.overdraw = true;
//scene.add(cylinder);

icosaedre = new THREE.Mesh(new THREE.IcosahedronGeometry(100), new THREE.MeshPhongMaterial({
  // light
  specular: '#ff1010',
  // intermediate
  color: '#00ff00',
  // dark
  emissive: '#006063',
  shininess: 100
}));
icosaedre.overdraw = true;
scene.add(icosaedre);

// Il faut aussi ajouter de la lumière
ambientLight = new THREE.AmbientLight(0x222222);
scene.add(ambientLight);

// directional lighting
directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(1, 1, 1).normalize();
scene.add(directionalLight);

// Pour afficher la scene, 
renderer.render(scene, camera);

// On peut aussi animer la scene
function animate() {
  // update
  var time = (new Date()).getTime();
  var timeDiff = time - lastTime;
  var angleChange = angularSpeed * timeDiff * 2 * Math.PI / 1000;
  cylinder.rotation.x += angleChange;
  cylinder.rotation.y += 2*angleChange;
  cylinder.rotation.z += angleChange;
  lastTime = time;

  // render
  renderer.render(scene, camera);

  // request new frame
  requestAnimationFrame(function() {
    animate();
  });
}

animate();

