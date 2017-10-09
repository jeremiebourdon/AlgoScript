Jappix extension
=======================
Jappix is a free social network based on an XMPP protocol. We propose an extension that adds a chat tool based on Jappix Mini. Users must possess a free jappix account created on https://jappix.com

# Using extensions with AlgoScript (general presentation)
Adding an extension to AlgoScript is quite simple. It suffises to add these lines to the local file AlgoScript.config. 

	[extension name]
	TITLE=Extension description
	ENABLED=yes or no or ask : Extension is enabled
	JSURL= url of the javascript code of the extension (0, 1 or several JSURL possible)
	CSSURL=url of the CSS code of the extension (0, 1 or several JSURL possible)

# Using Jappix Mini with AlgoScript

	[Jappix Mini extension]
	TITLE=Extension pour Jappix Mini
	ENABLED=yes
	JSURL=http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
	JSURL=https://algoscript.info/jappix-static.js
	JSURL=https://algoscript.info/Chat-jappix.js

# Example
Users must possess a free jappix account created on https://jappix.com
