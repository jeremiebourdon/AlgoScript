Multithreading extension
=======================
Several libraries allows to deal with web workers (Parallel.js,...). Here, we present how parallel.js can be used in AlgoScript.

# Using extensions with AlgoScript (general presentation)
Adding an extension to AlgoScript is quite simple. It suffises to add these lines to the local file AlgoScript.config. 

	[extension name]
	TITLE=Extension description
	ENABLED=yes or no or ask : Extension is enabled
	JSURL= url of the javascript code of the extension (0, 1 or several JSURL possible)
	CSSURL=url of the CSS code of the extension (0, 1 or several JSURL possible)

# Using Parallel with AlgoScript

	[Parallel extension]
	TITLE=Extension Parallel pour le calcul parallèle multi-coeurs
	ENABLED=yes
	JSURL=https://algoscript.info/parallel.js  

# Example

The presented examples are derivated from the basic example of Parallel library.
The complete documentation of Parallel API can be found [here](http://adambom.github.io/parallel.js "parallel.js") 
