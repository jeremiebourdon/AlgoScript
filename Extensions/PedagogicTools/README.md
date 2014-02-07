OpenStreetMap extension
=======================
Several libraries allows to deal with OpenStreetMap data (leaflet, Mapbox,...). Here, we present how lealet can be used in AlgoScript.

# Using extensions with AlgoScript (general presentation)
Adding an extension to AlgoScript is quite simple. It suffises to add these lines to the local file AlgoScript.config. 

	[extension name]
	TITLE=Extension description
	ENABLED=yes or no or ask : Extension is enabled
	JSURL= url of the javascript code of the extension (0, 1 or several JSURL possible)
	CSSURL=url of the CSS code of the extension (0, 1 or several JSURL possible)

# Using Leaflet/OpenStreetMap with AlgoScript

	[Openstreetmap extension]
	TITLE=Extension pour OpenStreetMap (leaflet.js)
	ENABLED=yes
	JSURL=https://dl.dropboxusercontent.com/u/1961350/leaflet.js
	CSSURL=https://dl.dropboxusercontent.com/u/1961350/leaflet.css

# Example

The presented example is derivated from the basic example of Leaflet library.
The complete documentation of Leaflet API can be found [here](http://leafletjs.com "Leaflet.js") 
