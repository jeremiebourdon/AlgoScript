Audiolet extension
=======================
The environment possesses some basic functions for sound synthesis. Audiolet is a powerful library for sound synthesis. 
Here, we present how Audiolet can be used in AlgoScript.

# Using extensions with AlgoScript (general presentation)
Adding an extension to AlgoScript is quite simple. It suffises to add these lines to the local file AlgoScript.config. 

	[extension name]
	TITLE=Extension description
	ENABLED=yes or no or ask : Extension is enabled
	JSURL= url of the javascript code of the extension (0, 1 or several JSURL possible)
	CSSURL=url of the CSS code of the extension (0, 1 or several JSURL possible)

# Using Audiolet with AlgoScript

	[Audiolet extension]
	TITLE=Extension Audiolet pour la synthèse audio
	ENABLED=yes
	JSURL=https://algoscript.info/Audiolet.min.js

# Example

The presented example is derivated from the basic example of Audiolet library.
The complete documentation of Audiolet API can be found [here](http://oampo.github.io/Audiolet/ "Audiolet.js") 
