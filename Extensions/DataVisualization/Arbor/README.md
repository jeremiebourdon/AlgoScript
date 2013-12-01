Arbor extension
=======================
Several libraries allows to deal with graph drawing (arbor, Dracula,...). Here, we present how arbor.js can be used in AlgoScript.

# Using extensions with AlgoScript (general presentation)
Adding an extension to AlgoScript is quite simple. It suffises to add these lines to the local file AlgoScript.config. 

	[extension name]
	TITLE=Extension description
	ENABLED=yes or no or ask : Extension is enabled
	JSURL= url of the javascript code of the extension (0, 1 or several JSURL possible)
	CSSURL=url of the CSS code of the extension (0, 1 or several JSURL possible)

# Using Arbor with AlgoScript

	[Arbor extension]
	TITLE=Extension pour la visualisation de graphes (arbor.js)
	ENABLED=yes
	JSURL=https://dl.dropboxusercontent.com/u/1961350/jquery-2.0.3.min.js
	JSURL=https://dl.dropboxusercontent.com/u/1961350/arbor.js
	JSURL=https://dl.dropboxusercontent.com/u/1961350/arbor-tween.js

# Example

The presented example is derivated from the basic example of arbor library.
The complete documentation of arbor API can be found [here](http://arborjs.org/ "arbor.js") 
