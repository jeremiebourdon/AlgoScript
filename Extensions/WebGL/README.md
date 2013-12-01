WebGL extension
=======================
Several libraries allows to deal with 3D rendering (three.js, x3dom,...). Here, we present how Three.js can be used in AlgoScript.

# Using extensions with AlgoScript (general presentation)
Adding an extension to AlgoScript is quite simple. It suffises to add these lines to the local file AlgoScript.config. 

	[extension name]
	TITLE=Extension description
	ENABLED=yes or no or ask : Extension is enabled
	JSURL= url of the javascript code of the extension (0, 1 or several JSURL possible)
	CSSURL=url of the CSS code of the extension (0, 1 or several JSURL possible)

# Using Three.js/WebGL with AlgoScript

	[WebGL extension]
	TITLE=Extension pour WebGL (three.js)
	ENABLED=no
	JSURL=https://dl.dropboxusercontent.com/u/1961350/three.min.js

# Example

The presented example is derivated from the basic example of Three.js library.
The complete documentation of Three.js API can be found [here](http://threejs.org/ "three.js") 
