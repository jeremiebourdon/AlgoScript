Pedagogic tools extension
=======================
This extension adds two main pedagogic tools to the AlgoScript environment: a whiteboard (compatible with any TBI and tablet) and a slide viewer that comprise some algorithmic introductive courses in french.

# Using extensions with AlgoScript (general presentation)
Adding an extension to AlgoScript is quite simple. It suffises to add these lines to the local file AlgoScript.config. 

	[extension name]
	TITLE=Extension description
	ENABLED=yes or no or ask : Extension is enabled
	JSURL= url of the javascript code of the extension (0, 1 or several JSURL possible)
	CSSURL=url of the CSS code of the extension (0, 1 or several JSURL possible)

# Using Pedagogic tools with AlgoScript

	[Pedagogic Library]
	TITLE=Extension for adding pedagogic tools to the environment
	ENABLED=yes
	JSURL=https://algoscript.info/Pedagogic-tools.js
	CSSURL=https://algoscript.info/rasterizeHTML.js

# Remarks
It uses the rasterizeHTML library to display the content of the algorithmic introductive exercices (these exercises must be saved in an HTML format in the file named Exercices_tous.txt of the internal FS ). 
