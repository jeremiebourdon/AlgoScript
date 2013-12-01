Processing extension
=======================
Javascript is not the unique language that can be used on the environment. Several other popular languages can also be used. Here we present how the programming environment can be used to build Processing applications. 

# Using extensions with AlgoScript (general presentation)
Adding an extension to AlgoScript is quite simple. It suffises to add these lines to the local file AlgoScript.config. 

	[extension name]
	TITLE=Extension description
	ENABLED=yes or no or ask : Extension is enabled
	JSURL= url of the javascript code of the extension (0, 1 or several JSURL possible)
	CSSURL=url of the CSS code of the extension (0, 1 or several JSURL possible)

# Using Processing with AlgoScript

	[Processing extension]
	TITLE=Extension Processing 1.4.1 (processing.js)
	ENABLED=yes
	JSURL=https://dl.dropboxusercontent.com/u/1961350/processing-1.4.1.min.js
	JSURL=https://dl.dropboxusercontent.com/u/1961350/Processing_post.js

# Example

The presented example is a classical game written in ProcessingJS.
The complete documentation of ProcessingJS API can be found [here](http://processingjs.org "ProcessingJS.js") 
