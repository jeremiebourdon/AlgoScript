Blockly extension
=======================
The google blockly extension allows a graphical generation of javascript code

# Using extensions with AlgoScript (general presentation)
Adding an extension to AlgoScript is quite simple. It suffises to add these lines to the local file AlgoScript.config. 

	[extension name]
	TITLE=Extension description
	ENABLED=yes or no or ask : Extension is enabled
	JSURL= url of the javascript code of the extension (0, 1 or several JSURL possible)
	CSSURL=url of the CSS code of the extension (0, 1 or several JSURL possible)

# Using Blockly with AlgoScript

	[Blockly]
	TITLE=Extension for Visual code edition
	ENABLED=yes
	JSURL=https://algoscript.info/blockly.js
	JSURL=https://algoscript.info/blockly_post.js

# Example

Just try it !
