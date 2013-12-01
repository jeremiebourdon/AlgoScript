Protovis extension
=======================
Several libraries allows to deal with data visualization (3D.js, Protovis,...). Here, we present how protovis can be used in AlgoScript.

# Using extensions with AlgoScript (general presentation)
Adding an extension to AlgoScript is quite simple. It suffises to add these lines to the local file AlgoScript.config. 

	[extension name]
	TITLE=Extension description
	ENABLED=yes or no or ask : Extension is enabled
	JSURL= url of the javascript code of the extension (0, 1 or several JSURL possible)
	CSSURL=url of the CSS code of the extension (0, 1 or several JSURL possible)

# Using Protovis with AlgoScript

	[Protovis extension]
	TITLE=Extension Protovis pour la visualisation de données http://mbostock.github.io/protovis/
	ENABLED=yes
	JSURL=https://dl.dropboxusercontent.com/u/1961350/protovis.min.js

# Example

The presented example is derivated from the basic example of Protovis library.
The complete documentation of Protovis API can be found [here](http://mbostock.github.io/protovis "protovis.js") 
