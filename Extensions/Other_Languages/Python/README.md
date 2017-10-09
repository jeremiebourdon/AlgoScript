Python extension
=======================
Javascript is not the unique language that can be used on the environment. Several other popular languages can also be used. Here we present how the programming environment can be used to build Python applications by using skulpt library. 

The python mode of Algoscript can be activated by [https://algoscript.info/?python=on](https://algoscript.info/?python=on).
All the (javascript) functions (english version) defined in the Algoscript library are also available by importing the algoscript library in python. Here is a simple example
 from algoscript import Line
 from math import cos,sin
 
 for i in range(1,720):
   a=i*3.14/180
   Line(200,200,200+100*cos(a),200+100*sin(a*2),"blue")


# Using extensions with AlgoScript (general presentation)
Adding an extension to AlgoScript is quite simple. It suffises to add these lines to the local file AlgoScript.config. 

	[extension name]
	TITLE=Extension description
	ENABLED=yes or no or ask : Extension is enabled
	JSURL= url of the javascript code of the extension (0, 1 or several JSURL possible)
	CSSURL=url of the CSS code of the extension (0, 1 or several JSURL possible)

# Using Python with AlgoScript

	[Python extension]
	TITLE=Extension Python (skulpt.js)
	ENABLED=yes
	JSURL=http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js
	JSURL=https://algoscript.info/skulpt.min.js
	JSURL=https://algoscript.info/skulpt-stdlib.js
	JSURL=https://algoscript.info/skulpt_post.js

# Example

The presented example is taken from [http://fr.wikibooks.org](http://fr.wikibooks.org).
The extension is based on skulpt.js library. A complete documentation can be found [here](http://www.skulpt.org/ "Skulpt.js").
