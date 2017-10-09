Me-speak extension
=======================
This extension adds a speech synthesis functionality to the environment by using mespeak.js library.

# Using extensions with AlgoScript (general presentation)
Adding an extension to AlgoScript is quite simple. It suffises to add these lines to the local file AlgoScript.config. 

	[extension name]
	TITLE=Extension description
	ENABLED=yes or no or ask : Extension is enabled
	JSURL= url of the javascript code of the extension (0, 1 or several JSURL possible)
	CSSURL=url of the CSS code of the extension (0, 1 or several JSURL possible)

# Using Speech synthesis with AlgoScript

	[Speech synthesis extension]
	TITLE=Extension mespeak
	ENABLED=yes
	JSURL=https://algoscript.info/mespeak.js
	JSURL=https://algoscript.info/mespeak_post.js

# Remarks
Two basic functions are added: SaisieVocale(message) and EcrireVocale(message).
